"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

function Switch({ className, ...props }) {
  const { setTheme, theme } = useTheme();
  console.log(theme);

  const toggleTheme = () => {
    if (theme == "light") {
      setTheme("dark");
    } else if (theme == "dark") {
      setTheme("light");
    }
  };

  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer data-[state=checked]:bg-primary cursor-pointer data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-5 w-9 shrink-0 items-center rounded-full border-2 border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      onClick={toggleTheme}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "bg-background  pointer-events-none flex items-center justify-center  size-4 rounded-full ring-0 shadow-lg transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )}
      >
        <Sun className={cn("size-3.5", theme !== "light" && "hidden")} />
        <Moon className={cn("size-3.5", theme !== "dark" && "hidden")} />
      </SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
  );
}

export { Switch };
