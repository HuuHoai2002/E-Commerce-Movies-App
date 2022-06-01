import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase-config";
import useGetAuth from "./useGetAuth";

export default function useGetDataWithUserId(collectionName = "") {
  const { auth } = useGetAuth();
  const [data, setData] = useState({});

  useEffect(() => {
    const q = query(
      collection(db, collectionName),
      where("userid", "==", auth?.userId || "")
    );
    onSnapshot(q, (doc) => {
      doc.forEach((item) => {
        setData({ ...item.data() });
      });
    });
  }, [auth.userId, collectionName]);

  return {
    data,
  };
}
