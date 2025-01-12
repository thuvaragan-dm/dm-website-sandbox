import { NavConfigType } from "@/sanity/schemas/NavConfigSchema";
import Link from "next/link";
import React from "react";

const Navbar = ({ configs }: { configs: NavConfigType }) => {
  return (
    <nav className="fixed inset-x-0 top-0 z-[9999] border-b border-white/10 bg-skin-primary-dark/70 px-10 py-5 backdrop-blur-lg">
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between">
        <div className="flex items-center justify-start gap-8">
          {/* logo */}
          <div className="flex items-center justify-center gap-2 lg:w-min">
            <div className="w-min rounded-xl bg-skin-primary p-2 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 text-skin-btn-text"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M26 22a3.96 3.96 0 00-2.02.566L17.414 16l6.567-6.567A3.95 3.95 0 0026 10a4 4 0 10-4-4 3.95 3.95 0 00.567 2.019L16 14.586 9.434 8.02A3.96 3.96 0 0010 6a4 4 0 10-4 4 3.96 3.96 0 002.02-.566L14.586 16l-6.567 6.567A3.95 3.95 0 006 22a4 4 0 104 4 3.95 3.95 0 00-.567-2.019L16 17.414l6.566 6.566A3.96 3.96 0 0022 26a4 4 0 104-4m0-18a2 2 0 11-2 2 2 2 0 012-2M6 28a2 2 0 112-2 2 2 0 01-2 2"
                />
              </svg>
            </div>

            <div className="w-full">
              <h2 className="text-xl font-semibold text-white">DeepModel</h2>
            </div>
          </div>
          {/* logo */}

          {/* links */}
          <div className="flex items-center justify-start gap-5">
            {configs?.links.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="text-sm font-medium text-white hover:underline"
              >
                {link.name}
              </Link>
            ))}
          </div>
          {/* links */}
        </div>

        <div className="flex items-center justify-start gap-5">
          <Link
            href={"#"}
            className="text-sm font-medium text-white hover:underline"
          >
            Login
          </Link>
          <Link
            href={"#"}
            className="text-sm font-medium text-white hover:underline"
          >
            Schedule Demo
          </Link>
          <Link
            href={"#"}
            className="rounded-xl bg-skin-primary px-3 py-1.5 text-sm font-medium text-white hover:underline"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
