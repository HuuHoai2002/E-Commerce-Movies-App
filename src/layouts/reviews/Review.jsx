import { useState } from "react";
import { Button } from "../../components/button";
import { Image } from "../../components/image";
import { contents, image_url_original } from "../../config/api/apiProducts";
import { useFetchingProductsContent } from "../../hooks";

const Review = ({ id, title = "Đánh Giá - Nhận Xét Từ Khách Hàng" }) => {
  //reviews
  const { data: reviews } = useFetchingProductsContent(id, contents.REVIEWS);
  const [active, setActive] = useState(1);

  const checkUrl = (url = "") => {
    return url.includes("https://", 1);
  };
  const renderImage = (url = "") => {
    if (checkUrl(url)) {
      return url.slice(1, url.length);
    } else {
      return `${image_url_original}${url}`;
    }
  };

  // console.log(reviews)
  return (
    <div className="reviews-product" id="reviews">
      {reviews && (
        <div className="pb-4">
          <h1 className="px-4 py-2 text-[rgb(51 51 51)] font-medium text-[20px]">
            {title}
          </h1>
          <div className="list-content">
            <div className="w-full flex flex-col gap-y-4 px-4 pt-3">
              {reviews.length > 0 ? (
                reviews.map((item, index) => (
                  <div
                    className="flex gap-x-5"
                    key={item.id}
                    style={{
                      display: `${index > active ? "none" : "flex"}`,
                    }}>
                    <div className="avatar">
                      <Image
                        src={
                          item.author_details.avatar_path &&
                          renderImage(item.author_details.avatar_path)
                        }
                        className="w-[50px] h-[50px] border border-cbg rounded-full"
                      />
                    </div>
                    <div className="content flex-1 cursor-pointer">
                      <div
                        className="flex flex-col gap-y-1 px-3 py-2 rounded-lg bg-cbg"
                        title={item.content.toString()}>
                        <span className="font-medium">{item.author}</span>
                        <p className="leading-5 text-sm text-ctext reviews-truncete">
                          {item.content}
                        </p>
                        <span className="leading-3 text-xs text-cblue">
                          {new Date(item.created_at).toUTCString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <span className="font-medium text-cprice">
                  Chưa có đánh giá nào cho sản phẩm này
                </span>
              )}
              <div className="flex items-center justify-center">
                {reviews.length > 2 && (
                  <Button
                    className="shrink-0 min-w-[250px] !bg-transparent border !border-cblue !text-cblue hover:!bg-cblue hover:!text-white"
                    onClick={() =>
                      setActive(() => {
                        if (active === 1) {
                          return reviews.length;
                        }
                        return 1;
                      })
                    }>
                    {active === 1 ? "Xem thêm" : "Thu gọn"}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Review;
