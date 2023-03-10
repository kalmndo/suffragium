import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"
import { classNames } from "@suffragium/lib"


const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={classNames(
      "peer inline-flex h-5 w-[34px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus:outline-none  disabled:cursor-not-allowed disabled:opacity-50 data-[state=unchecked]:bg-slate-200 data-[state=checked]:bg-slate-900 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 dark:data-[state=unchecked]:bg-slate-700 dark:data-[state=checked]:bg-slate-400",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={classNames(
        "pointer-events-none block h-[14px] w-[14px] rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-0 data-[state=checked]:translate-x-4"
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
