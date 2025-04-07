import type React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="relative py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-blue-500/20 rounded-md" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4 h-4 bg-blue-500 rounded-sm flex items-center justify-center">
                  <span className="text-white font-bold text-[8px]">MSM</span>
                </div>
              </div>
            </div>
            <span className="text-lg font-bold tracking-tight font-mono text-slate-100">
              slavko.xyz
            </span>
          </div>

          <p className="text-slate-500 text-sm text-center md:text-right">
            © {new Date().getFullYear()} Slavko Muždeka. All rights reserved.{" "}
            <br />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
