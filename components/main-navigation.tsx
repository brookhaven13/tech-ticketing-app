import Link from "next/link";
import ToggleTheme from "./toggle-theme";
import MainNavLinks from "./main-nav-links";

export default function MainNavigation() {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex gap-2">
        <MainNavLinks />
      </div>
      <div className="flex items-center gap-3">
        <Link href="/">Logout</Link>
        <ToggleTheme />
      </div>
    </div>
  );
}
