// Body surface area Du Bois formula:
export const calculateBodySurfaceArea = (width: number, height: number): string => {
    const result = 0.007184 * Math.pow(width, 0.425) * Math.pow(height, 0.725);

    return result.toFixed(2);
};

// Indexes to body surface area

export const calculateIndexToBSA = (value: string, bsa: string): string => {
    const result = Number(value) / Number(bsa);

    return result.toFixed(2);
};

// Myocardial mass

export const calculateMyocardialMass = (mzhp: string, kdr: string, zs: string): string => {
    const result = 0.8 * 1.04 * (Math.pow(Number(mzhp) + Number(kdr) + Number(zs), 3) - Math.pow(Number(kdr), 3)) + 0.6;

    return Math.ceil(result / 1000).toFixed(0);
};

export const calculateUO = (kdo: string, kso: string): string => (Number(kdo) - Number(kso)).toFixed(0);
