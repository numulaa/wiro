// Define Liveblocks types for your application
// https://liveblocks.io/docs/api-reference/liveblocks-react#Typing-your-data

import { 
  createClient,
LiveList,
LiveMap,
LiveObject } 
  from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";

import {Layer, Color} from "@/types/canvas"
 

const client = createClient({
  authEndpoint: "/api/liveblocks-auth",
  throttle: 16,
});

declare global {
  interface Liveblocks {
    // Each user's Presence, for useMyPresence, useOthers, etc.
    type Presence = {
      // Example, real-time cursor coordinates
      cursor: { x: number; y: number } | null;
    };

    // The Storage tree for the room, for useMutation, useStorage, etc.
    type Storage = {
      layers: LiveMap<string, LiveObject<Layer>>;
      layerIds: LiveList<string>;
    };

    // Custom user info set when authenticating with a secret key
    type UserMeta =  {
      id?: string;
      info?: {
        name?: string;
        picture?: string;
      };
    };

    // Custom events, for useBroadcastEvent, useEventListener
    type RoomEvent = {};
    // Example has two events, using a union
    // | { type: "PLAY" }
    // | { type: "REACTION"; emoji: "🔥" };

    // Custom metadata set on threads, for useThreads, useCreateThread, etc.
    type ThreadMetadata = {
      // Example, attaching coordinates to a thread
      // x: number;
      // y: number;
    };

    // Custom room info set with resolveRoomsInfo, for useRoomInfo
    type RoomInfo = {
      // Example, rooms with a title and url
      // title: string;
      // url: string;
    };
  }
}

export {};
