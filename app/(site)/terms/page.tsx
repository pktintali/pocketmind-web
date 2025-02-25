import React from "react";
import { Metadata } from "next";
import TermsOfUse from "@/components/TermsOfUse";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for PocketMind",
  // other metadata
};

const TermsPage = () => {
  return (
    <div className="pb-20 pt-40">
      <TermsOfUse />
    </div>
  );
};

export default TermsPage;
