/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif", "sfMono"],
        mono: [
          "SF Mono",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
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
        prisma: "#5762CD",
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
        lgtwo: "850px",
        lgthree: "950px",
        xl: "992px",
        xltwo: "1092px",
        xlthree: "1160px",
        xxl: "1200px",
      },

      backgroundImage: {
        icons: "url('/src/assets/mainIconsdark.svg')",
        profile: "url('/src/assets/profile.jpg')",
        learnify: "url('/src/assets/project1.png')",
        imagenius: "url('/src/assets/project2.png')",
        fragma: "url('/src/assets/project4.png')",
      },

      boxShadow: {
        "white-inset": "inset 0 0 0 7px rgba(255, 255, 255, 0.3)",
      },

      width: {
        project: "500px",
      },
    },
  },
  plugins: [],
};
