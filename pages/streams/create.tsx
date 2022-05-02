import type { NextPage } from "next";

const Create: NextPage = () => {
  return (
    <div className="py-10 space-y-5 px-4">
      <div>
        <label htmlFor="name" className="text-sm font-medium text-gray-700">
          name
        </label>
        <div className="rounded-md relative flex items-center shadow-sm">
          <input
            id="name"
            type="text"
            className="appearance-none w-full border: ;
                 border-gray-300 rounded-md shadow-sm placeholder-gray-400 
                 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
        <label htmlFor="price" className="text-sm font-medium text-gray-700">
          Price
        </label>
        <div className="rounded-md relative flex items-center shadow-sm">
          <div className="absolute left-0 pl-3 flex items-center justify-center">
            <span className="text-gray-500 pointer-events-none text-sm">$</span>
          </div>
          <input
            id="price"
            type="text"
            placeholder="0.00"
            className="appearance-none pl-7 w-full px-3 py-2 border: ;
                 border-gray-300 rounded-md shadow-sm placeholder-gray-400 
                 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          />
          <div className="absolute right-0 pr-3 pointer-events-none flex items-center">
            <span className="text-gray-500">USD</span>
          </div>
        </div>
      </div>
      <div>
        <label>Description</label>
        <div>
          <textarea className="mt-1 shadowsm w-full focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500" />
        </div>
      </div>
      <button
        className="mt-5 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 
          px-4 border border-transparent rounded-md shadow-sm text-sm font-medium 
          focu focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none"
      >
        Go Live
      </button>
    </div>
  );
};

export default Create;
