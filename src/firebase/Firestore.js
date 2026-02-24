import app from "./app.js";
import { auth } from "./Auth.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { deletedFrontPage, deletedPDF } from "./Storage.js";

const db = getFirestore(app);

export const saveEbook = async (
  name,
  description,
  author,
  URL,
  DOI,
  anio,
  frontPage,
  PDF,
  frontPageRef,
  PDFRef
) => {
  const docRef = await addDoc(collection(db, "ebook"), {
    name: name,
    description: description,
    author: author,
    URL: URL,
    DOI: DOI,
    anio: anio,
    frontPage: frontPage,
    PDF: PDF,
    frontPageRef: frontPageRef,
    PDFRef: PDFRef,
  });
};

export const updateEbook = async (
  id,
  name,
  description,
  author,
  URL,
  DOI,
  anio,
  frontPage,
  PDF,
  frontPageRef,
  PDFRef
) => {
  const docRef = doc(db, "ebook", id);
  await updateDoc(docRef, {
    name: name,
    description: description,
    author: author,
    URL: URL,
    DOI: DOI,
    anio: anio,
    frontPage: frontPage,
    PDF: PDF,
    frontPageRef: frontPageRef,
    PDFRef: PDFRef,
  });
};

export const deleteEbook = async (document) => {
  await deleteDoc(doc(db, "ebook", document.id));
  await deletedFrontPage(document.data().frontPageRef);
  await deletedPDF(document.data().PDFRef);
};

export const getAllEbook = async () => {
  const querySnapshot = await getDocs(collection(db, "ebook"));
  return querySnapshot;
};

export const getEbook = async (refDoc) => {
  const docRef = doc(db, "ebook", refDoc);
  const docSnap = await getDoc(docRef);
  return docSnap;
};
