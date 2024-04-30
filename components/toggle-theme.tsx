"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { SunIcon, MoonIcon } from "lucide-react"
import { Button } from "./ui/button";

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  
  
  // prevent Handler Error from being called on initial render
  if (!mounted) {
    return <Button variant="outline" size="icon" disabled={true}></Button>;
  }
  
  const isDark = theme === "dark";
  
  return (
    <Button
      className="hover:cursor-pointer hover:text-primary"
      variant="outline"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
}