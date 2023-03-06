import { classNames } from "@suffragium/lib";

type AddonProps = {
  children: React.ReactNode;
  isFilled?: boolean;
  className?: string;
  error?: boolean;
};

export const Addon = ({ isFilled, children, className, error }: AddonProps) => (
  <div
    className={classNames(
      "addon-wrapper h-9 border border-gray-300 px-3",
      isFilled && "bg-gray-100",
      className
    )}>
    <div className={classNames("flex h-full flex-col justify-center text-sm", error && "text-red-900")}>
      <span className="whitespace-nowrap py-2.5">{children}</span>
    </div>
  </div>
);