import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    // <div className="flex flex-col space-y-2 p-5 ">
    //   <p className="first-letter:text-7xl first-letter:hover:text-purple-400">
    //     Hello everyone~
    //   </p>
    //   <input
    //     type="file"
    //     className="file:cursor-pointer file:hover:text-purple-400 file:hover:bg-white file:hover:border file:transition-colors file:border-0 file:rounded-3xl file:px-5 file:text-white file:bg-purple-400"
    //   />
    // </div>

    // <form className="flex flex-col space-y-2 p-5">
    //   <input
    //     type="text"
    //     required
    //     placeholder="UserName"
    //     className="border p-1 peer rounded-lg border-gray-500"
    //   />
    //   <span className="peer-invalid:block hidden text-red-500">
    //     This input is invalid
    //   </span>
    //   <span className="peer-valid:block hidden text-teal-500">
    //     Awesome username
    //   </span>
    //   <span className="peer-hover:block hidden text-amber-500">Hello</span>
    //   <input
    //     type="submit"
    //     value="login"
    //     className="bg-white"
    //     placeholder="submit"
    //   />
    // </form>

    <div className="bg-slate-400 xl:place-content-center py-20 px-20 grid lg:grid-cols-2 xl:grid-cols-3 gap-10 min-h-screen">
      <div className="bg-white  flex flex-col sm:bg-red-400 md:bg-teal-400 xl: p-6 rounded-2xl shadow-xl">
        <span className="font-semibold text-3xl">Select Item</span>
        <div className="flex justify-between my-2 ">
          <span className="text-gray-500">Grey Chair</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="flex justify-between my-2 ">
          <span className="text-gray-500">Grey Chair</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span>Total</span>
          <span className="font-semibold">$10</span>
        </div>
        <div className="flex">
          <button
            className="mt-5 bg-blue-500 text-white border p-2
        text-center w-3/4 items-center rounded-xl mx-auto hover:opacity-70
        active:bg-yellow-500 "
          >
            Checkout
          </button>
        </div>
      </div>
      <div className="bg-white overflow-hidden rounded-2xl shadow-xl group">
        <div className="bg-blue-500 p-6 pb-14 landscape:bg-teal-500">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="rounded-3xl p-6 bg-white relative -top-5">
          <div className="flex relative -top-16 items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-400">Orders</span>
              <span className="font-medium">340</span>
            </div>
            <div className="h-24 w-24 bg-red-400 rounded-full group-hover:bg-red-300 transition-colors" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-400">Spent</span>
              <span className="font-medium">$340</span>
            </div>
          </div>
          <div className="relative flex flex-col items-center -mt-10 -mb-5">
            <span className="text-lg font-medium">Tony Molloy</span>
            <span className="text-sm text-gray-500">미국</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 lg:col-span-2 xl:col-span-1 rounded-3xl shadow-xl">
        <div className="flex justify-between items-center">
          <span>👈</span>
          <div className="space-x-3">
            <span>⭐️ 4.9</span>
            <span className="shadow-xl p-2 rounded-md">💗</span>
          </div>
        </div>
        <div className="bg-zinc-400 h-72 my-5" />
        <div className="shadow-xl p-6 col-span-2">
          <span className="font-medium text-xl">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mt-3 mb-5 flex justify-between items-center">
            <div className="space-x-2">
              <button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500 transition" />
              <button className="w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-2 ring-indigo-500 transition" />
              <button className="w-5 h-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-2 ring-teal-500 transition" />
            </div>
            <div className="flex items-center space-x-5">
              <button className="p-1.5 rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 font-medium text-xl text-gray-500">
                -
              </button>
              <span>1</span>
              <button className="p-1.5 rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 font-medium text-xl text-gray-500">
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-2xl">$450</span>
            <button className="bg-blue-500 py-2 px-5 text-center text-2xs text-white rounded-lg ">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
