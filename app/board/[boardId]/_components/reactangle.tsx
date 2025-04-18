import { colorToCss } from "@/lib/utils";
import { RectangleLayer } from "@/types/canvas";

interface RectangleProps {
  id: string;
  layer: RectangleLayer;
  onPointerDown: (e: React.PointerEvent, id: string) => void;
  selectionColor?: string;
}

export const Reactangle = ({
  id,
  layer,
  onPointerDown,
  selectionColor,
}: RectangleProps) => {
  const { x, y, fill, height, width } = layer;

  return (
    <rect
      className="drop-shadow-md"
      onPointerDown={(e) => onPointerDown(e, id)}
      style={{ transform: `-translate(${x}px, ${y}px)` }}
      x={x}
      y={y}
      width={width}
      height={height}
      strokeWidth={1}
      stroke={selectionColor || "transparent"}
      fill={fill ? colorToCss(fill) : "#CCC"}
    />
  );
};
