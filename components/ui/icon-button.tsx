"use client";

import React, { MouseEventHandler, ReactElement } from "react";
import Button from "./button";
import { cn } from "@/lib/utils";

interface Props {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
  icon: ReactElement;
}

function IconButton({ icon, className, onClick = () => {} }: Props) {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition",
        className
      )}
    >
      {icon}
    </Button>
  );
}

export default IconButton;
