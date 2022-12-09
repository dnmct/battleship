import { Position } from "./grid";
import { ShipType } from "./ship";

export const gridChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
export const gridNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export const shipNames: ShipType[] = [
  "destroyer",
  "submarine",
  "cruiser",
  "battleship",
  "carrier",
];

export function makePositionFromId(id: string): Position {
  const [char, number] = id.split("-").slice(1);
  return `${char}-${parseInt(number)}`;
}

export function getRadomElementFromArray<T>(array: T[]): T {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
