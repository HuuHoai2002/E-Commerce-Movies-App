import { useEffect, useState } from "react";
import { Image } from "../../components/image";
import { contents, image_url_original } from "../../config/api/apiProducts";
import { useServiceProducts } from "../../services";

const Review = ({ id, title = "Đánh Giá - Nhận Xét Từ Khách Hàng" }) => {
  const { getMovieContent } = useServiceProducts();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMovieContent(contents.REVIEWS, id, "en");
        response && setReviews(response.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const checkUrl = (url = "") => {
    return url.includes("https://", 1);
  };
  const renderImage = (url) => {
    if (checkUrl(url)) {
      return url.slice(1, url.length);
    } else {
      return `${image_url_original}${url}`;
    }
  };

  return (
    <div className="reviews-product">
      {reviews && (
        <div className="pb-4">
          <h1 className="px-4 py-2 text-[rgb(51 51 51)] font-medium text-[20px]">
            {title}
          </h1>
          <div className="list-content">
            <div className="w-full flex flex-col gap-y-4 px-4 pt-3">
              {reviews.length > 0 ? (
                reviews.map((item) => (
                  <div className="flex gap-x-5" key={item.id}>
                    <div className="avatar">
                      <Image
                        src={
                          item.author_details.avatar_path &&
                          renderImage(item.author_details.avatar_path)
                        }
                        className="w-10 h-10 rounded-full"
                      />
                    </div>
                    <div className="content flex-1">
                      <div className="flex flex-col gap-y-1 px-3 py-2 rounded-lg bg-cbg">
                        <span className="font-medium">{item.author}</span>
                        <p className="leading-5 text-sm text-ctext reviews-truncete">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <span className="font-medium text-cprice">
                  Chưa có đánh giá nào cho sản phẩm này
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Review;
