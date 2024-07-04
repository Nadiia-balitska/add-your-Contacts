import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/slice";
import { logoutThunk } from "../../redux/auth/operations";

export const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header className="navbar bg-base-100 flex justify-between items-center  ">
      {/* <h2>Auth</h2> */}
      <h2 className="btn btn-ghost text-xl">{user.email}</h2>
      <ul className="flex gap-5 items-center">
        <li>
          <NavLink className="btn btn-ghost text-xl" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacts" className="btn btn-ghost text-xl">
            Contacts
          </NavLink>
        </li>
        {!isLoggedIn && (
          <>
            <li>
              <NavLink to="/login" className="btn btn-ghost text-xl">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" className="btn btn-ghost text-xl">
                Register
              </NavLink>
            </li>
          </>
        )}
        {isLoggedIn && (
          <li>
            <button
              onClick={() => dispatch(logoutThunk())}
              className="btn btn-outline btn-accent"
            >
              Logout
            </button>
          </li>
        )}
      </ul>
    </header>
  );
};
