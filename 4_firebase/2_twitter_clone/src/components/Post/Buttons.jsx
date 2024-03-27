import { BiMessageRounded } from 'react-icons/bi';
import { FaRetweet } from 'react-icons/fa';
import { FcLike } from 'react-icons/fc';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiShare2 } from 'react-icons/fi';

const Buttons = ({ isLiked, likeCount, handleLike }) => {
  return (
    <div className="flex justify-between">
      <div className="grid place-items-center py-2 px-3 rounded-full cursor-pointer transition hover:bg-[#00c8ff63]">
        <BiMessageRounded />
      </div>

      <div className="grid place-items-center py-2 px-3 rounded-full cursor-pointer transition hover:bg-[#00fd0046]">
        <FaRetweet />
      </div>

      <div
        onClick={handleLike}
        className="flex justify-center items-center gap-2 py-2 px-3 rounded-full cursor-pointer transition hover:bg-[#ff00d452]"
      >
        {isLiked ? <FcLike /> : <AiOutlineHeart />}
        <span>{likeCount}</span>
      </div>

      <div className="grid place-items-center py-2 px-3 rounded-full cursor-pointer transition hover:bg-[#80808062]">
        <FiShare2 />
      </div>
    </div>
  );
};

export default Buttons;
