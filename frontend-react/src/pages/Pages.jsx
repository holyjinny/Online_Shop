import React from "react";
import Announcement from "../components/announcements/Announcement";
import Brand from "../components/brand/Brand";
import FlashDeals from "../components/flashDeals/FlashDeals";
import Home from "../components/main/Home";
import NewArrivals from "../components/newArrivals/NewArrivals";
import Reviews from "../components/reviews/Reviews";
import TopCategory from "../components/top/TopCategory";

const Pages = () => {
  return (
    <>
      <Home />
      <FlashDeals />
      <TopCategory />
      <NewArrivals />
      <Brand />
      <Announcement />
      <Reviews />
    </>
  );
};

export default Pages;
