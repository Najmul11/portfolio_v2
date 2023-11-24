/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      fontWeight: {
        semi: "500",
      },
      colors: {
        // icon
        ts: "#2f74c0",
        opacity: "#e5edf6",
        js: "#f5d032",
        react: "#61dafb",
        sass: "#c66394",
        node: "#76ae5c",
        tailwind: "#38bdf8",
        mongo: "#3c912e",
        prisma: "#0c3249",
        redis: "#d5362c",
        postgre: "#31648c",
        // typography
        primary: "#ccd6f6",
        second: "#8892B0",
        highlight: "#84ecfa",
        // background
        bg: "#0f172a",
        LightNavy: "#172a45",
        LightestNavy: "#303C55",
        LightSlate: "#a8b2d1",
      },

      screens: {
        sm: "350px",
        md: "576px",
        lg: "786px",
        xl: "992px",
        xxl: "1200px",
      },

      backgroundImage: {
        profile: "url('/src/assets//profile.jpg')",
        imagenius: "url('/src/assets/project1.png')",
        comic: "url('/src/assets/project2.png')",
        skill: "url('/src/assets/project3.png')",
        fragma: "url('/src/assets/project4.png')",
      },
      transitionDuration: {
        eight: "8000ms",
      },
      boxShadow: {
        "white-inset": "inset 0 0 0 7px rgba(255, 255, 255, 0.3)",
      },
      animation: {
        radius: "radius 10s ease-in-out infinite ",
      },
      width: {
        project: "500px",
      },

      keyframes: {
        radius: {
          "0%": {
            "border-radius": "60% 40% 30% 70%/60% 30% 70% 40%",
          },
          "50%": {
            "border-radius": "30% 60% 70% 40%/50% 60% 30% 60%",
          },
          "100%": {
            "border-radius": "60% 40% 30% 70%/60% 30% 70% 40%",
          },
        },
      },
    },
  },
  plugins: [],
};
