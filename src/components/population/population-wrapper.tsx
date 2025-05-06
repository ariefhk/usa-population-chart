import { cn } from "@/utils/cn";
import React from "react";

interface PopulationWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const PopulationWrapper = ({ children, className, ...props }: PopulationWrapperProps) => {
  return (
    <section className={cn("mx-auto w-full max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8", className)} {...props}>
      {children}
    </section>
  );
};

export default PopulationWrapper;
