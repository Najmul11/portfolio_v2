// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";
// import { ReactNode, useRef, useState } from "react";

// import { motion } from "framer-motion";

// type Props = {
//   children: ReactNode;
// };

// const Magnetic = ({ children }: Props) => {
//   const ref = useRef(null);
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   const mouseMove = (e: any) => {
//     const { clientX, clientY } = e;
//     const { height, width, left, top } = ref.current.getBoundingClientRect();

//     const x = clientX - (left + width / 60);
//     const y = clientY - (top + height / 60);

//     setPosition({ x, y });
//   };

//   const mouseLeave = () => {
//     setPosition({ x: 0, y: 0 });
//   };

//   const { x, y } = position;

//   return (
//     <div className="flex justify-center">
//       <motion.div
//         style={{ position: "relative" }}
//         className="p-2 w-56 bg-red-500"
//         ref={ref}
//         onMouseMove={mouseMove}
//         onMouseLeave={mouseLeave}
//         animate={{ x, y }}
//         transition={{ type: "spring", stiffness: 30, damping: 15, mass: 0.1 }}
//       >
//         {children}
//       </motion.div>
//     </div>
//   );
// };

// export default Magnetic;
