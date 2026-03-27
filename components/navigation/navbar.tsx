"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import {
  MobileDropdown,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavBody,
  Navbar,
  NavbarButton,
  NavbarLogo,
  NavServices,
} from "@/components/ui/resizable-navbar";

export function NavbarMenu() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const widgetsAnchorId = "widgets-demo";

  const isHomePage = pathname === "/" || pathname === "/#";

  const handleNavigation = (id: string) => {
    // Special handling for home - navigate to "/" without hash
    if (id === "home") {
      if (pathname !== "/") {
        router.push("/");
      }
      setIsMobileMenuOpen(false);
      return;
    }

    if (isHomePage) {
      // On home page - scroll to section
      const section = document.getElementById(id);
      if (section) {
        window.history.pushState(null, "", `#${id}`);
        section.scrollIntoView({ behavior: "smooth" });
        setIsMobileMenuOpen(false);
      }
    } else {
      // On another page - navigate to home with hash
      window.location.href = `/#${id}`;
    }
  };

  const handleNavItemClick = (
    item: { id?: string; href?: string },
    event: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    if (item.href === "/widgets") {
      event.preventDefault();
      if (pathname === "/widgets") {
        const section = document.getElementById(widgetsAnchorId);
        if (section) {
          window.history.pushState(null, "", `#${widgetsAnchorId}`);
          section.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        router.push(`/widgets#${widgetsAnchorId}`);
      }
      setIsMobileMenuOpen(false);
      return;
    }

    handleNavigation(item.id ?? "");
  };

  type NavLinkItem = { name: string; id?: string; href?: string };
  type NavDropdownItem = {
    name: string;
    id?: string;
    href?: string;
    hasDropdown: true;
    items: { name: string; link: string }[];
  };

  const serviceItems = [
    { name: "Analytics", link: "/analytics" },
    { name: "Predict", link: "/predict" },
    { name: "uChoose", link: "/uChoose" },
    { name: "Care", link: "/care" },
  ];

  const navItems: Array<NavLinkItem | NavDropdownItem> = [
    { name: "Home", id: "home" },
    { name: "Services", hasDropdown: true, items: serviceItems },
    { name: "Who we are", id: "who-we-are" },
    { name: "FAQ", id: "faq" },
  ];

  const isDropdown = (
    item: NavLinkItem | NavDropdownItem,
  ): item is NavDropdownItem =>
    "hasDropdown" in item && item.hasDropdown === true;

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <div className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium lg:flex lg:space-x-2">
            {navItems.map((item) =>
              isDropdown(item) ? (
                <NavServices
                  key={item.name}
                  label={item.name}
                  items={item.items}
                />
              ) : (
                <Link
                  key={item.name}
                  href={
                    item.id === "home"
                      ? "/"
                      : `${item.href ? item.href : `/#${item.id}`}`
                  }
                  onClick={(event) => handleNavItemClick(item, event)}
                  className="relative px-4 py-2 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition cursor-pointer"
                >
                  {item.name}
                </Link>
              ),
            )}
          </div>
          <div className="flex items-center gap-4">
            <NavbarButton
              as="a"
              href="https://app.gamblio.ai"
              variant="primary"
              className="rounded-full px-6 py-2 font-semibold shadow-md shadow-primary/20 hover:shadow-primary/40 transition-all"
            >
              Login
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item) =>
              isDropdown(item) ? (
                <MobileDropdown
                  key={item.name}
                  label={item.name}
                  items={item.items}
                  onItemClick={() => setIsMobileMenuOpen(false)}
                />
              ) : (
                <Link
                  key={item.name}
                  href={
                    item.id === "home"
                      ? "/"
                      : `${item.href ? item.href : `/#${item.id}`}`
                  }
                  onClick={(event) => handleNavItemClick(item, event)}
                  className="w-full px-4 py-2 text-center text-neutral-900 dark:text-neutral-100 hover:bg-white/10 dark:hover:bg-neutral-900/10 rounded transition"
                >
                  {item.name}
                </Link>
              ),
            )}
            <div className="flex w-full flex-col gap-4 pt-4 border-t border-neutral-200 dark:border-neutral-800">
              <NavbarButton
                as="a"
                href="https://app.gamblio.ai"
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full rounded-full py-3 font-semibold shadow-md shadow-primary/20"
              >
                Login
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}