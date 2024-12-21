//@tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        sushi: [
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))",
          "url('https://wallpaper.dog/large/20547009.jpg')",
        ],
        chef: "url('/pngtree-sushi-chef-at-table-preparing-sushi-picture-image_2647709.jpg')",
        texture: "url('/texture-min.jpg')",
        "sushi-menu":
          "url('https://img.freepik.com/free-photo/painting-sushi-plate-with-picture-fish-it_188544-12221.jpg')",
        "steak-menu":
          "url('https://img.freepik.com/free-photo/juicy-steak-medium-rare-beef-with-spices-grilled-vegetables_24972-2328.jpg?semt=ais_hybrid')",
        "soto-menu": "url('https://images7.alphacoders.com/657/657692.jpg')",
        "sake-menu":
          "url('https://t3.ftcdn.net/jpg/03/89/71/96/360_F_389719635_Yv0nuk9SUfzBYGsbDA4ijTRqRZJrBhaZ.jpg')",
        "sushi-packet":
          "url('https://images.pexels.com/photos/1435895/pexels-photo-1435895.jpeg')",
      },
      fontFamily: {
        'Merienda': ["Merienda", 'cursive'],
      },
    },
  },
  plugins: [],
};
