import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const COLORS = [
  "#ff1744",
  "#f50057",
  "#d500f9",
  "#651fff",
  "#00b0ff",
  "#00e5ff",
  "#1de9b6",
  "#00e676",
  "#c6ff00",
  "#ffea00",
  "#ff9100",
  "#37474f",
];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function ConnectionIdToColor(connectionId: number): string {
  return COLORS[connectionId % COLORS.length];
}
