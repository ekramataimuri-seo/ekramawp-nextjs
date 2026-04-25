"use client";

import React, { useState } from "react";
import Link from "next/link";

type IconProps = {
  className?: string;
};

type NavLinkItem = {
  label: string;
  href: string;
};

type CardItem = {
  title: string;
  description: string;
  buttonText: string;
  href: string;
  subtitle?: string;
  icon: (props: IconProps) => React.JSX.Element;
};

type NavSection = {
  id: number;
  title: string;
  href: string;
  headerTitle: string;
  headerIcon: (props: IconProps) => React.JSX.Element;
  navIcon: (props: IconProps) => React.JSX.Element;
  links: NavLinkItem[];
  primaryCard: CardItem;
  secondaryCard: CardItem;
  mobileAllLabel: string;
};

function ChevronDown({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M5 7.5L10 12.5L15 7.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SubLinkIcon({ className = "h-3.5 w-3.5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M5 12h14" strokeLinecap="round" />
      <path d="M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CodeIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M8 9L4 12L8 15" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 9L20 12L16 15" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 5L10 19" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WordpressIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.5A9.5 9.5 0 1 0 21.5 12 9.51 9.51 0 0 0 12 2.5Zm0 17.5a7.87 7.87 0 0 1-4.1-1.15l4.36-12 2.9 7.95a.67.67 0 0 1 .03.43L14 18.77A7.86 7.86 0 0 1 12 20Zm-6.34-3.2A7.83 7.83 0 0 1 4.2 10.4c0-.8.12-1.56.35-2.28l3.2 8.68a.95.95 0 0 0 1.78 0l1.75-4.83 1.85 5.04A7.86 7.86 0 0 1 5.66 16.8Zm10.83-.9 1.16-3.34c.28-.75.38-1.35.38-1.88 0-.7-.2-1.3-.46-1.83A7.84 7.84 0 0 1 19.8 12a7.8 7.8 0 0 1-3.31 6.4Z" />
    </svg>
  );
}

function LaptopIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="4" y="5" width="16" height="11" rx="2" />
      <path d="M2 19H22" strokeLinecap="round" />
    </svg>
  );
}

function BoltIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13 2L5 13h5l-1 9 8-11h-5l1-9Z" />
    </svg>
  );
}

function UserTieIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="7" r="4" />
      <path d="M5.5 21a6.5 6.5 0 0 1 13 0" strokeLinecap="round" />
      <path d="M12 11l-1.5 3L12 16l1.5-2L12 11Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LayersIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 3L3 8l9 5 9-5-9-5Z" />
      <path d="M3 12l9 5 9-5" />
      <path d="M3 16l9 5 9-5" />
    </svg>
  );
}

function DatabaseIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <ellipse cx="12" cy="5" rx="7" ry="3" />
      <path d="M5 5v6c0 1.66 3.13 3 7 3s7-1.34 7-3V5" />
      <path d="M5 11v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" />
    </svg>
  );
}

function PenIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 20h9" strokeLinecap="round" />
      <path d="M16.5 3.5a2.12 2.12 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5Z" />
    </svg>
  );
}

function UsersIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="10" cy="7" r="4" />
      <path d="M20 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function GaugeIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 14l4-4" strokeLinecap="round" />
      <path d="M20 14a8 8 0 1 0-16 0" />
      <path d="M12 18h.01" />
    </svg>
  );
}

function ServerIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="6" rx="2" />
      <rect x="3" y="14" width="18" height="6" rx="2" />
      <path d="M7 7h.01M7 17h.01" />
    </svg>
  );
}

function RocketIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 19c2-1 4-3 5-5" />
      <path d="M15 9l-6 6" />
      <path d="M14 4c3 0 6 3 6 6-2 1-4 1-6 1-1 2-1 4-1 6-3 0-6-3-6-6 0-2 0-4 1-6 2 0 4 0 6-1Z" />
      <circle cx="15" cy="9" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function HandshakeIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M10 11l2 2a2 2 0 0 0 3 0l3-3" />
      <path d="M7 13l-2 2a2 2 0 0 1-3-3l4-4a2 2 0 0 1 3 0l1 1" />
      <path d="M17 11l2 2a2 2 0 0 0 3-3l-4-4a2 2 0 0 0-3 0l-1 1" />
      <path d="M8 8l3-3a3 3 0 0 1 4 0l1 1" />
    </svg>
  );
}

function TargetIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function MailIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

const navSections: NavSection[] = [
  {
    id: 1,
    title: "Front End Tech",
    href: "/front-end-technologies",
    headerTitle: "Languages",
    headerIcon: CodeIcon,
    navIcon: CodeIcon,
    links: [
      { label: "HTML", href: "/front-end-technologies/html" },
      { label: "CSS", href: "/front-end-technologies/css" },
      { label: "Javascript", href: "/front-end-technologies/javascript" },
      { label: "Page Builders", href: "/front-end-technologies/page-builders" },
      { label: "Next.js with Typescript", href: "/front-end-technologies/nextjs-with-typescript" },
    ],
    primaryCard: {
      title: "Front End Strategy",
      description:
        "Comprehensive front-end solutions. We create responsive, and performant interfaces using HTML, CSS, and Modern JavaScript.",
      buttonText: "View Technologies",
      href: "/front-end-technologies",
      icon: LayersIcon,
    },
    secondaryCard: {
      title: "Dev Success Stories",
      description:
        "Browse our case studies to see how we have helped clients achieve pixel-perfect designs and interactive user experiences.",
      buttonText: "View Portfolio",
      href: "/portfolio/",
      icon: DatabaseIcon,
    },
    mobileAllLabel: "All Technologies",
  },
  {
    id: 2,
    title: "Traditional WP",
    href: "/traditional-wordpress-front-end/",
    headerTitle: "Development",
    headerIcon: WordpressIcon,
    navIcon: WordpressIcon,
    links: [
      { label: "Design Conversion", href: "/traditional-wordpress-front-end/design-conversion/" },
      { label: "SEO & Mobile Responsive", href: "/traditional-wordpress-front-end/seo-and-mobile-responsive/" },
      { label: "Speed Optimization", href: "/traditional-wordpress-front-end/speed-front-end-optimization/" },
      { label: "Theme Setup & Customization", href: "/traditional-wordpress-front-end/theme-setup-customization/" },
    ],
    primaryCard: {
      title: "Traditional WordPress",
      description:
        "Expert theme development and customization. We convert your designs into fully functional WordPress themes.",
      buttonText: "Our Approach",
      href: "/traditional-wordpress-front-end/",
      icon: PenIcon,
    },
    secondaryCard: {
      title: "WP Campaigns",
      description:
        "Explore our portfolio of successful WordPress sites that have increased engagement and built brand trust.",
      buttonText: "View Portfolio",
      href: "/portfolio/",
      icon: UsersIcon,
    },
    mobileAllLabel: "Traditional WP Services",
  },
  {
    id: 3,
    title: "Web App Front End",
    href: "/wep-app-front-end/",
    headerTitle: "Application",
    headerIcon: LaptopIcon,
    navIcon: LaptopIcon,
    links: [
      { label: "Design Conversion", href: "/wep-app-front-end/design-conversion/" },
      { label: "SEO & Mobile Responsive", href: "/wep-app-front-end/seo-and-mobile-responsive/" },
      { label: "Speed Optimization", href: "/wep-app-front-end/speed-optimization/" },
      { label: "Theme Setup & Customization", href: "/wep-app-front-end/theme-setup-customization/" },
    ],
    primaryCard: {
      title: "Web App Development",
      description:
        "Custom Web Application interfaces. We build fast, secure, and mobile-responsive web apps that provide seamless user experiences.",
      buttonText: "Check Speed",
      href: "/wep-app-front-end/",
      icon: GaugeIcon,
    },
    secondaryCard: {
      title: "App Projects",
      description:
        "Check out our development portfolio featuring high-performance web applications with custom functionality.",
      buttonText: "View Portfolio",
      href: "/portfolio/",
      icon: ServerIcon,
    },
    mobileAllLabel: "Web App Services",
  },
  {
    id: 4,
    title: "Headless WP",
    href: "/headless-wordpress-front-end/",
    headerTitle: "Headless",
    headerIcon: BoltIcon,
    navIcon: BoltIcon,
    links: [
      { label: "Design Conversion", href: "/headless-wordpress-front-end/design-conversion/" },
      { label: "SEO & Mobile Responsive", href: "/headless-wordpress-front-end/seo-and-mobile-responsive/" },
      { label: "Speed Optimization", href: "/headless-wordpress-front-end/speed-front-end-optimization/" },
      { label: "Theme Setup & Customization", href: "/headless-wordpress-front-end/theme-setup-customization/" },
    ],
    primaryCard: {
      title: "Headless Architecture",
      description:
        "Decoupled front-end strategies for ultimate speed and security. We leverage Next.js and WordPress APIs for a modern web experience.",
      buttonText: "Our Services",
      href: "/headless-wordpress-front-end/",
      icon: RocketIcon,
    },
    secondaryCard: {
      title: "Headless Results",
      description:
        "See our headless success stories. We have successfully helped clients modernize their stack and drive performance.",
      buttonText: "View Portfolio",
      href: "/portfolio/",
      icon: HandshakeIcon,
    },
    mobileAllLabel: "Headless Services",
  },
  {
    id: 5,
    title: "About",
    href: "/about/",
    headerTitle: "Company",
    headerIcon: UserTieIcon,
    navIcon: UserTieIcon,
    links: [
      { label: "Our Approach", href: "/about/approach/" },
      { label: "Introduction", href: "/about/introduction/" },
      { label: "Our Story", href: "/about/story/" },
      { label: "Contact", href: "/contact/" },
      { label: "Terms", href: "/terms-and-conditions/" },
    ],
    primaryCard: {
      title: "Meet WPFEDEV",
      description:
        "Learn about our mission to bring transparency to web development. Discover the core values and strategic approach that drive client success.",
      buttonText: "Read Mission",
      href: "/about/",
      icon: TargetIcon,
    },
    secondaryCard: {
      title: "Professional Journey",
      description:
        "View our professional portfolio showcasing a history of successful projects, from technical audits to full-scale web development.",
      buttonText: "View Portfolio",
      href: "/portfolio/",
      icon: MailIcon,
    },
    mobileAllLabel: "About",
  },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const toggleAccordion = (id: number) => {
    setOpenAccordion((prev) => (prev === id ? null : id));
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenAccordion(null);
  };

  return (
   <header 
  className="relative sticky top-0 z-[1000] w-full text-white shadow-[0_10px_30px_rgba(0,0,0,0.3)] lg:top-[-41px]"
  style={{ background: "linear-gradient(45deg, rgba(20, 20, 20, 1), rgba(40, 40, 40, 1), rgba(60, 60, 60, 1))" }}
>
      <div className="hidden h-10 bg-transparent text-[14px] font-black lg:block">
        <div className="mx-auto flex h-full max-w-[1400px] items-center justify-between px-6">
          <div className="flex items-center">
            <span className="opacity-90">REVENUE DRIVEN FOR OUR CLIENTS</span>
            <span className="ml-[5px] font-black text-[#00ffbf]">
              $10,085,355,239+ <span className="text-white/70">ⓘ</span>
            </span>
          </div>

          <div className="flex items-center">
            <a href="#" className="border-r border-white/20 pr-[15px] text-white no-underline">
              Client Login
            </a>
            <a href="tel:+92-324-256-8650" className="ml-[15px] text-white no-underline">
              +92-324-256-8650
            </a>
          </div>
        </div>
      </div>

      <nav className="bg-transparent">
        <div className="mx-auto flex h-[70px] max-w-[1400px] items-center px-6">
          <div className="z-[1001] mr-6 flex min-w-[160px] flex-col leading-[1.1] xl:mr-8 max-lg:mr-4 max-lg:min-w-0">
            <div className="text-[24px] font-black text-white max-lg:text-[22px]">WPFEDEV</div>
            <div className="hidden text-[10px] font-medium tracking-[0.5px] text-[#b0b8c4] xl:block">
              Digital Marketing That Drives Revenue®
            </div>
          </div>

          <ul className="hidden h-full flex-nowrap items-center p-0 lg:flex">
            {navSections.map((section) => {
              const HeaderIcon = section.headerIcon;
              const NavIcon = section.navIcon;
              const PrimaryIcon = section.primaryCard.icon;
              const SecondaryIcon = section.secondaryCard.icon;

              return (
                <li key={section.id} className="group static flex h-full shrink-0 cursor-pointer items-center pr-5 xl:pr-7">
                  <Link
                    href={section.href}
                    className="flex h-full shrink-0 items-center gap-2 whitespace-nowrap text-[13px] font-medium tracking-[-0.005em] text-white no-underline transition-colors duration-200 group-hover:text-[#00ffbf] xl:text-[14px]"
                  >
                    <NavIcon className="h-[15px] w-[15px] shrink-0 text-[#41D48C]" />
                    <span className="whitespace-nowrap">{section.title}</span>
                    <ChevronDown className="h-[11px] w-[11px] shrink-0 text-[#b0b8c4] transition duration-200 group-hover:rotate-180 group-hover:text-[#00ffbf]" />
                  </Link>

                  <div 
                    className="pointer-events-none invisible absolute left-0 top-full z-[999] w-full border-t border-white/10 opacity-0 shadow-2xl transition-all duration-300 ease-out group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
                    style={{ background: "rgba(15, 15, 17, 0.98)" }}
                  >
                    {/* ADDED min-h-[420px] HERE */}
                    <div className="mx-auto flex w-full max-w-[1400px] min-h-[420px] items-stretch justify-between gap-8 px-6 py-12 xl:gap-12">
                      
                      {/* Column 1 - Links (flex-1) */}
                      <div className="flex flex-1 flex-col py-2">
                        <div className="mb-6 flex items-center gap-3 text-[18px] font-bold text-white">
                          <HeaderIcon className="h-6 w-6 text-[#41D48C]" />
                          <span>{section.headerTitle}</span>
                        </div>

                        <div className="flex flex-1 flex-col gap-3">
                          {section.links.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              className="group/link flex items-center gap-3 text-[15px] font-medium text-[#b0b8c4] transition-colors hover:text-white"
                            >
                              <div className="flex h-6 w-6 items-center justify-center rounded bg-white/5 transition-colors group-hover/link:bg-[#41D48C]/20 group-hover/link:text-[#41D48C]">
                                <SubLinkIcon className="h-3 w-3" />
                              </div>
                              <span>{link.label}</span>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Column 2 - Primary Premium Card (flex-1) */}
                      <Link
                        href={section.primaryCard.href}
                        className="group/card relative flex flex-1 flex-col overflow-hidden rounded-xl border border-white/10 p-7 no-underline transition-all duration-300 hover:border-[#41D48C]/50 hover:shadow-[0_0_30px_rgba(65,212,140,0.15)]"
                        style={{ background: 'radial-gradient(circle at top right, rgba(65, 212, 140, 0.15), transparent 70%), rgba(255, 255, 255, 0.03)' }}
                      >
                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#41D48C]/20 text-[#41D48C]">
                          <PrimaryIcon className="h-6 w-6" />
                        </div>

                        <h3 className="mb-2 text-[20px] font-bold text-white transition-colors group-hover/card:text-[#41D48C]">
                          {section.primaryCard.title}
                        </h3>

                        {section.primaryCard.subtitle && (
                          <div className="mb-3 text-[12px] font-bold uppercase tracking-wider text-[#41D48C]">
                            {section.primaryCard.subtitle}
                          </div>
                        )}

                        <p className="mb-8 flex-1 text-[14px] leading-relaxed text-[#b0b8c4]">
                          {section.primaryCard.description}
                        </p>

                        <div className="mt-auto flex w-full items-center justify-center rounded-lg bg-[#41D48C] py-3 text-[14px] font-bold text-black transition-transform group-hover/card:scale-[1.02]">
                          {section.primaryCard.buttonText}
                        </div>
                      </Link>

                      {/* Column 3 - Secondary Premium Card (flex-1) */}
                      <Link
                        href={section.secondaryCard.href}
                        className="group/card relative flex flex-1 flex-col overflow-hidden rounded-xl border border-white/10 p-7 no-underline transition-all duration-300 hover:border-[#3B82F6]/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
                        style={{ background: 'radial-gradient(circle at top right, rgba(59, 130, 246, 0.15), transparent 70%), rgba(255, 255, 255, 0.03)' }}
                      >
                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#3B82F6]/20 text-[#3B82F6]">
                          <SecondaryIcon className="h-6 w-6" />
                        </div>

                        <h3 className="mb-2 text-[20px] font-bold text-white transition-colors group-hover/card:text-[#3B82F6]">
                          {section.secondaryCard.title}
                        </h3>

                        <p className="mb-8 flex-1 text-[14px] leading-relaxed text-[#b0b8c4]">
                          {section.secondaryCard.description}
                        </p>

                        <div className="mt-auto flex w-full items-center justify-center rounded-lg bg-[#3B82F6] py-3 text-[14px] font-bold text-white transition-transform group-hover/card:scale-[1.02]">
                          {section.secondaryCard.buttonText}
                        </div>
                      </Link>
                      
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <Link
            href="/contact/"
            className="ml-auto hidden shrink-0 whitespace-nowrap rounded-[4px] bg-[#00674F] px-5 py-[10px] text-[14px] font-bold text-white no-underline transition hover:bg-[#50C878] xl:px-6 lg:inline-block"
          >
            Get a Proposal
          </Link>

          <button
            type="button"
            className="ml-auto flex flex-col gap-[5px] lg:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span
              className={`block h-[3px] w-[25px] bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[3px] w-[25px] bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[3px] w-[25px] bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div
          className={`absolute left-0 top-full z-[998] w-full pb-6 transition-all duration-300 lg:hidden ${
            isMobileMenuOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible pointer-events-none -translate-y-2 opacity-0"
          }`}
          style={{ background: "linear-gradient(45deg, rgba(20, 20, 20, 1), rgba(40, 40, 40, 1), rgba(60, 60, 60, 1))" }}
        >
          {navSections.map((section) => {
            const isOpen = openAccordion === section.id;
            const NavIcon = section.navIcon;

            return (
              <div key={section.id} className="border-b border-white/10">
                <button
                  type="button"
                  onClick={() => toggleAccordion(section.id)}
                  className={`flex w-full items-center justify-between px-6 py-5 text-left font-bold text-white ${
                    isOpen ? "bg-white/5" : ""
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <NavIcon className="h-[16px] w-[16px] text-[#41D48C]" />
                    <span>{section.title}</span>
                  </span>

                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div className={`${isOpen ? "block" : "hidden"} bg-black/20`}>
                  {section.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMobileMenu}
                      className="flex items-center gap-2 border-b border-white/5 px-10 py-3 text-[14px] text-[#b0b8c4] no-underline transition hover:text-white"
                    >
                      <SubLinkIcon className="h-[14px] w-[14px] shrink-0 text-[#41D48C]" />
                      <span>{link.label}</span>
                    </Link>
                  ))}

                  <Link
                    href={section.href}
                    onClick={closeMobileMenu}
                    className="flex items-center gap-2 border-b border-white/5 px-10 py-3 text-[14px] font-semibold text-[#207DE9] no-underline"
                  >
                    <SubLinkIcon className="h-[14px] w-[14px] shrink-0 text-[#207DE9]" />
                    <span>{section.mobileAllLabel}</span>
                  </Link>
                </div>
              </div>
            );
          })}

          <div className="border-b border-white/10">
            <Link
              href="/portfolio/"
              onClick={closeMobileMenu}
              className="block px-6 py-5 font-bold text-white no-underline"
            >
              Portfolio
            </Link>
          </div>

          <div className="p-6 text-center">
            <Link
              href="/contact/"
              onClick={closeMobileMenu}
              className="block w-full rounded-[4px] bg-[#3F5CE0] px-6 py-3.5 text-center font-bold text-white no-underline"
            >
              Get a Proposal
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}