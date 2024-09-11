import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { toggleTheme } from "../../features/theme/themeSlice";
import { Switch } from "../../components/ui/switch"; // Import the Switch component from Shadcn UI
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <>
      <div className="flex items-center relative max-w-11">
        <FaMoon className={`mr-2 transition ease-in duration-150 z-10 pointer-events-none absolute left-1 ${theme === "dark" ? "text-gray-200 opacity-0" : "text-black"}`} />
        <Switch checked={theme === "dark"} onCheckedChange={handleToggle} aria-label="Toggle theme" />
        <FaSun className={`ml-2 transition ease-in duration-150 pointer-events-none absolute right-1 ${theme === "dark" ? "text-yellow-400" : "text-black opacity-0"}`} />
      </div>
    </>
  );
};

export default ThemeToggle;
