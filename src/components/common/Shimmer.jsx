import "./Shimmer.css";

// const Shimmer = ({ count = 1 }) => {
//   const times = new Array(count).fill(null);
//   return (
//     <>
//       {times.map((v, index) => (
//         <div className="flex w-full gap-5 shimmer my-5" key={index}>
//           <div className="bg-gray-200 rounded-md h-24 w-24"></div>
//           <div className="w-full h-full">
//             <div className="bg-gray-200 h-4 w-[80%] mb-2 rounded"></div>
//             <div className="bg-gray-200 h-4 w-[60%] mb-2 rounded"></div>
//             <div className="bg-gray-200 h-4 w-[40%] mb-2 rounded"></div>
//             <div className="bg-gray-200 h-4 w-[20%] mb-2 rounded"></div>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };

// export default Shimmer;
export const Shimmer = ({ count = 1 }) => {
  const times = new Array(count).fill(null);
  return (
    <>
      {times.map((v, index) => (
        <div
          className="card m-3 card-compact w-96 bg-white  rounded-xl border-2 shimmer"
          key={index}
        >
          <figure className="h-52 w-full  bg-gray-300 "></figure>
          <div className="card-body">
            <h2 className="card-title text-xl font-medium w-2/3 h-4 bg-gray-100"></h2>
            <p className="w-2/3 h-3 bg-slate-200"></p>
          </div>
        </div>
      ))}
    </>
  );
};

export const DoctorShimmer = ({ count = 6 }) => {
  const times = new Array(count).fill(null);
  return (
    <>
      {times.map((v, index) => (
        <div key={index} className="mx-auto  ">
          <div className="  min-w-[288px] mx-auto overflow-hidden sm:w-[90%] md:w-[83%] shimmer bg-white mb-3 border border-gray-200  hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex-1 flex justify-between items-center  gap-5 p-5">
                <div className="min-h-36 min-w-28">
                  <div
                    className="w-28 h-36 object-cover rounded-lg bg-slate-200"
                    alt="User Image"
                  />
                </div>

                <div className="pt-3 flex-1">
                  <h2 className="card-title text-xl font-medium w-2/3 h-4 bg-gray-100"></h2>
                  <h2 className="card-title text-xl font-medium w-2/3 h-4 bg-gray-100"></h2>
                  <p className="w-2/3 h-3 bg-slate-200"></p>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center md:items-end justify-center p-5">
                <div className="rounded-lg text-white mb-2 md:w-1/3 bg-gray-300 w-2/3 h-4"></div>
                <div className="rounded-lg text-white mb-2 md:w-1/3 bg-gray-300 w-2/3 h-4"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export const FilterCardShimmer = ({ count = 1 }) => {
  const times = new Array(count).fill(null);
  return (
    <>
      {times.map((v, index) => (
        <div
          key={index}
          className="block  mx-auto min-w-72 sm:w-[90%] md:w-[83%] lg:w-72 bg-white border border-gray-200 shimmer  hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 sticky top-0"
        >
          <div className="w-full border-b-2 h-16 p-3">
            <h2 className="card-title text-xl font-medium w-2/3 h-4 bg-gray-100"></h2>
          </div>

          <div className="filter-widget p-4">
            <div className="p-1">
              <h2 className="card-title text-xl font-medium w-2/3 h-4 bg-gray-100"></h2>
              <h2 className="card-title text-xl font-medium w-2/3 h-4 bg-gray-100"></h2>
              <h2 className="card-title text-xl font-medium w-2/3 h-4 bg-gray-100"></h2>
              <h2 className="card-title text-xl font-medium w-2/3 h-4 bg-gray-100"></h2>
              <h2 className="card-title text-xl font-medium w-2/3 h-4 bg-gray-100"></h2>
              <h2 className="card-title text-xl font-medium w-2/3 h-4 bg-gray-100"></h2>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
