import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import {
  arrayRemove,
  arrayUnion,
  doc,
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
        userid: auth.currentUser.uid,
        username: fullname,
        email,
        password,
      });
      // thêm dũ liệu vào collection cart mỗi khi tạo mới 1 user
      const newCartRef = doc(db, "cart", auth.currentUser.uid);
      await setDoc(newCartRef, {
        userid: auth.currentUser.uid,
        username: auth.currentUser.displayName,
        orders: {
          items: [],
          total: 0,
          created_at: serverTimestamp(),
        },
        completed_orders: [],
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

  async function updateDataToFirestore(data, field = "orders.items") {
    const docRef = doc(db, "cart", auth.currentUser.uid);
    try {
      await updateDoc(docRef, {
        [field]: field.includes("orders.items") ? arrayUnion(data) : data,
        updateAt: serverTimestamp(),
      });
      !field.includes("completed_orders") &&
        toast.success("Thêm sản phẩm thành công", { pauseOnHover: false });
    } catch (error) {
      toast.warning("Bạn đã thêm sản phẩm này rồi");
    }
  }

  async function removeDataToFirestore(data) {
    const docRef = doc(db, "cart", auth.currentUser.uid);
    try {
      await updateDoc(docRef, {
        "orders.items": arrayRemove(Array.isArray(data) ? [...data] : data),
        updateAt: serverTimestamp(),
      });
    } catch (error) {
      // toast.warning("Bạn đã thêm sản phẩm này rồi");
      console.log("Error: ", error, { pauseOnHover: false });
    }
  }

  return {
    createAccount,
    signInAccount,
    signOutAccount,
    updateDataToFirestore,
    removeDataToFirestore,
  };
};

export default firebaseServices;
