"use client";

import { useOthers, useSelf } from "@liveblocks/react/suspense";

import { UserAvatar } from "./user-avatar";

const MAX_SHOWN_USERS = 2;

export const Participants = () => {
  const currentUser = useSelf();
  const selfData = currentUser.info;
  const otherUsers = useOthers();
  const hasMoreUSers = otherUsers.length > MAX_SHOWN_USERS;

  return (
    <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md">
      <div className="flex gap-x-2">
        {otherUsers.slice(0, MAX_SHOWN_USERS).map(({ connectionId, info }) => (
          <UserAvatar
            key={connectionId}
            name={info?.name}
            src={info?.picture}
          />
        ))}
      </div>
      <UserAvatar name={selfData?.name} src={selfData?.picture} />
    </div>
  );
};

export const ParticipantsSkeleton = () => {
  return (
    <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md w-[100px]"></div>
  );
};
