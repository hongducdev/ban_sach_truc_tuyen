import React from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import FooterItem from "./FooterItem";
import FooterItemLink from "./FooterItemLink";
import FooterItemContact from "./FooterItemContact";

const SocialList = [
  {
    name: "Facebook",
    path: "https://www.facebook.com/",
    icon: <FaFacebook />,
  },
  {
    name: "Github",
    path: "https://github.com/hongduccodedao/ban_sach_truc_tuyen",
    icon: <FaGithub />,
  },
];

const ContactList = [
  {
    title: "Điện thoại",
    contact: "0123456789",
  },
  {
    title: "Email",
    contact: "hongducyb123@gmail.com",
  },
  {
    title: "Địa chỉ",
    contact: "Xã Quyết Thắng, Thành phố Thái Nguyên, Tỉnh Thái Nguyên",
  },
];

const QuestionList = [
  {
    name: "Giới thiệu",
    path: "/",
  },
  {
    name: "Pháp lý & Câu hỏi",
    path: "/",
  },
  {
    name: "Tủ sách",
    path: "/",
  },
]

const Footer = () => {
  return (
    <div className="py-5 bg-whiteSoft">
      <div className="container flex items-center justify-between">
        <FooterItem title="Giới thiệu">
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="mt-4">
            <ul className="flex items-center gap-x-4">
              {SocialList.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.path}
                    className="text-3xl text-text2 hover:text-text1 hover:duration-300 hover:ease-in-out">
                    {item.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </FooterItem>
        <FooterItem title="Pháp lý & Câu hỏi">
          <ul className="text-sm flex list-disc flex-col gap-2">
            {QuestionList.map((item, index) => (
              <FooterItemLink key={index} path={item.path}>
                {item.name}
              </FooterItemLink>
            ))}
          </ul>
        </FooterItem>
        <FooterItem title="Liên hệ">
          <ul className="text-sm flex list-disc flex-col gap-2">
            {ContactList.map((item, index) => (
              <FooterItemContact
                key={index}
                titleContact={item.title}
                contact={item.contact}
              />
            ))}
          </ul>
        </FooterItem>
      </div>
    </div>
  );
};

export default Footer;
