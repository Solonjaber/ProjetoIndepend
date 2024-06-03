// Sidebar imports
import {
  UilChartBar,
  UilClipboardAlt,
  UilTablet,
  UilChat,
  UilApps,
  UilSignOutAlt,
  UilChatBubbleUser,
  UilKeyholeSquare,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../imgs/9090.PNG";
import img2 from "../imgs/profile.png";
import img3 from "../imgs/8989.PNG";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilChartBar,
    heading: "Dashboard",
    path: "/",
  },
  {
    icon: UilClipboardAlt,
    heading: "OKRs",
    path: "/okrs",
  },
  {
    icon: UilTablet,
    heading: "Matriz GUT",
    path: "/matriz-gut",
  },
  {
    icon: UilChatBubbleUser,
    heading: "Chat interno",
    path: "/chat-interno",
  },
  {
    icon: UilApps,
    heading: "Aplicativos",
    path: "/aplicativos",
  },
  {
    icon: UilChat,
    heading: "Cige-GPT",
    path: "/chat-gpt",
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Objetivos",
    color: {
      backGround: "linear-gradient(180deg, #51A8B1 0%, #51A8B1 100%)",
      boxShadow: "0px 10px 20px 0px #7CBEC4",
    },
    barValue: 70,
    value: "25",
    png: UilClipboardAlt,
    series: [
      {
        name: "Objetivos",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Key Results",
    color: {
      backGround: "linear-gradient(180deg, #294964 0%, #294964 100%)",
      boxShadow: "0px 10px 20px 0px #366586",
    },
    barValue: 80,
    value: "79",
    png: UilKeyholeSquare,
    series: [
      {
        name: "Key Results",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Concluídos",
    color: {
      backGround:
        "linear-gradient(rgb(245, 134, 52) -146.42%, rgb(245, 134, 52) -46.42%)",
      boxShadow: "0px 10px 20px 0px #FAB370",
    },
    barValue: 60,
    value: "50",
    png: UilClipboardAlt,
    series: [
      {
        name: "Concluídos",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Christian Azevedo",
    noti: "28 anos, nascido na Bolívia.",
    time: "25 segundos atrás",
  },
  {
    img: img2,
    name: "Fred James Bond",
    noti: "40 anos, nascido no Iraque.",
    time: "30 minutos atrás",
  },
  {
    img: img3,
    name: "Léo 'Iron Man' Crivellaro",
    noti: "23 anos, nascido na Italia.",
    time: "2 horas atrás",
  },
];
