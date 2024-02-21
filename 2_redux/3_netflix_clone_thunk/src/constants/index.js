export const options = {
  params: { language: 'tr-TR' },
  headers: {
    accept: 'application/json',
    // jwt token
    Authorization: import.meta.env.VITE_API_KEY,
  },
};

// resimlerin başına eklenmesi gereken url
export const baseImgUrl = 'https://image.tmdb.org/t/p/original';
