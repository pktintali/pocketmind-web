import { motion } from "framer-motion";

type FaqData = {
  activeFaq: number;
  id: number;
  handleFaqToggle: (id: number) => void;
  quest: string;
  ans: string;
};

const FAQItem = ({ faqData }: { faqData: FaqData }) => {
  const { activeFaq, id, handleFaqToggle, quest, ans } = faqData;
  const isActive = activeFaq === id;

  return (
    <div className="faq-item overflow-hidden">
      <button
        onClick={() => handleFaqToggle(id)}
        className="text-heading flex w-full items-center justify-between px-6 py-5 font-medium transition-all duration-300 hover:bg-primary/5 
          dark:hover:bg-primary/10 lg:px-9 lg:py-6"
      >
        <span className="text-left">{quest}</span>
        <div
          className={`relative ml-2 flex h-6 w-6 min-w-[24px] items-center justify-center rounded-full 
          border-2 border-primary ${isActive ? "bg-primary" : ""}`}
        >
          <span
            className={`absolute h-[2px] w-3 bg-primary transition-transform duration-300 
            ${isActive ? "rotate-0 bg-white" : "rotate-0"}`}
          ></span>
          <span
            className={`absolute h-3 w-[2px] bg-primary transition-transform duration-300 
            ${isActive ? "rotate-0 opacity-0" : "rotate-0"}`}
          ></span>
        </div>
      </button>

      <div
        className={`max-h-0 overflow-hidden transition-all duration-300 ease-in-out ${
          isActive ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <div className="border-t border-stroke px-6 py-5 dark:border-strokedark lg:px-9 lg:py-6">
          <p className="text-body-color dark:text-body-color-dark text-base font-normal leading-relaxed">
            {ans}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
