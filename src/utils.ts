import format from 'date-fns/format';
import { DateFormat } from './enums';

export const generateFullName = (firstName?: string, lastName?: string, fatherName?: string): string => {
    if (!lastName && !firstName && !fatherName) return 'Не удалось опознать пациента, возможно это Джейсон Борн';

    return [firstName, lastName, fatherName].filter(Boolean).join(' ');
};

export const formatDate = (date: number | null): string | void => {
    if (!date) return;

    return format(new Date(date), DateFormat.Default);
};
