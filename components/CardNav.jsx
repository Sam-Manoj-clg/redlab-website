
"use client";

import { useLayoutEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import "./CardNav.css";

const CardNav = ({
  logo,
  logoAlt = "Logo",
  items,
  className = "",
  ease = "power3.out",
  baseColor = "#fff",
  menuColor,
  buttonBgColor,
  buttonTextColor,
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const navRef = useRef(null);
  const cardsRef = useRef([]);
  const tlRef = useRef(null);

  const calculateHeight = useCallback(() => {
    const navEl = navRef.current;

    if (!navEl) return 260;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (isMobile) {
      const contentEl = navEl.querySelector(".card-nav-content");

      if (contentEl) {
        const previousStyles = {
          visibility: contentEl.style.visibility,
          pointerEvents: contentEl.style.pointerEvents,
          position: contentEl.style.position,
          height: contentEl.style.height,
          top: contentEl.style.top,
          bottom: contentEl.style.bottom,
        };

        contentEl.style.visibility = "hidden";
        contentEl.style.pointerEvents = "none";
        contentEl.style.position = "static";
        contentEl.style.height = "auto";
        contentEl.style.top = "auto";
        contentEl.style.bottom = "auto";

        const contentHeight = contentEl.scrollHeight;

        Object.assign(contentEl.style, previousStyles);

        return 60 + contentHeight + 16;
      }
    }

    return 260;
  }, []);

  const createTimeline = useCallback(() => {
    const navEl = navRef.current;

    if (!navEl) return null;

    gsap.set(navEl, {
      height: 60,
      overflow: "hidden",
    });

    gsap.set(cardsRef.current.filter(Boolean), {
      y: 50,
      opacity: 0,
    });

    const timeline = gsap.timeline({ paused: true });

    timeline.to(navEl, {
      height: calculateHeight,
      duration: 0.4,
      ease,
    });

    timeline.to(
      cardsRef.current.filter(Boolean),
      {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease,
        stagger: 0.08,
      },
      "-=0.1"
    );

    return timeline;
  }, [calculateHeight, ease]);

  useLayoutEffect(() => {
    const timeline = createTimeline();

    tlRef.current = timeline;

    return () => {
      timeline?.kill();
      tlRef.current = null;
    };
  }, [createTimeline]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;

      const wasExpanded = isExpanded;

      tlRef.current.kill();

      const newTimeline = createTimeline();

      tlRef.current = newTimeline;

      if (newTimeline && wasExpanded) {
        newTimeline.progress(1);
        gsap.set(navRef.current, {
          height: calculateHeight(),
        });
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isExpanded, createTimeline, calculateHeight]);

  const toggleMenu = () => {
    const timeline = tlRef.current;

    if (!timeline) return;

    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);

      timeline.eventCallback("onReverseComplete", null);
      timeline.play(0);
    } else {
      setIsHamburgerOpen(false);

      timeline.eventCallback("onReverseComplete", () => {
        setIsExpanded(false);
      });

      timeline.reverse();
    }
  };

  const setCardRef = (index) => (element) => {
    cardsRef.current[index] = element;
  };

  const handleHamburgerKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleMenu();
    }
  };

  const handleNavigation = () => {
    if (isExpanded) {
      setIsHamburgerOpen(false);

      const timeline = tlRef.current;

      if (timeline) {
        timeline.eventCallback("onReverseComplete", () => {
          setIsExpanded(false);
        });

        timeline.reverse();
      } else {
        setIsExpanded(false);
      }
    }
  };

  return (
    <div className={`card-nav-container ${className}`.trim()}>
      <nav
        ref={navRef}
        className={`card-nav ${isExpanded ? "open" : ""}`}
        style={{ backgroundColor: baseColor }}
        aria-label="Main navigation"
      >
        <div className="card-nav-top">
          {/* Hamburger */}
          <button
            type="button"
            className={`hamburger-menu ${isHamburgerOpen ? "open" : ""}`}
            onClick={toggleMenu}
            onKeyDown={handleHamburgerKeyDown}
            aria-label={isExpanded ? "Close menu" : "Open menu"}
            aria-expanded={isExpanded}
            style={{ color: menuColor || "#000" }}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>

          {/* Logo */}
          <Link
            href="/"
            className="logo-container"
            aria-label="Go to homepage"
            onClick={handleNavigation}
          >
            <img src={logo} alt={logoAlt} className="logo" />
          </Link>

          {/* Desktop Contact Us button */}
          <Link
            href="/contact"
            className="card-nav-cta-button hidden md:flex"
            style={{
              backgroundColor: buttonBgColor || "#111",
              color: buttonTextColor || "#fff",
            }}
          >
            Contact Us
          </Link>

          {/* Mobile circular Contact Us button */}
          <Link
            href="/contact"
            className="card-nav-mobile-cta md:hidden"
            aria-label="Contact Us"
            title="Contact Us"
            style={{
              backgroundColor: buttonBgColor || "#000",
              color: buttonTextColor || "#fff",
            }}
          >
            <GoArrowUpRight aria-hidden="true" />
          </Link>
        </div>

        {/* Navigation cards */}
        <div
          className="card-nav-content"
          aria-hidden={!isExpanded}
        >
          {(items || []).slice(0, 3).map((item, index) => (
            <div
              key={`${item.label}-${index}`}
              className="nav-card"
              ref={setCardRef(index)}
              style={{
                backgroundColor: item.bgColor,
                color: item.textColor,
              }}
            >
              <div className="nav-card-label">{item.label}</div>

              <div className="nav-card-links">
                {(item.links || []).map((link, linkIndex) => (
                  <a
                    key={`${link.label}-${linkIndex}`}
                    className="nav-card-link"
                    href={link.href}
                    aria-label={link.ariaLabel || link.label}
                    onClick={handleNavigation}
                  >
                    <GoArrowUpRight
                      className="nav-card-link-icon"
                      aria-hidden="true"
                    />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default CardNav;
