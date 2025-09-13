function App() {
  return (
    <>
      <h1 className="font-bold text-5xl">France flag</h1>
      <div className="flex w-72 bg-green-400 h-48">
        <div className="bg-blue-900 w-1/3 "></div>
        <div className="bg-white w-1/3 "></div>
        <div className="bg-red-600 w-1/3 "></div>
      </div>
      <h2 className="font-bold text-3xl">Flag Costa Rica</h2>
      <div className="flex flex-col h-48 w-96">
        <div className="bg-blue-500 w-1/2 h-1/6"></div>
        <div className="bg-white w-1/2 h-1/6 flex  justify-center">
          <div className=" bg-green-400 rounded-full"></div>
        </div>
        <div className="bg-red-500 w-1/2 h-2/5"></div>
        <div className="bg-white w-1/2 h-1/6"></div>
        <div className="bg-blue-500 w-1/2 h-1/6"></div>
      </div>
      <div className="w-96 h-96 bg-white flex items-center justify-center  ">
        <div className="bg-red-800 w-36 h-36 rounded-full"></div>
      </div>
      <h4 className="font-bold text-4xl">Bangladesh flag</h4>
      <div className="w-96 h-96 bg-green-900 flex items-center justify-center  ">
        <div className="bg-red-800 w-36 h-36 rounded-full -ml-16"></div>
      </div>
      <h1>UAE Flag</h1>
      <div className="flex border border-gray-500 h-94">
        <div className="bg-red-600 w-36 "></div>
        <div className="flex flex-col w-full ">
          <div className="bg-green-500 flex-1"></div>
          <div className="bg-white flex-1"></div>
          <div className="bg-black flex-1"></div>
        </div>
      </div>
    </>
  );
}
export default App;
