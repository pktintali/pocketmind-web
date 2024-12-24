import React from "react";
import { Metadata } from "next";
import PrivacyPolicy from "@/components/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy - PocketMind",
  description: "This is the privacy policy for PocketMind",
  // other metadata
};

const PrivacyPage = () => {
  return (
    <div className="pb-20 pt-40">
      <PrivacyPolicy />
    </div>
  );
};

export default PrivacyPage;
