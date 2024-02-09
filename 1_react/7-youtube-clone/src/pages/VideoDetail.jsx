import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getData } from '../helpers/getData';
import ReactPlayer from 'react-player';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import millify from 'millify';
import StringArea from '../components/StringArea';
import VideoCard from './../components/VideoCard';
import Loader from './../components/Loader';

const VideoDetail = () => {
  const [video, setVideo] = useState(null);

  // 1) arama parametresine eişim için kurulum
  const [searchParams] = useSearchParams();

  // 2) url'den "v" isimli arama parametreisni al
  const id = searchParams.get('v');

  // 3) id'si bilinen videonun bilgilerini api'dan al
  useEffect(() => {
    getData(`/video/info?id=${id}&extend=1`).then((data) =>
      setVideo(data)
    );
  }, [searchParams]);

  return (
    <div className="detail-page h-screen overflow-auto p-5">
      {/* Video  İçeriği */}
      <div>
        <ReactPlayer
          className={'rounded'}
          width={'100%'}
          height={'50vh'}
          light
          playing
          controls
          url={`https://www.youtube.com/watch?v=${id}`}
        />

        {!video ? (
          <p>yükleniyor...</p>
        ) : (
          <>
            {/* başlık */}
            <h1 className="my-3 text-xl font-bold">{video.title}</h1>

            {/* kanal bilgileri */}
            <div className="flex justify-between">
              {/* sol */}
              <div className="flex items-center gap-4">
                <img
                  className="rounded-full w-12 h-12"
                  src={video.channelThumbnail[0].url}
                />

                <div>
                  <h4 className="font-bold">{video.channelTitle}</h4>
                  <p className="text-gray-400">
                    {video.subscriberCountText}
                  </p>
                </div>

                <button className="bg-white rounded-full text-black px-3 h-9 transition hover:bg-gray-400">
                  Abone Ol
                </button>
              </div>

              {/* sağ */}
              <div className="flex items-center bg-[#272727] rounded-full cursor-pointer">
                <div className="flex items-center gap-4 py-2 px-4 border-r">
                  <AiFillLike />
                </div>
                <div className="py-2 px-4">
                  <AiFillDislike />
                </div>
              </div>
            </div>

            {/* video bilgileri */}
            <div className="bg-[#272727] rounded p-2 mt-4 cursor-pointer hover:bg-opacity-80">
              <div className="flex gap-3">
                <p>{millify(video.viewCount)} görüntülenme</p>
                <p>
                  {new Date(video.publishDate).toLocaleDateString()}
                </p>
              </div>

              <StringArea text={video.description} />
            </div>
          </>
        )}
      </div>

      {/* Alakalı İçerikler */}
      <div className="flex flex-col gap-5 p-1 md:p-6 max-md:mt-6">
        {!video ? (
          <Loader />
        ) : (
          video.relatedVideos.data.map(
            (item) =>
              item.type === 'video' && (
                <VideoCard video={item} isRow={true} />
              )
          )
        )}
      </div>
    </div>
  );
};

export default VideoDetail;
