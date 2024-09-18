import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";



type Props = {
    href: string;
    label: string;
    isActive?: boolean;
};

export const NavButton = ({
    href,
    label,
    isActive,
}: Props) => {
    return (
        <Button
            asChild
            size="sm"
            variant="outline"
            className={cn(
                "w-full lg:w-auto justify-between font-light hover:bg-white/20 hover:text-white hover:font-normal border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white/40 focus:bg-white/30 transition",
                isActive ? " font-normal bg-white/10 text-white" : "bg-transparent ",
            )}
        >
            <Link href={href}>
                {label}
            </Link>
        </Button>
    );
};

