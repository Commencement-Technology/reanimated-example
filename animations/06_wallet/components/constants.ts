import { Dimensions } from "react-native";

// DIMENSIONS
export const MARGIN = 20;
export const CARD_WIDTH = Dimensions.get("window").width - 2 * MARGIN;
export const CARD_HEIGHT = Math.floor(CARD_WIDTH * 0.6);
export const CARDS_OVERLAY = 30;

// TIME

// MOCK DATA
export const transactionsList = [
  {
    id: 11,
    picture: "",
    shop: "Shop1",
    category: "shop category",
    price: "$8.20",
    date: "18.03.2020",
  },
  {
    id: 12,
    picture: "",
    shop: "Shop2",
    category: "shop category",
    price: "$48.20",
    date: "18.03.2020",
  },
  {
    id: 13,
    picture: "",
    shop: "Shop3",
    category: "shop category",
    price: "$8.20",
    date: "18.03.2020",
  },
  {
    id: 14,
    picture: "",
    shop: "Shop4",
    category: "shop category",
    price: "$8.20",
    date: "18.03.2020",
  },
  {
    id: 15,
    picture: "",
    shop: "Shop5",
    category: "shop category",

    price: "$8.20",
    date: "18.03.2020",
  },
  {
    id: 16,
    picture: "",
    shop: "Shop6",
    category: "shop category",

    price: "$8.20",
    date: "18.03.2020",
  },
  {
    id: 17,
    picture: "",
    shop: "Shop7",
    category: "shop category",
    price: "$8.20",
    date: "18.03.2020",
  },
  {
    id: 18,
    picture: "",
    shop: "Shop8",
    category: "shop category",

    price: "$8.20",
    date: "18.03.2020",
  },
];
