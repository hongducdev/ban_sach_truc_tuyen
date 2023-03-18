import React, { Fragment } from "react";

const members = [
  {
    name: "Nguyễn Hồng Đức",
    avatar: "https://avatars.githubusercontent.com/u/73995275?v=4",
    mssv: "DTC20H4801030067",
    email: "contact.hongduc@gmail.com",
  },
  {
    name: "Trần Tiến Đạt",
    avatar: "https://avatars.githubusercontent.com/u/96217718?v=4",
    mssv: "DTC20H4801030067",
    email: "jsmsj04@gmail.com",
  },
  {
    name: "Chu Quang Hải",
    avatar:
      "https://cdn.discordapp.com/attachments/1074219493863211042/1086469213562089482/received_915314936553735.jpg",
    mssv: "DTC2054801320064",
    email: "quanghaik2@gmail.com",
  },
  {
    name: "Vi Hoàng Hợp",
    avatar:
      "https://cdn.discordapp.com/attachments/1074219605414903948/1084131196805599404/20230214_225912_IMG_5390.jpg",
    mssv: "DTC20H4801030067",
    email: "",
  },
  {
    name: "Nguyễn Văn Đức",
    avatar:
      "https://cdn.discordapp.com/attachments/1074219605414903948/1086468359257858168/received_2371803272978434.jpg",
    mssv: "DTC20H4801030067",
    email: "",
  },
];

const IntroductionPage = () => {

  document.title = "Giới thiệu - EBook";

  return (
    <Fragment>
      <div className="container my-20">
        <h1 className="text-4xl font-semibold text-text2 relative after:absolute after:w-[40%] after:bg-text2 after:h-[2px] after:bottom-0 after:left-0 inline-block">
          Giới thiệu
        </h1>
        <div className="my-10">
          <div className="my-10">
            <h1 className="text-2xl font-semibold text-text2 relative after:absolute after:w-[40%] after:bg-text2 after:h-[2px] after:bottom-0 after:left-0 inline-block">
              Giới thiệu về dự án
            </h1>
            <div className="my-10">
              <p className="text-text3">
                Trong thời đại công nghệ số phát triển như hiện nay, việc mua
                sắm trực tuyến ngày càng trở nên phổ biến và tiện lợi hơn. Với
                mục tiêu cung cấp các sản phẩm sách đa dạng và chất lượng cao
                cho khách hàng, chúng tôi quyết định xây dựng một website bán
                sách trực tuyến. Dự án sẽ tập trung vào việc thiết kế giao diện
                dễ sử dụng và thu hút khách hàng, cùng với hệ thống quản lý đơn
                hàng và thanh toán đơn giản và an toàn. Để đảm bảo chất lượng
                sản phẩm sách, chúng tôi sẽ liên kết với các nhà xuất bản uy tín
                và chọn lọc các đầu sách chất lượng để đưa vào bán hàng trên
                website. Ngoài ra, dự án còn đặc biệt quan tâm đến khía cạnh bảo
                mật thông tin khách hàng và dữ liệu, bằng cách áp dụng các biện
                pháp an ninh thông tin tiên tiến và đảm bảo tuân thủ các quy
                định về bảo vệ thông tin cá nhân. Chúng tôi hy vọng rằng dự án
                này sẽ đem lại sự hài lòng và tin tưởng từ phía khách hàng, đồng
                thời cũng mang lại lợi ích kinh tế cho doanh nghiệp.
              </p>
            </div>
          </div>
          <div className="my-10">
            <h1 className="text-2xl font-semibold text-text2 relative after:absolute after:w-[40%] after:bg-text2 after:h-[2px] after:bottom-0 after:left-0 inline-block">
              Thành viên nhóm
            </h1>
            <div className="my-10">
              <div className="flex gap-10">
                <div className="flex gap-5 flex-col">
                  {members.map((member, index) => (
                    <div className="flex gap-5" key={index}>
                      <div className="w-20 h-20 rounded-full bg-gray-200">
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="text-text2 font-semibold">
                          {member.name}
                        </p>
                        <p className="text-text3">MSSV: {member.mssv}</p>
                        <p className="text-text3">
                          Email:{" "}
                          <a
                            href={`mailto:${member.email}`}
                            className="text-text2 font-medium"
                          >
                            {member.email}
                          </a>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default IntroductionPage;
