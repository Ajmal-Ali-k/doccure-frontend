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
const Shimmer = ({ count = 1 }) => {
  const times = new Array(count).fill(null);
  return (
    <>
      {times.map((v, index) => (
          <div className="card m-3 card-compact w-96 bg-white  rounded-xl border-2 shimmer">
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

export default Shimmer;
