import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase-config";
import useGetAuth from "./useGetAuth";

export default function useGetDataWithUserId(collectionName = "") {
  const { auth } = useGetAuth();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (auth.is_login) {
      const q = query(
        collection(db, collectionName),
        where("userid", "==", auth?.userId || "")
      );
      onSnapshot(q, (doc) => {
        doc.forEach((item) => {
          setData({ ...item.data(), is_login: true });
        });
      });
    }
  }, [auth, collectionName]);

  return {
    data,
  };
}
