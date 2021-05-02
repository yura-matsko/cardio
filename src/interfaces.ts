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
    gender: genderType;
    phone: number | undefined;
    postalCode: number | undefined;
    city: string | undefined;
    street: string | undefined;
    houseNumber: string | undefined;
    appartment: string | undefined;
    height: number | undefined;
    weight: number | undefined;
    bodyArea: number | undefined;
}
