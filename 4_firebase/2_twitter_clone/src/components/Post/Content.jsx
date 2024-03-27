const Content = ({ tweet }) => {
  return (
    <>
      {tweet.textContent && <p>{tweet.textContent}</p>}

      {tweet.imageContent && (
        <img
          src={tweet.imageContent}
          className="my-2 rounded-lg object-cover max-h-[400px]"
        />
      )}
    </>
  );
};

export default Content;
