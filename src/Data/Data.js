// Sidebar imports
import {
  UilChartBar,
  UilClipboardAlt,
  UilTablet,
  UilChat,
  UilApps,
  UilSignOutAlt,
  UilChatBubbleUser,
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
  },
  {
    icon: UilClipboardAlt,
    heading: "OKRs",
  },
  {
    icon: UilTablet,
    heading: "Matriz GUT",
  },
  {
    icon: UilChatBubbleUser,
    heading: 'Chat interno'
  },
  {
    icon: UilApps,
    heading: 'Aplicativos'
  },
  {
    icon: UilChat,
    heading: 'Chat GPT'
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Objetivos",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
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
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "79",
    png: UilMoneyWithdrawal,
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
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
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
