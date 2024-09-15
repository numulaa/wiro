"use client";

import { useOthers, useSelf } from "@liveblocks/react/suspense";

import { UserAvatar } from "./user-avatar";
import { ConnectionIdToColor } from "@/lib/utils";

const MAX_SHOWN_USERS = 2; // max shown other users

export const Participants = () => {
  const currentUser = useSelf();
  const selfData = currentUser.info;
  const otherUsers = useOthers();
  const hasMoreUsers = otherUsers.length > MAX_SHOWN_USERS;

  return (
    <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md">
      <div className="flex gap-x-2">
        {otherUsers.slice(0, MAX_SHOWN_USERS).map(({ connectionId, info }) => (
          <UserAvatar
            borderColor={ConnectionIdToColor(connectionId)}
            key={connectionId}
            name={info?.name}
            src={info?.picture}
            fallback={info?.name?.[0] || "T"}
          />
        ))}
      </div>
      {currentUser && (
        <UserAvatar
          borderColor={ConnectionIdToColor(currentUser.connectionId)}
          src={selfData?.picture}
          name={`${selfData?.name} (You)`}
          fallback={selfData?.name?.[0]}
        />
      )}

      {hasMoreUsers && (
        <UserAvatar
          name={`${otherUsers.length - MAX_SHOWN_USERS} more`}
          fallback={`+${otherUsers.length - MAX_SHOWN_USERS}`}
        />
      )}
    </div>
  );
};

export const ParticipantsSkeleton = () => {
  return (
    <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md w-[100px]"></div>
  );
};
