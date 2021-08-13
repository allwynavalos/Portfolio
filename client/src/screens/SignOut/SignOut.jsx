
import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { logout } from "../../services/admin";

const LogOut = () => {
  const [signedOut, setSignedOut] = useState(false);
  useEffect(() => {
    const signOutUser = async () => {
      const signOutBool = await logout();
      setSignedOut(signOutBool);
    };
    signOutUser();
  }, []);
  return signedOut ? <Redirect to="signin" /> : <h2>Signed out...</h2>;
  
};

export default LogOut;