const Loader = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {items.map(() => (
        <div
          role="status"
          class="max-w-sm p-4  rounded shadow animate-pulse md:p-6 border-gray-700"
        >
          <div class="flex items-center justify-center h-52 w-full mb-4 rounded bg-gray-700"></div>

          <div class="flex items-center mt-4">
            <svg
              class="w-10 h-10 me-3 text-gray-700"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>

            <div className="w-full">
              <div className="h-2.5 bg-gray-700 w-full rounded-full" />
              <div className="h-2.5 bg-gray-700 w-full rounded-full mt-3" />
              <div className="h-2.5 bg-gray-700 w-2/4 rounded-full mt-3" />
            </div>
          </div>
          <span class="sr-only">Loading...</span>
        </div>
      ))}
    </>
  );
};

export default Loader;
