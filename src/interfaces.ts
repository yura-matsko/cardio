export interface ISignIn {
    email: string | null;
    password: string | null;
}

export type genderType = 'm' | 'f' | '';

export interface IPatient {
    firstName: string | undefined;
    lastName: string | undefined;
    fatherName: string | undefined;
    birthDate: number | null;
    gender: string;
    phone: number | undefined;
    postalCode: number | undefined;
    city: string | undefined;
    street: string | undefined;
    houseNumber: string | undefined;
    appartment: string | undefined;
    height: number | undefined;
    weight: number | undefined;
    bodyArea: string | undefined;
    id?: string;
}

export interface IPatientMapped {
    name: string;
    address: string;
    birthDate: string;
    phone: number;
    height: number;
    weight: number;
    bodyArea: number;
    id: string;
}

export interface IVisit {
    [key: string]: string;
    sinus: string;
    peresheek: string;
    vosh: string;
    volume: string;
    duga: string;
    nish: string;
    mrezh: string;
    vrezh: string;
    sinusToBSA: string;
    peresheekToBSA: string;
    voshToBSA: string;
    volumeToBSA: string;
    mzhp: string;
    kdr: string;
    kdo: string;
    kdoToBSA: string;
    gls: string;
    zs: string;
    ksr: string;
    kso: string;
    uoToBSA: string;
    fb3d: string;
    mm: string;
    fu: string;
    uo: string;
    mok: string;
    DPtoDT: string;
    mmToBSA: string;
    ots: string;
    fvSimpson: string;
    si: string;
}

export interface IVisitFormSection {
    form: IVisit;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
