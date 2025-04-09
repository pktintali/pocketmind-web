import { useTheme } from "next-themes";
import Image from "next/image";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      aria-label="theme toggler"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-black transition-all duration-300 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
    >
      <Image
        src="/images/icon/icon-moon.svg"
        alt="toggle dark mode"
        width={18}
        height={18}
        className="dark:hidden"
      />

      <Image
        src="/images/icon/icon-sun.svg"
        alt="toggle light mode"
        width={18}
        height={18}
        className="hidden dark:block"
      />
    </button>
  );
};

export default ThemeToggler;
