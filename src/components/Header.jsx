import "./components.css";
import menuIcon from "../assets/menu.svg";
import closeIcon from "../assets/close.svg";
import logoIcon from "../../public/w.png";
import { useState } from "react";

const navigation = [
  { name: "Contact", href: "#", className: "item1" },
  { name: "Resume", href: "#", className: "item2" },
  { name: "About", href: "#", className: "item3" },
  { name: "Certificate", href: "#", className: "item4" },
  { name: "Projects", href: "#", className: "item5" },
];

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <div className="lg:block md:block sm:hidden ssm:hidden">
        <div className="flex  justify-center ">
          <div className=" max-w-4xl  flex justify-evenly gap-10  ">
            {navigation.map((item) => {
              return (
                <a key={item.name} className="button" href={item.href}>
                  {item.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="sm:block lg:hidden md:hidden">
        <div className=" mr-9 flex justify-end items-center">
          {!openMenu ? (
            <img
              src={menuIcon}
              alt="menu icon"
              onClick={() => {
                setOpenMenu(true);
              }}
            />
          ) : (
            <img
              src={closeIcon}
              alt="menu icon"
              onClick={() => {
                setOpenMenu(false);
              }}
            />
          )}
        </div>
        {openMenu ? (
          <div className="flex justify-center items-center text-blue-50  flex-col">
            {/* <img src={logoIcon} alt="Logo" className="w-10 h-10" /> */}
            {navigation.map((item) => {
              return (
                <a className="my-2" key={item.name} href={item.href}>
                  {item.name}
                </a>
              );
            })}
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
