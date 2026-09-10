import type { Locale, WorkItem } from "./types";
import zetioVideoPoster from "../assets/work/zetio-video-poster.jpg";
import zetioVideo from "../assets/ZetioIntro_HD_8s.mp4";

// NOTE: existing screenshots for these projects (src/assets/work/) are dramatic dark
// "portfolio cover slide" graphics with clashing color schemes (magenta/red/blue-green),
// not plain product screenshots — dropping them into this light editorial design would
// look inconsistent. Sections use a neutral image placeholder here (matching the design
// reference's own convention) until on-brand screenshots or mockups are captured.

export const work: Record<Locale, WorkItem[]> = {
  es: [
    {
      tag: "SAAS",
      title: "Legal Shield",
      desc: "...",
      imageCaption: "captura / legal",
    },
    {
      tag: "WEB APP",
      title: "Summarium",
      desc: "...",
      imageCaption: "captura / web app Summarium",
      // liveUrl: "https://summarium.surge.sh/",
    },
    {
      tag: "APP MOBILE",
      title: "Zetio",
      desc: "Plataforma para que clubes deportivos gestionen torneos, estadísticas y jugadores.",
      imageCaption: "captura / web app Zetio",
      liveUrl: "https://zetio.app/",
      image: zetioVideoPoster,
      video: zetioVideo,
    },
    {
      tag: "LANDING PAGE",
      title: "None",
      desc: "...",
      imageCaption: "captura / landing",
    },
  ],
  en: [
    {
      tag: "SAAS",
      title: "Legal Shield",
      desc: "...",
      imageCaption: "screenshot / legal online store",
    },
    {
      tag: "WEB APP",
      title: "Summarium",
      desc: "...",
      imageCaption: "screenshot / Summarium web app",
      // liveUrl: "https://summarium.surge.sh/",
    },
    {
      tag: "APP MOBILE",
      title: "Zetio",
      desc: "Platform for sports clubs to manage tournaments, statistics, and players.",
      imageCaption: "screenshot / Zetio web app",
      liveUrl: "https://zetio.app/",
      image: zetioVideoPoster,
      video: zetioVideo,
    },
    {
      tag: "LANDING PAGE",
      title: "None",
      desc: "...",
      imageCaption: "screenshot / landing",
    },
  ],
};
