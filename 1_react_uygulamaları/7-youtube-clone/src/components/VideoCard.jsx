import millify from 'millify';
import { useState } from 'react';

const VideoCard = ({ video }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="cursor-pointer"
    >
      {/* resim alanı */}
      <div>
        <img
          className="rounded-lg w-full h-full"
          src={
            isHover && video.richThumbnail
              ? video.richThumbnail[0].url
              : video.thumbnail[video.thumbnail.length - 1].url
          }
          alt="video banner"
        />
      </div>

      {/* alt detay alanı */}
      <div className="flex gap-4 mt-5">
        <img
          src={video.channelThumbnail[0].url}
          className="w-14 h-14 rounded-full"
          alt="channel picture"
        />

        <div>
          <h4 className="line-clamp-2 font-bold">{video.title}</h4>
          <p>{video.channelTitle}</p>
          <div className="flex gap-2">
            <p>{millify(video.viewCount)} Görüntülenme</p>
            <p>{video.publishedTimeText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
