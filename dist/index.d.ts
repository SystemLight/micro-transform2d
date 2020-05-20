export declare class Transform2D {
    el: HTMLElement;
    matchMatrix: RegExp;
    matchTranslate: RegExp;
    matchScale: RegExp;
    matchRotate: RegExp;
    matchSkew: RegExp;
    constructor(el: HTMLElement);
    radian2angle(radian: number): number;
    angle2radian(angle: number): number;
    transform(): string;
    setTransform(result: RegExpMatchArray | null, val: string): this;
    getMatrix(): number[];
    setMatrix(matrix: Array<number>): this;
    getTranslate(): string[] | number[];
    setTranslate(x: number, y: number): this;
    getScale(): string[] | number[];
    setScale(sca: number): this;
    getRotate(): string[] | number[];
    setRotate(angle: number): this;
    getSkew(): string[] | number[];
    setSkew(xAngle: number, yAngle?: number): this;
}
