"use client";

import BubbleMenu from "./BubbleMenu";

export default function Header() {
  const items = [
    {
      label: "Home",
      href: "/",
      ariaLabel: "Home",
      rotation: -8,
      hoverStyles: { bgColor: "#f97316", textColor: "#ffffff" },
    },
    {
      label: "Events",
      href: "/events",
      ariaLabel: "Events",
      rotation: 8,
      hoverStyles: { bgColor: "#f97316", textColor: "#ffffff" },
    },
    {
      label: "Gallery",
      href: "/gallery",
      ariaLabel: "Gallery",
      rotation: 8,
      hoverStyles: { bgColor: "#f97316", textColor: "#ffffff" },
    },
    {
      label: "Members",
      href: "/members",
      ariaLabel: "Members",
      rotation: 8,
      hoverStyles: { bgColor: "#f97316", textColor: "#ffffff" },
    },
    {
      label: "History",
      href: "/history",
      ariaLabel: "History",
      rotation: -8,
      hoverStyles: { bgColor: "#f97316", textColor: "#ffffff" },
    },
    {
      label: "Join Now",
      href: "/join",
      ariaLabel: "Join Now",
      rotation: -8,
      hoverStyles: { bgColor: "#f97316", textColor: "#ffffff" },
    },
  ];

  return (
    <BubbleMenu
      logo={
        <span
          style={{
            fontWeight: 700,
            fontSize: "1.5rem",
            color: "#f97316",
            fontFamily: "var(--font-galber)",
          }}
        >
          ORATOR
        </span>
      }
      items={items}
      menuAriaLabel="Toggle navigation"
      menuBg="rgba(255, 255, 255, 0.9)"
      menuContentColor="#f97316"
      useFixedPosition={true}
      animationEase="back.out(1.5)"
      animationDuration={0.5}
      staggerDelay={0.12}
    />
  );
}
