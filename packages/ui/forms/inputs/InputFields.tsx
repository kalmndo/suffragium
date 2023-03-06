import React,{ forwardRef, ReactNode, useId, useState } from "react";
import { useLocale } from "@suffragium/lib/hooks/useLocale";
import { classNames } from "@suffragium/lib";
import { Input } from "./input";
import { Label } from "./label";
import { Skeleton } from "../..";
import { Addon } from "./Addon";

type InputFieldProps = {
  label?: ReactNode;
  hint?: ReactNode;
  hintErrors?: string[];
  addOnLeading?: ReactNode;
  addOnSuffix?: ReactNode;
  inputIsFullWidth?: boolean;
  addOnFilled?: boolean;
  addOnClassname?: string;
  error?: string;
  labelSrOnly?: boolean;
  containerClassName?: string;
  t?: (key: string) => string;
} & React.ComponentProps<typeof Input> & {
    labelProps?: React.ComponentProps<typeof Label>;
    labelClassName?: string;
  };

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(function InputField(props, ref) {
  const id = useId();
  const { t: _t, isLocaleReady, i18n } = useLocale();
  const t = props.t || _t;
  const name = props.name || "";
  const {
    label = t(name),
    labelProps,
    labelClassName,
    placeholder = isLocaleReady && i18n.exists(name + "_placeholder") ? t(name + "_placeholder") : "",
    className,
    addOnLeading,
    addOnSuffix,
    addOnFilled = true,
    addOnClassname,
    inputIsFullWidth,
    hint,
    type,
    hintErrors,
    labelSrOnly,
    containerClassName,
    readOnly,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    t: __t,
    ...passThrough
  } = props;

  const [inputValue, setInputValue] = useState<string>("");

  return (
    <div className={classNames(containerClassName)}>
      {!!name && (
        <Skeleton
          as={Label}
          htmlFor={id}
          loadingClassName="w-16"
          {...labelProps}
          className={classNames(labelClassName, labelSrOnly && "sr-only", props.error && "text-red-900")}>
          {label}
        </Skeleton>
      )}
      {addOnLeading || addOnSuffix ? (
        <div className="group relative mb-1 flex items-center rounded-md focus-within:outline-none focus-within:ring-2 focus-within:ring-neutral-800 focus-within:ring-offset-1">
          {addOnLeading && (
            <Addon
              isFilled={addOnFilled}
              className={classNames(
                "ltr:rounded-l-md ltr:border-r-0 rtl:rounded-r-md rtl:border-l-0",
                addOnClassname
              )}>
              {addOnLeading}
            </Addon>
          )}
          <Input
            id={id}
            type={type}
            placeholder={placeholder}
            isFullWidth={inputIsFullWidth}
            className={classNames(
              className,
              addOnLeading && "ltr:rounded-l-none rtl:rounded-r-none",
              addOnSuffix && "ltr:rounded-r-none rtl:rounded-l-none",
              type === "search" && "pr-8",
              "!my-0 !ring-0"
            )}
            {...passThrough}
            {...(type == "search" && {
              onChange: (e) => {
                setInputValue((e.target as any).value);
                props.onChange && props.onChange(e);
              },
              value: inputValue,
            })}
            readOnly={readOnly}
            ref={ref}
          />
          {addOnSuffix && (
            <Addon
              isFilled={addOnFilled}
              className={classNames(
                "ltr:rounded-r-md ltr:border-l-0 rtl:rounded-l-md rtl:border-r-0",
                addOnClassname
              )}>
              {addOnSuffix}
            </Addon>
          )}
          
        </div>
      ) : (
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          className={className}
          {...passThrough}
          readOnly={readOnly}
          ref={ref}
          isFullWidth={inputIsFullWidth}
        />
      )}
    </div>
  );
});