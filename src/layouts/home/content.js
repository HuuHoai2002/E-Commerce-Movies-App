import { getImages } from "../../utils/products";

// eslint-disable-next-line react-hooks/rules-of-hooks
const { danhchoban, phobien, yeuthich } = getImages();

export const homeHeaderContent = [
  {
    id: 1,
    title: "Dành cho bạn",
    image: danhchoban,
  },
  {
    id: 2,
    title: "Phổ biến",
    image: phobien,
  },
  {
    id: 3,
    title: "Yêu thích",
    image: yeuthich,
  },
  // {
  //   id: 4,
  //   title: "Lãng mạn",
  //   image: langman,
  // },
];
