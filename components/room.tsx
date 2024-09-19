"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { LiveMap, LiveList, LiveObject } from "@liveblocks/client";

import { Layer } from "@/types/canvas";
import { Loading } from "@/app/board/[boardId]/_components/canvas-loading";
import { RoomProvider } from "@liveblocks/react";

// import { RoomProvider } from "/liveblocks.config";

interface RoomProps {
  children: ReactNode;
  roomId: string;
  fallback: NonNullable<ReactNode> | null;
}

export const Room = ({ children, roomId }: RoomProps) => {
  return (
    <LiveblocksProvider authEndpoint="/api/liveblocks-auth" throttle={16}>
      <RoomProvider
        id={roomId}
        initialPresence={{
          cursor: null,
          selection: [],
        }}
        initialStorage={{
          layers: new LiveMap<string, LiveObject<Layer>>(),
          layerIds: new LiveList([]),
        }}>
        <ClientSideSuspense fallback={<Loading />}>
          {() => children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
};
