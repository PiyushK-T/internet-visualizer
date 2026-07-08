export interface PathData {

  id:string;

  path:SVGPathElement;

}


export const pathRegistry:Record<string,SVGPathElement> = {};