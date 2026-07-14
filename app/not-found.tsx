"use client";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col  items-between justify-center px-4 sm:px-6 lg:px-0 relative">
      <div className="h-20 w-full bg-black absolute top-0" />
      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="font-bold text-6xl  lg:text-9xl text-primary leading-none opacity-20">
            404
          </h1>
        </div>

        {/* Main Message */}
        <div className="space-y-3 mb-6">
          <h2 className="heading-2 font-bold">Page Not Found</h2>
          <p className="text-base text-[#555555] max-w-lg mx-auto">
            The page you&apos;re looking for seems to have wandered off.
            Don&apos;t worry, even the best journeys sometimes take unexpected
            turns.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/">
            <Button
              variant={"regular"}
              className="w-full sm:w-auto flex items-center gap-2"
            >
              <Home className="" />
              Go Home
            </Button>
          </Link>
        </div>

        {/* Additional Help */}
        <div className="mt-6 pt-8 border-t border-gray-200">
          <p className="text-sm sm:text-base text-gray-600 mb-4">
            Need help finding what you&apos;re looking for?
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link
              href="/about"
              className="text-primary hover:text-primary/80 font-medium"
            >
              About Us
            </Link>
            <Link
              href="/programs"
              className="text-primary hover:text-primary/80 font-medium"
            >
              Program
            </Link>
            <Link
              href="/consultation"
              className="text-primary hover:text-primary/80 font-medium"
            >
              Consultation
            </Link>
            <Link
              href="/camps"
              className="text-primary hover:text-primary/80 font-medium"
            >
              Camp
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
    </div>
  );
}
