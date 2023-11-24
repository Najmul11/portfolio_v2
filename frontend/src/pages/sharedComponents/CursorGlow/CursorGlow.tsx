import { useEffect, useState } from "react";

const CursorGlow: React.FC = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className=" w-[600px] h-[600px] rounded-[50%] bg-gradient-to-t from-[#0f172a] via-[#1e2f57] to-[#0f172a] blur-[180px] -z-10"
      style={{
        position: "fixed",
        left: cursorPosition.x - 200,
        top: cursorPosition.y - 200,
      }}
    ></div>
  );
};

export default CursorGlow;
