"use client";

import { LayerType } from "@/types/canvas";
import { useStorage } from "@liveblocks/react/suspense";
import { memo } from "react";
import { Reactangle } from "./reactangle";

interface LayerPreviewProps {
  id: string;
  selectionColor?: string;
  onLayerPointerDown: (e: React.PointerEvent, layerId: string) => void;
}

export const LayerPreview = memo(
  ({ id, selectionColor, onLayerPointerDown }: LayerPreviewProps) => {
    const layer = useStorage((root) => root.layers.get(id));

    if (!layer) {
      return null;
    }
    switch (layer.type) {
      case LayerType.Rectangle:
        return (
          <Reactangle
            id={id}
            onPointerDown={onLayerPointerDown}
            layer={layer}
            selectionColor={selectionColor}
          />
        );
      default:
        console.warn("Unknown layer type");
        return null;
    }
  }
);

LayerPreview.displayName = "LayerPreview";
