import type { NextPage } from "next";
import Button from "../../components/button";
import Layout from "../../components/layout";

const Edit: NextPage = () => {
  return (
    <Layout title="나의 정보" canGoBack>
      <div className="px-10 py-10 space-y-4">
        <div className="flex items-center space-x-3">
          <div className="w-14 h-14 rounded-full bg-slate-500" />
          <label className="cursor-pointer py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 text-gray-700">
            Change
            <input type="file" className="hidden" accept="image/*" />
          </label>
        </div>
        <div className="space-y-1">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email address
          </label>
          <input
            id="email"
            type="email"
            className="appearance-none w-full px-3 py-2 border
                 border-gray-300 rounded-md shadow-sm placeholder-gray-400 
                 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <div className="flex rounded-md shadow-sm">
            <span
              id="input"
              className="flex items-center justify-center px-3 rounded-l-md border-r-0
                 border-gray-300 bg-gray-100 text-gray-500 select-none"
            >
              +82
            </span>
            <input
              type="number"
              className="appearance-none w-full px-3 py-2 border
                 border-gray-300 rounded-md rounded-l-none shadow-sm placeholder-gray-400 
                 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
        </div>
        <Button
          text="Update Profile"
          className="mt-5 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 
          px-4 border border-transparent rounded-md shadow-sm text-sm font-medium 
          focu focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none"
        >
          {" "}
        </Button>
      </div>
    </Layout>
  );
};

export default Edit;
