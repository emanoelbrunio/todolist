import { useState, useEffect, ReactNode } from "react";
import { auth } from "../services/firebaseConnection";
import { onAuthStateChanged } from "firebase/auth";
import Backdrop from "@mui/material/Backdrop";
import { CircularProgress } from "@mui/material";
import { Navigate } from "react-router-dom";

type TypeUserData = {
  uid: string;
  email: string | null;
};

type TypePrivate = {
  children: ReactNode;
};

export default function Private({ children }: TypePrivate) {
  const [loading, setLoading] = useState<boolean>(true);
  const [signed, setSigned] = useState<boolean>(false);

  const checkLogin = async () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userData: TypeUserData = {
          email: user.email,
          uid: user.uid,
        };
        localStorage.setItem("@detailsUser", JSON.stringify(userData));
        setLoading(false);
        setSigned(true);
      } else {
        setLoading(false);
        setSigned(false);
      }
    });
  };

  useEffect(() => {
    checkLogin();
  }, []);

  if (loading) {
    return (
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  if (!signed) {
    return <Navigate to="/" />;
  }

  return children;
}
