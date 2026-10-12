import Image from "next/image";
import { site } from "@/lib/site";

// Brand logo (1138 x 193). Two files so the charcoal lettering stays readable on dark backgrounds:
//   /images/Sunconwest-Logo.png        dark lettering  -> light backgrounds
//   /images/Sunconwest-Logo-Light.png  cream lettering -> dark backgrounds
const LOGO = { width: 1138, height: 193, unoptimized: true } as const;
const ALT = `${site.name} - Construction, Perth WA`;
const SIZE = "h-9 w-auto sm:h-10";

/**
 * `light` = the logo sits on a surface that is always dark (the footer), so it always uses the cream version.
 * Otherwise it follows the site theme (data-theme on <html>, driven by the theme toggle). The light-theme logo loads eagerly
 * (it is the LCP element for most visitors); the cream version stays lazy so it is only fetched in dark mode.
 */
export function Logo({ light = false, className = SIZE }: { light?: boolean; className?: string }) {
  if (light) {
    return <Image {...LOGO} src="/images/Sunconwest-Logo-Light.png" alt={ALT} className={`block ${className}`} />;
  }
  return (
    <>
      <Image {...LOGO} src="/images/Sunconwest-Logo.png" alt={ALT} loading="eager" fetchPriority="high" className={`block dark:hidden ${className}`} />
      <Image {...LOGO} src="/images/Sunconwest-Logo-Light.png" alt={ALT} className={`hidden dark:block ${className}`} />
    </>
  );
}
