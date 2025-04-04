import { JSX } from "react";
import Button from "./ui/Button";
import { cn } from "@/lib/utils";
import { Github, Mail, Menu } from "lucide-react";

interface HeaderProps {
  scrollToSection: (ref: React.RefObject<HTMLDivElement | null>) => void;
  activeSection: string;
  navItems: {
    name: string;
    ref: React.RefObject<HTMLDivElement | null>;
    icon: JSX.Element;
  }[];
  setMobileMenuOpen: (open: boolean) => void;
}

export default function Header({
  scrollToSection,
  activeSection,
  navItems,
  setMobileMenuOpen,
}: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-purple-900/30">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-md" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-6 h-6 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-sm transform rotate-45" />
            </div>
          </div>
          <span className="text-xl font-bold tracking-tighter">MSM</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.ref)}
              className={cn(
                "text-sm transition-colors relative px-2 py-1 group flex items-center gap-1.5",
                activeSection === item.name.toLowerCase()
                  ? "text-cyan-400"
                  : "text-gray-400 hover:text-white"
              )}
            >
              {item.icon}
              {item.name}
              <span
                className={cn(
                  "absolute bottom-0 left-0 w-full h-px transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300",
                  activeSection === item.name.toLowerCase()
                    ? "bg-cyan-400 scale-x-100"
                    : "bg-white"
                )}
              />
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/SlavkoMuzdeka"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white"
            >
              <Github className="w-5 h-5" />
            </Button>
          </a>
          <a href="mailto:your-email@example.com">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white"
            >
              <Mail className="w-5 h-5" />
            </Button>
          </a>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
