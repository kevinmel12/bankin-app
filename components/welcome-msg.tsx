"use client";

import { useUser } from "@clerk/nextjs";


export const WelcomeMsg = () => {
    const { user, isLoaded } = useUser();

    return(
        <div className="space-y-2 mb-4">
            <h2 className="text-3xl lg:text-4xl text-white font-semibold">
                Welcom Back{isLoaded ? ", " : " "}{user?.firstName}
            </h2>
            <p className="text-sm font-light lg:text-base text text-[#9e9e9e]">
                This Is Your Financial Overview Report
            </p>
        </div>
    );
};