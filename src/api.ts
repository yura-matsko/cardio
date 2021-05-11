import firebase from 'firebase/app';
import { firestore } from './firebase';

export interface IQuery {
    fieldPath: string | firebase.firestore.FieldPath;
    opStr: firebase.firestore.WhereFilterOp;
    value: string;
}

export const mapSnapshot = (
    snapshot: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>,
): firebase.firestore.DocumentData[] => snapshot.docs.map((doc) => doc.data());

export const getCollection = async (collection: string): Promise<firebase.firestore.DocumentData[]> => {
    const snapshot = await firestore.collection(collection).get();

    return mapSnapshot(snapshot);
};

export const updateDocument = async (
    collection: string,
    id: string,
    payload: Record<string, unknown | number>,
): Promise<void> => {
    const doc = await firestore.collection(collection).doc(id);

    doc.update(payload);
};

export const deleteDocument = async (collection: string, id: string | undefined): Promise<void> => {
    if (!id) return;

    await firestore
        .collection(collection)
        .doc(id as string)
        .delete();
};

export const addDocument = async (collection: string, payload: Record<string, unknown | number>): Promise<void> => {
    await firestore
        .collection(collection)
        .doc(payload.id as string)
        .set(payload);
};

export const queryCollection = async (
    collection: string,
    query: IQuery,
): Promise<firebase.firestore.DocumentData[]> => {
    const { fieldPath, opStr, value } = query;

    const ref = await firestore.collection(collection);
    const snapshot = await ref.where(fieldPath, opStr, value).get();

    return mapSnapshot(snapshot);
};
