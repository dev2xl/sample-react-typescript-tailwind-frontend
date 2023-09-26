import { ReactNode } from "react";

type CardProps = {
  title: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  children: ReactNode;
};

// full class instead of using max-w-${size}
// for tailwind be able to recognize it and include the class
const maxWidth = {
  xs: "max-w-xs",
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
};
const Card = ({ title, size = "sm", children }: CardProps) => {
  return (
    <div
      className={`${maxWidth[size]} w-full space-y-4 bg-slate-900/40 p-4 rounded-xl text-white flex flex-col justify-center`}
    >
      <h1 className="col-span-2 text-center">{title}</h1>
      {children}
    </div>
  );
};

export default Card;
