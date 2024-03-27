import { doc, updateDoc } from 'firebase/firestore';
import { useRef, useState } from 'react';
import { BiSolidSave } from 'react-icons/bi';
import { ImCancelCircle } from 'react-icons/im';
import { db } from '../../firebase/config';
import { BsTrashFill } from 'react-icons/bs';
import { IoMdReturnLeft } from 'react-icons/io';

const EditMode = ({ tweet, close }) => {
  const [isPicDeleting, setIsPicDeleting] = useState(false);

  const inputRef = useRef();

  // kaydet butonuna tıklanınca
  const handleSave = async () => {
    // 1) yeni başlığa eriş
    const newText = inputRef.current.value;

    // 2) güncellenicek dökümanın referansını al
    const tweetRef = doc(db, 'tweets', tweet.id);

    // 3) dökümanın içeriğini güncelle
    const updated = isPicDeleting
      ? {
          textContent: newText,
          isEdited: true,
          imageContent: null, // resmi kaldır
        }
      : {
          textContent: newText,
          isEdited: true,
        };

    await updateDoc(tweetRef, updated);

    // 4) düzenleme modundan çık
    close();
  };

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        className="rounded p-1 px-2 text-black"
        defaultValue={tweet.textContent}
      />

      <button
        onClick={handleSave}
        className="mx-5 p-2 border border-zinc-500 text-green-400 rounded-lg shadow hover:bg-zinc-700 transition"
      >
        <BiSolidSave />
      </button>

      <button
        className="mx-5 p-2 border border-zinc-500 text-red-400 rounded-lg shadow hover:bg-zinc-700 transition"
        onClick={close}
      >
        <ImCancelCircle />
      </button>

      {tweet.imageContent && (
        <div className="relative">
          <img
            className={`
            ${isPicDeleting ? 'blur' : ''}
            my-2 rounded-lg w-full object-cover max-h-[400px]`}
            src={tweet.imageContent}
          />
          <button
            onClick={() => setIsPicDeleting(!isPicDeleting)}
            className="absolute top-0 right-0 text-xl p-2 bg-white transition text-red-600 hover:scale-90 rounded-full"
          >
            {isPicDeleting ? <IoMdReturnLeft /> : <BsTrashFill />}
          </button>
        </div>
      )}
    </>
  );
};

export default EditMode;
