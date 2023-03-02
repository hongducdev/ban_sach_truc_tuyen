import React, { Fragment, useState } from "react";
import Category from "../components/Category/Category";
import ProductList from "../components/Product/ProductList";

const image = [
  {
    id: 1,
    src: "/nguoi_trong_muon_nghe/1.png",
  },
  {
    id: 2,
    src: "/nguoi_trong_muon_nghe/2.png",
  },
  {
    id: 3,
    src: "/nguoi_trong_muon_nghe/3.png",
  },
  {
    id: 4,
    src: "/nguoi_trong_muon_nghe/4.png",
  },
  {
    id: 5,
    src: "/nguoi_trong_muon_nghe/5.png",
  },
  {
    id: 6,
    src: "/nguoi_trong_muon_nghe/6.png",
  },
  {
    id: 7,
    src: "/nguoi_trong_muon_nghe/7.png",
  },
  {
    id: 8,
    src: "/nguoi_trong_muon_nghe/8.png",
  },
  {
    id: 9,
    src: "/nguoi_trong_muon_nghe/9.png",
  },
];

const ProductPage = () => {
  const [Image, setImage] = useState(image[0].src);
  const [count, setCount] = useState(1);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSub = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <Fragment>
      <div className="container my-10 flex">
        <div className="inline-flex gap-5 w-2/3 flex-1">
          <div className="inline-flex flex-col gap-2">
            {image.map((item, index) => (
              <div key={index} className="">
                <img
                  src={item.src}
                  alt=""
                  className="w-16 h-16 object-cover rounded-md cursor-pointer select-none"
                  onClick={() => setImage(item.src)}
                />
              </div>
            ))}
          </div>
          <div className="">
            <img
              src={Image}
              alt=""
              className="w-[650px] h-[650px] object-cover rounded-xl"
            />
          </div>
        </div>
        <div className="w-1/3">
          <h2 className="text-2xl font-semibold text-text1 mb-3">
            Người Trong Muôn Nghề (Tái Bản 2023) - Định hướng nghề nghiệp toàn
            diện
          </h2>
          {/* price */}
          <div className="flex items-center gap-2 py-2 border-t-[1px] border-b-[1px] border-strock">
            <span className="rounded-md px-2 py-1 text-error bg-strock text-xs">
              -5%
            </span>
            <span className="text-xl font-semibold text-text2">179.000đ</span>
            <span className="text-text3 line-through">189.000đ</span>
          </div>
          {/* author */}
          <div className="flex items-center gap-2 border-strock my-5">
            <h3 className="text-text1 font-semibold">Tác giả:</h3>
            <p className="text-text3">Nhóm tác giả Spiderum</p>
          </div>
          <p className="text-text3">
            Người Trong Muôn Nghề là cuốn sách hướng nghiệp tuyển tập những câu
            chuyện đi làm tâm huyết từ những cây viết dày dặn kinh nghiệm trong
            các lĩnh vực và môi trường làm việc khác nhau, giúp các bạn học
            sinh, sinh viên có một cái nhìn toàn diện hơn về thế giới công việc
            thực thụ nhằm định hướng nghề nghiệp toàn diện.
          </p>
          {/* chọn số lượng */}
          <div className="flex items-center gap-2 my-5">
            <h3 className="text-text1 font-semibold">Số lượng:</h3>
            <div className="flex items-center gap-2">
              <button
                className="w-8 h-8 rounded-md bg-strock text-text3 text-2xl font-semibold"
                onClick={handleAdd}>
                +
              </button>
              <input
                type="number"
                className="w-16 h-8 rounded-md bg-strock text-text3 text-center"
                value={count}
              />
              <button
                className="w-8 h-8 rounded-md bg-strock text-text3 text-2xl font-semibold"
                onClick={handleSub}>
                -
              </button>
            </div>
          </div>
          {/* button */}
          <div className="flex items-center gap-2">
            <button className="w-1/2 h-12 rounded-md bg-error text-white text-lg font-semibold">
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <h3 className="text-text1 underline font-semibold text-xl">
          Mô tả
        </h3>
        <p className="text-text2">
          Hầu hết những người trẻ đều đã từng hoặc đang trải qua cảm giác không
          biết mình thuộc về đâu. Khó khăn lớn nhất có lẽ không phải là kiếm
          được việc, mà là chọn được một nghề thực sự phù hợp với bản thân. Trên
          hành trình kiếm tìm ấy, người trẻ phải gánh trên vai rất nhiều áp lực
          vô hình từ gia đình và xã hội. Đi học thì ngành phải "hot", trường
          phải "xịn". Đi làm thì vị trí phải “oai", lương tháng phải “cao", công
          ty phải “khủng". Chúng ta mải chạy theo những thứ bề nổi mà quên mất
          rằng mục đích sau cùng của việc chọn ngành, chọn nghề là giúp mình tìm
          được điểm giao thoa giữa năng lực, sở thích cá nhân với nhu cầu của xã
          hội. Người Trong Muôn Nghề hi vọng có thể kéo bạn lại gần hơn với mục
          đích bản chất ấy. Cuốn sách là tuyển tập những câu chuyện đi làm tâm
          huyết đến từ những cây viết dày dặn kinh nghiệm trong các lĩnh vực
          chuyên môn và những môi trường làm việc khác nhau. Những chia sẻ này
          sẽ giúp các bạn học sinh, sinh viên có một cái nhìn toàn diện hơn về
          thế giới công việc thực thụ: - Làm việc tại tập đoàn lớn thì khác gì
          với môi trường startup, nhà nước, và freelance? - Làm thế nào để có
          được một tư duy đúng đắn trong việc lựa chọn nghề nghiệp, và cần chuẩn
          bị những gì từ khi còn ngồi trên ghế nhà trường? - Đâu là những điểm
          đặc thù của mỗi ngành nghề – từ Công nghệ thông tin, Kỹ thuật, Kiểm
          toán cho tới Giáo dục, Y tế, Marketing, thậm chí là những nghề rất mới
          như làm Game, làm Youtube? Xuyên suốt cuốn sách này, các bạn có thể
          thu thập thêm những thông tin hữu ích cũng như gia tăng thêm các cơ
          hội việc làm thông qua việc scan các QR code ở cuối mỗi chương. Bạn
          không bắt buộc phải chọn “đúng" một công việc và làm điều đó cả đời,
          bởi vì mỗi người luôn có thể học được điều gì đó từ những lựa chọn sai
          lầm. Thế nhưng bạn luôn có thể mài sắc khả năng học hỏi của bản thân
          để thích nghi và sẵn sàng cho một thế giới việc làm luôn không ngừng
          thay đổi. Hi vọng Người Trong Muôn Nghề có thể đồng hành cùng bạn trên
          chặng đường này.
        </p>
      </div>
      <div className="container text-center mt-20 mb-10">
        <Category title="Sản phẩm liên quan" />
        <div className="mt-10"></div>
        <ProductList />
      </div>
    </Fragment>
  );
};

export default ProductPage;
