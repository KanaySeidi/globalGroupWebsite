import { imgImp } from "./imgImports";

const { theleshka, wallet, bank } = imgImp;

export const introCard = [
  {
    title: "Shop what you love",
    id: 1,
    description:
      "Find new products and brands. Get the best deal and earn rewards—just for shopping",
    image: theleshka,
  },
  {
    title: "Pay how you like",
    id: 2,
    description:
      "Choose how you pay at partner stores, via our app, Klarna Card or browser extension",
    image: wallet,
  },
  {
    title: "Manage your budget",
    id: 3,
    description:
      "Split your payments and manage purchases, with a smart spending overview and more",
    image: bank,
  },
];
