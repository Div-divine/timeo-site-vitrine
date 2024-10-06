import clsx from "clsx";

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

export default function Bounded({
  as: Comp = "section",
  className,
  children,
  ...restProps
}: BoundedProps) {
  return (
    <Comp
      className={clsx(
        "px-4 py-14",
        className,
      )}
      {...restProps}
    >
      <div className="mx-auto flex w-full flex-col items-center">
        {children}
      </div>
    </Comp>
  );
}
