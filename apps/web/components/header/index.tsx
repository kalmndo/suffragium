import { Button } from "@suffragium/ui";
import { FiArrowLeft } from "@suffragium/ui/icon";
import { ReactNode } from "react";

interface Header {
  title: string;
  subtitle: string;
  action?: ReactNode
  isBack?: boolean
}

export default function Header(props: Header) {
  return (
    <div className="pt-12 pb-8">
      <div className="flex justify-between">
        <div className="flex">
          {props.isBack &&
            <div className="pr-2">
              <Button StartIcon={FiArrowLeft} variant='icon' color="minimal" />
            </div>
          }
          <div>
            <h3 className="font-popppins font-semibold text-xl text-black tracking-tight">
              {props.title}
            </h3>
            <p className="text-sm font-light text-gray-500">{props.subtitle}</p>
          </div>
        </div>
        {props.action &&
          <div className="self-center">
            {props.action}
          </div>
        }
      </div>
      <hr className="w-full h-px mt-6 bg-red-600"></hr>
    </div>
  );
}
