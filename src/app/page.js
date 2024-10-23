import React from "react";
import BannerOne from "@/components/heroes/BannerOne";
import CountDown from "@/components/common/CountDown";
import HighlightOne from "@/components/highlights/HighlightOne";
import Award from "@/components/awards/Award";
import ScrollSection from "@/components/common/ScrollSection";
import LineupOne from "@/components/lineups/LineupOne";
import ScheduleOne from "@/components/schedules/ScheduleOne";
import Separator from "@/components/common/Separator";
import Pricing from "@/components/pricing/Pricing";
import Faq from "@/components/faq/Faq";
import SponsorSlider from "@/components/sponsores/SponsorSlider";
import BlogOne from "@/components/blogs/BlogOne";
import Cta from "@/components/cta/Cta";
import SubscriptionOne from "@/components/subscriptions/SubscriptionOne";
import Gallery from "@/components/gallery/Gallery";
import TicketOne from "@/components/tickets/TcketOne";

import FooterOne from "@/components/common/footers/FooterOne";
import NavbarFive from "@/components/common/navbars/NavbarFive";
import AboutSeven from "@/components/about/AboutSeven";
import LineupSeven from "@/components/lineups/LineupSeven";
import ScheduleSeven from "@/components/schedules/ScheduleSeven";
import BlogSeven from "@/components/blogs/BlogSeven";
import BannerFive from "@/components/heroes/BannerFive";
import Head from "next/head";

export const metadata = {
  title: "Home",
  description: "Homepage",
};
const Home1 = () => {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <NavbarFive />
      <BannerFive />
      <CountDown styleNum={4} />
      {/* <TicketOne styleNum={5} /> */}
      <AboutSeven styleNum={0} />

      <LineupOne />
      {/*<LineupSeven /> */}
      <ScrollSection />
      <HighlightOne styleNum={1} />
      {/* <ScheduleSeven styleNum={0} /> */}
      <SponsorSlider styleNum={1} />
      <Gallery styleNum={3} />
      <Faq styleNum={1} />
      <ScrollSection />
      <BlogSeven />
      <Cta styleNum={3} />
      <SubscriptionOne styleNum={3} />
      <FooterOne />
    </>
  );
};

export default Home1;
