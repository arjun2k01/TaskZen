// import React from 'react';

// const Navbar = () => {
//   return (
//     <nav className="flex justify-between items-center bg-slate-700 text-white py-3 px-4 md:px-8">
//       <div className="logo">
//         <a href="#">
//           <span className="font-bold text-xl mx-2 md:mx-4 lg:mx-11">
//             TaskZen
//           </span>
//         </a>
//       </div>
//       <ul className="hidden md:flex gap-4 lg:gap-8 mx-2 md:mx-4 lg:mx-10">
//         <li className="cursor-pointer hover:font-bold transition-all">Home</li>
//         <li className="cursor-pointer hover:font-bold transition-all">Your TODO</li>
//       </ul>
//       <div className="md:hidden flex items-center">
//         <button className="text-white focus:outline-none">
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
//           </svg>
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




































import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-gray-800 text-white py-3 px-6 shadow-md">
      <div className="logo">
        <a href="#" className="font-bold text-xl">
          TaskZen
        </a>
      </div>
      <ul className="flex gap-4 sm:gap-8">
        <li className="cursor-pointer hover:font-bold transition-all">Home</li>
        <li className="cursor-pointer hover:font-bold transition-all">Your TODO</li>
      </ul>
    </nav>
  );
};

export default Navbar;
