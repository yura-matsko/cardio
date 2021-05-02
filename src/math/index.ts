// Body surface area Du Bois formula:
export const calculateBodySurfaceArea = (width: number, height: number): number => {
    const result = 0.007184 * Math.pow(width, 0.425) * Math.pow(height, 0.725);

    return Number(result.toFixed(2));
};
