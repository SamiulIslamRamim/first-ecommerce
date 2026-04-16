import { cn } from "@/lib/utils";

const Title = ({
  children,
  classname,
}: {
  children: React.ReactNode;
  classname?: string;
}) => {
  return <h2 className={cn("text-3xl md:text-3xl font-bold text-shop_dark_green capitalize tracking-wide fonst-sans", classname)}>{children}</h2>;
};

export { Title };