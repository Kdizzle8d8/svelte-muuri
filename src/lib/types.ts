export type Dimensions = {
  width: number,
  height: number
}
export type ResizeHandler = ( from: Dimensions, to: Dimensions) => Dimensions;

