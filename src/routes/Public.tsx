import { useState, useEffect, ReactNode } from "react";
import { auth } from "../services/firebaseConnection";
import { onAuthStateChanged } from "firebase/auth";
import Backdrop from "@mui/material/Backdrop";
import { CircularProgress } from "@mui/material";
import { Navigate } from "react-router-dom";

type TypePublicRoute = {
  children: ReactNode;
};

export default function Public({ children }: TypePublicRoute) {
  const [loading, setLoading] = useState<boolean>(true);
  const [signed, setSigned] = useState<boolean>(false);

  const checkLogin = async () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setSigned(true);
      } else {
        setSigned(false);
      }
      setLoading(false);
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

  if (signed) {
    return <Navigate to="/home" />;
  }

  return children;
}
