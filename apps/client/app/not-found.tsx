"use client";
import Link from "next/link";
import notfound from "./_assets/not-found.json";
import Lottie from "lottie-react";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center w-full min-h-[70vh] text-gray-700 my-12 px-4">
      <div className="flex flex-col items-center w-full gap-6">
        <Lottie
          style={{ width: "50vw", height: "50vh" }}
          animationData={notfound}
        />
        <p className="text-3xl font-semibold text-center">
          OOPS! You have discovered a secret place
        </p>
        <p className="text-2xl md:px-12 text-center">
          Developement is still in progress...
        </p>
        <div className="flex flex-row justify-between gap-8">
          <Link
            href="/"
            className="flex justiy-center items-center px-2 py-1 text-md rounded-md text-slate-200 border border-slate-600 hover:bg-slate-600 hover:text-white"
          >
            Return to home
          </Link>
        </div>
      </div>
    </div>
  );
}
