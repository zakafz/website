"use client";
import { ThemeSwitcher } from "@/components/ui/kibo-ui/theme-switcher";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <ThemeSwitcher
        className="w-fit"
        value={
          theme === "light"
            ? "light"
            : theme === "dark"
            ? "dark"
            : theme === "system"
            ? "system"
            : undefined
        }
        onChange={setTheme}
      />
    </div>
  );
}
