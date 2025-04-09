import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 300 pixels
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[99]">
      <div
        onClick={scrollToTop}
        aria-label="scroll to top"
        className={`flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-primary text-white shadow-lg transition-all duration-300 ease-in-out hover:translate-y-[-3px] hover:bg-opacity-90 hover:shadow-xl ${
          isVisible
            ? "visible translate-y-0 transform opacity-100"
            : "invisible translate-y-10 transform opacity-0"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
        <span className="sr-only">scroll to top</span>
      </div>
    </div>
  );
}
