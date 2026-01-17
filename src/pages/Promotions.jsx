import React from "react";
import Hero from "../components/promotionsPageComponents/PromotionsHero";
import InvitationLink from "../components/promotionsPageComponents/InvitationLink";
import PromotionData from "../components/promotionsPageComponents/PromotionsData";
import BackButton from "../components/common/BackButton";

function Promotions() {
  return (
    <div className="particles-bg min-h-screen pb-2">
      <BackButton />
      <Hero />
      <InvitationLink />
      <PromotionData />
    </div>
  );
}

export default Promotions;
