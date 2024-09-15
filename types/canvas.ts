export type Color = {
  r: number;
  g: number;
  b: number;
};

export type Camera = {
  x: number;
  y: number;
};

export enum LayerType {
  Reactangle,
  Ellipse,
  Path,
  Text,
  Note,
}

export type ReactangleLayer = {
  type: LayerType.Reactangle;
  x: number; // coordinate
  y: number;
  height: number; // to resize
  width: number;
  fill: Color;
  value?: string;
};
export type EllipseLayer = {
  type: LayerType.Ellipse;
  x: number; // coordinate
  y: number;
  height: number; // to resize
  width: number;
  fill: Color;
  value?: string;
};
export type PathLayer = {
  type: LayerType.Path;
  x: number; // coordinate
  y: number;
  height: number; // to resize
  width: number;
  fill: Color;
  points: number[][];
  value?: string;
};
export type TextLayer = {
  type: LayerType.Text;
  x: number; // coordinate
  y: number;
  height: number; // to resize
  width: number;
  fill: Color;
  value?: string;
};
export type NoteLayer = {
  type: LayerType.Note;
  x: number; // coordinate
  y: number;
  height: number; // to resize
  width: number;
  fill: Color;
  value?: string;
};

export type Point = {
  x: number;
  y: number;
};

// for resizing
export type XYWH = {
  x: number;
  y: number;
  width: number;
  height: number;
};
export enum Side {
  top = 1,
  Bottom = 2,
  Left = 4,
  Right = 8,
}

export type CanvasState =
  | {
      mode: CanvasMode.None;
    }
  | {
      mode: CanvasMode.Pressing;
      origin: Point;
    }
  | { mode: CanvasMode.SelectionNet; origin: Point; current?: Point }
  | {
      mode: CanvasMode.Translating;
      current: Point;
    }
  | {
      mode: CanvasMode.Inserting;
      layerType:
        | LayerType.Ellipse
        | LayerType.Reactangle
        | LayerType.Path
        | LayerType.Text
        | LayerType.Note;
    }
  | {
      mode: CanvasMode.Resizing;
      initialBound: XYWH;
      corner: Side;
    }
  | {
      mode: CanvasMode.Pencil;
    };

export enum CanvasMode {
  None,
  Pressing,
  SelectionNet,
  Translating,
  Inserting,
  Resizing,
  Pencil,
}
