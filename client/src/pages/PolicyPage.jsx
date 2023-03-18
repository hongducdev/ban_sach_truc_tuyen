import React, { Fragment } from "react";

const PolicyPage = () => {
  return (
    <Fragment>
      <div className="container py-20">
        <h1 className="text-4xl font-semibold text-text2 relative after:absolute after:w-[40%] after:bg-text2 after:h-[2px] after:bottom-0 after:left-0 inline-block">
          Chính sách bảo mật
        </h1>
        <div className="my-10">
          <p className="text-text3">
            Chính sách bảo mật này sẽ giúp bạn hiểu cách chúng tôi thu thập, sử
            dụng và chia sẻ thông tin cá nhân của bạn khi bạn sử dụng dịch vụ
            của chúng tôi và cung cấp cho bạn những quyền về thông tin cá nhân
            của bạn.
          </p>
          <p className="text-text3 my-3">
            Chúng tôi sẽ không bao giờ yêu cầu bạn cung cấp thông tin cá nhân
            nào cho chúng tôi nếu không có một lý do hợp lý để yêu cầu. Chúng
            tôi sẽ không bao giờ bán thông tin cá nhân của bạn cho bên thứ ba.
          </p>
          <h1 className="text-4xl font-semibold text-text2 relative after:absolute after:w-[40%] after:bg-text2 after:h-[2px] after:bottom-0 after:left-0 inline-block">
            Câu hỏi thường gặp
          </h1>
          <div className="my-10">
            <h3 className="text-xl font-semibold text-text2">
              1. Tôi có thể thay đổi thông tin cá nhân của mình không?
            </h3>
            <p className="text-text3 my-2">
              Bạn có thể thay đổi thông tin cá nhân của mình bất cứ lúc nào bằng
              cách gửi yêu cầu thay đổi thông tin cá nhân của bạn đến địa chỉ
              email của chúng tôi.
            </p>
            <h3 className="text-xl font-semibold text-text2">
              2. Tôi có thể thay đổi mật khẩu của mình không?
            </h3>
            <p className="text-text3 my-2">
              Bạn có thể thay đổi mật khẩu của mình bất cứ lúc nào bằng cách gửi
              yêu cầu thay đổi mật khẩu của bạn đến địa chỉ email của chúng tôi.
            </p>
            <h3 className="text-xl font-semibold text-text2">
              3. Tôi có thể thay đổi địa chỉ email của mình không?
            </h3>
            <p className="text-text3 my-2">
              Bạn có thể thay đổi địa chỉ email của mình bất cứ lúc nào bằng
              cách gửi yêu cầu thay đổi địa chỉ email của bạn đến địa chỉ email
              của chúng tôi.
            </p>
            <h3 className="text-xl font-semibold text-text2">
              4. Tôi có thể thay đổi số điện thoại của mình không?
            </h3>
            <p className="text-text3 my-2">
              Bạn có thể thay đổi số điện thoại của mình bất cứ lúc nào bằng
              cách gửi yêu cầu thay đổi số điện thoại của bạn đến địa chỉ email
              của chúng tôi.
            </p>
            <h3 className="text-xl font-semibold text-text2">
              5. Tôi có thể thay đổi địa chỉ của mình không?
            </h3>
            <p className="text-text3 my-2">
              Bạn có thể thay đổi địa chỉ của mình bất cứ lúc nào bằng cách gửi
              yêu cầu thay đổi địa chỉ của bạn đến địa chỉ email của chúng tôi.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PolicyPage;
