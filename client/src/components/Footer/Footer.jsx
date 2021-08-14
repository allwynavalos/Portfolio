import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import SignOut from '../../screens/SignOut/SignOut'
import SignIn from "../../screens/SignIn/SignIn";
import { verify } from "../../services/admin";
import './Footer.css'

const Footer = (props) => {
  const [adminVerified, setAdminVerified] = useState(null);

  useEffect(() => {
    const checkAdmin = async () => {
      const adminExist = await verify();
      setAdminVerified(adminExist ? true : false);
    };
    checkAdmin();
  }, []);

  return (
    <div className="Footer">
      <Link className="signin" to="/signin">
        Sign In
      </Link>
      {adminVerified ? (
        <>
          <Link to="/" className="signout">
            Sign Out
          </Link>
        </>
      ) : null}
    </div>
  );
};

export default Footer;