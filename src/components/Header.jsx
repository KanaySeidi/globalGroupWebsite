import React from "react";
import { headersBtn, signInBtn } from "../helpers/headersBtn";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <>
      <div className="w-screen h-10 bg-tranparent z-10 absolute">
        <div className="mx-24 flex justify-between h-full items-center">
          <div className="flex gap-5 items-center">
            {headersBtn.map((item) => (
              <Link className="flex text-center" to={item.way} key={item.id}>
                <p className="text-xs">{item.title}</p>
              </Link>
            ))}
          </div>
          <div className="flex gap-2 items-center h-full">
            {signInBtn.map((item) => (
              <p
                className="text-xs"
                style={
                  location.pathname !== "/"
                    ? { color: "black" }
                    : { color: item.color }
                }
                key={item.id}
              >
                {item.title}
              </p>
            ))}
          </div>
          {location.pathname === "/" ? (
            <button>Зарегистрироваться</button>
          ) : (
            <button>Авторизоваться</button>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
