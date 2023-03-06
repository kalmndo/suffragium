import { classNames } from "@suffragium/lib";
import { forwardRef} from "react";

type InputProps = JSX.IntrinsicElements["input"] & { isFullWidth?: boolean };

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { isFullWidth = true, ...props },
  ref
) {
  return (
    <input
      {...props}
      ref={ref}
    className={classNames(
      "mb-2 block h-9 rounded-md border border-gray-300 py-2 px-3 text-sm placeholder:text-gray-400 hover:border-gray-400 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:ring-offset-1",
      isFullWidth && "w-full",
      props.className
    )}
    />
  );
});


