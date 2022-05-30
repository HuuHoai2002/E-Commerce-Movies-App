import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import {
  collection,
  doc,
  onSnapshot,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { auth, db } from "../firebase/firebase-config";

const firebaseServices = () => {
  async function createAccount(email = "", password = "", fullname = "") {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: fullname,
      });
      // thêm dữ liệu vào collection users mỗi khi tạo mới một user
      const newUsersRef = doc(db, "users", auth.currentUser.uid);
      await setDoc(newUsersRef, {
        userName: fullname,
        email,
        password,
        userId: auth.currentUser.uid,
      });
      // thêm dũ liệu vào collection cart mỗi khi tạo mới 1 user
      const newCartRef = doc(db, "cart", auth.currentUser.uid);
      await setDoc(newCartRef, {
        products: {
          userId: auth.currentUser.uid,
          userName: auth.currentUser.displayName,
          cartItems: [],
          quantity: 0,
          createdAt: serverTimestamp(),
        },
      });
      toast.success("Đăng ký tài khoản thành công", { pauseOnHover: false });
    } catch (error) {
      console.log("Error: ", error);
      toast.error("Lỗi, địa chỉ email đã được sử dụng !", {
        pauseOnHover: false,
      });
    }
  }

  async function signInAccount(email = "", password = "") {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Đăng nhập tài khoản thành công", { pauseOnHover: false });
    } catch (error) {
      console.log("Error: ", error);
      toast.error("Lỗi, email hoặc mật khẩu không chính xác !", {
        pauseOnHover: false,
      });
    }
  }

  async function signOutAccount() {
    await signOut(auth);
  }

  // async function getDataWithUserId(userId = "", collectionName) {
  //   const q = query(
  //     collection(db, collectionName),
  //     where("userId", "==", true)
  //   );
  //   const querySnapshot = await getDocs(q);
  //   querySnapshot.forEach((doc) => {
  //     // doc.data() is never undefined for query doc snapshots
  //     console.log(doc.id, " => ", doc.data());
  //   });
  // }

  function getDataWithUserId(collectionName = "", userId = "") {
    const docRef = doc(db, collectionName, userId);
    const data = onSnapshot(docRef, (doc) => doc.data());

    return data;
  }

  async function updateDataWithUserId(collectionName = "", userId = "", data) {
    const docRef = doc(db, collectionName, userId);
    await updateDoc(docRef, { ...data, updateAt: serverTimestamp() });
  }

  function getAllDataWithCollection(collectionName = "") {
    let results = [];
    const colRef = collection(db, collectionName);
    onSnapshot(colRef, (snapShot) => {
      snapShot.forEach((doc) => {
        results.push({
          id: doc.id,
          ...doc.data(),
        });
      });
    });
    return results;
  }

  return {
    createAccount,
    signInAccount,
    signOutAccount,
    getDataWithUserId,
    getAllDataWithCollection,
    updateDataWithUserId,
  };
};

export default firebaseServices;
