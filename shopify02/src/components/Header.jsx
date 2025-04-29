import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Header() {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="bg-white shadow-md py-4">
      <div className="container  max-w-[1460px] flex flex-grow items-center justify-between px-3 sm:px-6 md:px-20 lg:px-32 mx-auto">
        <Link to="/" className="text-2xl font-bold text-primary">
          ማሜ ቡቲክ
        </Link>
        <nav>
          <ul className="flex items-center space-x-8">
            <li>
              <Link to="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary">
               Contact
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-primary">
                Products
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-primary">
                Cart
              </Link>
            </li>
            {user ? (
              <>
                <li>
                  <button onClick={logout} className="hover:text-primary">
                    Logout
                  </button>
                </li>
                <li>
                  <span>Welcome, {user.email}</span>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login" className=" hover:text-primary">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/register" className=" hover:text-primary">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
