const Error404Page = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
      <div className="flex flex-col items-center">
        <h1 className="text-6xl font-semibold text-center text-black hover:text-red-500 hover:cursor-pointer transition-colors">
          404
        </h1>
        <p className="text-lg text-center text-black">Page not found</p>
      </div>
    </div>
  );
};

export default Error404Page;
