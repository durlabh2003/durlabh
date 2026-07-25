import { cn } from "@/lib/utils";

type MacWindowProps = {
  title?: string;
  children: React.ReactNode;
  className?: string;
  bodyClassName?: string;
  titleClassName?: string;
  active?: boolean;
};

export function MacWindow({
  children,
  className,
  bodyClassName,
  active,
}: MacWindowProps) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-2xl",
        active && "premium-glow",
        className,
      )}
    >
      <div className={cn("flex-1", bodyClassName)}>{children}</div>
    </div>
  );
}
