import Button from "components/Button";
import React, { Suspense } from "react";
import { Link } from "react-router-dom";

interface IProps {
  isLoggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Nav: React.FC<IProps> = ({ isLoggedIn, setLoggedIn }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <Link to="/" style={{ textDecoration: "none", color: "initial" }}>
        <h3>App</h3>
      </Link>
      <ul
        style={{
          display: "flex",
          listStyleType: "none",
          gap: "1rem",
          padding: 0,
        }}
      >
        {isLoggedIn ? (
          <li>
            <Suspense fallback="loading...">
              <Button label="Logout" onClick={() => setLoggedIn(false)} />
            </Suspense>
          </li>
        ) : (
          <>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};
export default Nav;
