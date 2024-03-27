import moment from 'moment/moment';
import 'moment/locale/tr';
import Buttons from './Buttons';
import { auth, db } from './../../firebase/config';
import Dropdown from './Dropdown';
import {
  deleteDoc,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from 'firebase/firestore';
import { toast } from 'react-toastify';
import { useState } from 'react';
import EditMode from './EditMode';
import Content from './Content';

const Post = ({ tweet }) => {
  const [isEditMode, setIsEditMode] = useState(false);

  // tarihin günümüze göre kıyasını al
  const date = moment(tweet?.createdAt?.toDate()).fromNow();

  // oturmu açık olan kulalncı tweet'in likes dizisinde var mı?
  const isLiked = tweet.likes.includes(auth.currentUser.uid);

  // tweet'i kaldır
  const handleDelete = async () => {
    // kaldırlacak dökümanın referasını alma
    const tweetRef = doc(db, 'tweets', tweet.id);

    // dökümanı kaldır
    deleteDoc(tweetRef)
      .then(() => toast.warn('Tweet akıştan kaldırıldı'))
      .catch(() => toast.danger('Tweet silinirken sorun oluştu'));
  };

  // tweet'i likela
  const handleLike = async () => {
    // güncellenicek dökümanın referansını alma
    const tweetRef = doc(db, 'tweets', tweet.id);

    // belgeyi güncelle
    updateDoc(tweetRef, {
      likes: isLiked
        ? arrayRemove(auth.currentUser.uid) // like varsa kaldır
        : arrayUnion(auth.currentUser.uid), //like yoksa ekle
    });
  };

  return (
    <div className="border-b py-6 px-3 border-zinc-600 flex gap-3">
      <img
        className="w-12 h-12 rounded-full"
        src={tweet.user.photo}
        alt={tweet.user.name}
      />

      <div className="w-full">
        {/* en üst kısım */}
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center whitespace-nowrap">
            <p className="font-semibold">{tweet.user.name}</p>
            <p className="text-gray-400 text-sm">
              @{tweet.user.name.toLowerCase().split(' ').join('_')}
            </p>
            <p className="text-gray-400 text-sm">{date}</p>
            {tweet.isEdited && (
              <p className="text-gray-400 text-xs">*düzenlendi</p>
            )}
          </div>

          {tweet.user.id === auth.currentUser.uid && (
            <Dropdown
              handleEdit={() => setIsEditMode(true)}
              handleDelete={handleDelete}
            />
          )}
        </div>

        {/* orta kısım */}
        <div className="my-4">
          {isEditMode ? (
            <EditMode tweet={tweet} close={() => setIsEditMode(false)} />
          ) : (
            <Content tweet={tweet} />
          )}
        </div>

        {/* alt kısım */}
        <Buttons
          isLiked={isLiked}
          handleLike={handleLike}
          likeCount={tweet.likes.length}
        />
      </div>
    </div>
  );
};

export default Post;
