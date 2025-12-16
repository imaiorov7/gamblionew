import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function H1({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <h1
      className={cn(
        " text-3xl md:text-4xl lg:text-6xl capitalize font-medium",
        className,
      )}
    >
      {children}
    </h1>
  );
}
export function Title({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <p
      className={cn(
        " text-xl md:text-2xl lg:text-4xl capitalize font-medium",
        className,
      )}
    >
      {children}
    </p>
  );
}
export function Description({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <p className={cn("text-muted-foreground text-lg", className)}>{children}</p>
  );
}
