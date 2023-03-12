import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LinkItem from "./LinkItem";

const HeaderList = [
  {
    name: "Trang chủ",
    path: "/",
  },
  {
    name: "Tủ sách hướng nghiệp",
    path: "/collection/tu-sach-huong-nghiep",
  },
  {
    name: "Tủ sách triết học",
    path: "/tu-sach-triet-hoc",
  },
  {
    name: "Liên hệ",
    path: "/lien-he",
  },
];

const Header = () => {

  const [lenghtCart, setLenghtCart] = useState(0);

  useEffect(() => {
    fetch("https://api-ebook.cyclic.app/api/carts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      withCredentials: true,
    })
      .then((res) => res.json())
      .then((data) => {
        setLenghtCart(data.products.length);
      });
  }, []);

  return (
    <div className="py-5 shadow-[0_-1px_4px_rgba(0,_0,_0,_0.15)] bg-whiteSoft">
      <div className="container flex items-center justify-between">
        <Link to="/" className="font-bold text-3xl text-text1">
          Ebook.co
        </Link>
        <div className="">
          <ul className="flex items-center gap-x-10">
            {HeaderList.map((item, index) => (
              <li key={index}>
                <LinkItem path={item.path}>{item.name}</LinkItem>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-text3 flex items-center gap-x-10">
          <Link to="/tim-kiem">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </Link>
          <Link className="flex items-center" to="/gio-hang">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <span className="text-sm">({lenghtCart})</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
