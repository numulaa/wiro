import { shallow } from "@liveblocks/react";

import { Layer, XYWH } from "@/types/canvas";
import { useStorage, useSelf } from "@liveblocks/react/suspense";

const boundingBox = (layers: Layer[]): XYWH | null => {
  const firstLayer = layers[0];

  if (!firstLayer) {
    return null;
  }

  let left = firstLayer.x;
  let right = firstLayer.x + firstLayer.width;
  let top = firstLayer.y;
  let bottom = firstLayer.y + firstLayer.height;

  for (let i = 1; i < layers.length; i++) {
    const { x, y, width, height } = layers[i];
    if (left > x) {
      left = x;
    } else if (right < x + width) {
      right = x + width;
    } else if (top > y) {
      top = y;
    } else if (bottom < y + height) {
      bottom = y + height;
    }
  }

  return {
    x: left,
    y: top,
    width: right - left,
    height: bottom - top,
  };
};

export const useSelectionBounds = () => {
  const selection = useSelf((me) => me.presence.selection);

  return useStorage((root) => {
    const selectedLayer = selection.map((layerId) => root.layers.get(layerId)!);
    return boundingBox(selectedLayer);
  }, shallow);
};
