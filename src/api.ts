import firebase from 'firebase/app';
import { firestore } from './firebase';

interface IQuery {
    fieldPath: string | firebase.firestore.FieldPath;
    opStr: firebase.firestore.WhereFilterOp;
    value: string;
}

export const mapSnapshot = (
    snapshot: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>,
): firebase.firestore.DocumentData[] => snapshot.docs.map((doc) => doc.data());

export const getCollection = async (collection: string): Promise<Array<Record<string, unknown>>> => {
    const snapshot = await firestore.collection(collection).get();

    return mapSnapshot(snapshot);
};

export const addCollection = async (collection: string, payload: Record<string, unknown>): Promise<void> => {
    await firestore.collection(collection).add(payload);
};

export const queryCollection = async (collection: string, query: IQuery): Promise<Array<Record<string, unknown>>> => {
    const { fieldPath, opStr, value } = query;

    const ref = await firestore.collection(collection);
    const snapshot = await ref.where(fieldPath, opStr, value).get();

    return mapSnapshot(snapshot);
};
