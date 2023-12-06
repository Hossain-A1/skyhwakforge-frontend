import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { droneType } from "@/types/drone.type";
interface ReviewsProps {
  rate: droneType;
}

const Review: React.FC<ReviewsProps> = ({ rate }) => {
  const makeReviews = Array.from({ length: 5 }, (_, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {rate?.rating >= index + 1 ? (
          <FaStar />
        ) : rate?.rating >= number ? (
          <FaStarHalfAlt />
        ) : (
          <AiOutlineStar />
        )}
      </span>
    );
  });

  return (
    <div className='flex justify-start items-center'>
      <span className='flex justify-start items-center text-sm text-yellow'>
        {makeReviews}
      </span>
    </div>
  );
};

export default Review;
