const HeaderLoader = () => {
  return (
    <div
      data-testid="header-loader"
      className="flex items-center space-x-2 animate-pulse"
    >
      <div className="w-12 h-12 bg-gray-400 rounded-md" />
      <div className="w-[128px] h-4 bg-gray-400  rounded-lg" />
    </div>
  );
};

export default HeaderLoader;
