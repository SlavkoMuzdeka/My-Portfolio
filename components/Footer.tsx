import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="relative py-12 border-t border-purple-800/30">
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-sm" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4 h-4 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-sm transform rotate-45" />
              </div>
            </div>
            <span className="text-lg font-bold tracking-tighter">
              SLAVKO MUŽDEKA
            </span>
          </div>

          <p className="text-gray-500 text-sm text-center md:text-right">
            © {new Date().getFullYear()} Slavko Muždeka. All rights reserved.{" "}
            <br />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
