import { IStar } from "../components/icons";

const useGetVoteStar = () => {
  const getStarsQuantity = (vote = 0) => {
    let stars = 0;
    if (vote > 0) {
      if (vote.toFixed(2) <= 2) {
        stars = 1;
      } else if (vote.toFixed(2) > 2 && vote.toFixed(2) <= 4) {
        stars = 2;
      } else if (vote.toFixed(2) > 4 && vote.toFixed(2) <= 6) {
        stars = 3;
      } else if (vote.toFixed(2) > 6 && vote.toFixed(2) <= 8) {
        stars = 4;
      } else if (vote.toFixed(2) > 8 && vote.toFixed(2) <= 10) {
        stars = 5;
      } else {
        stars = 5;
      }
    }
    return stars;
  };

  const renderStars = (vote) => {
    return (
      <div className="flex items-center">
        {new Array(5).fill(0).map((star, index) => (
          <IStar key={star + index} isActive={index < getStarsQuantity(vote)} />
        ))}
      </div>
    );
  };

  return {
    renderStars,
  };
};

export default useGetVoteStar;
