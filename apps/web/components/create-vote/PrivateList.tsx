import { useState } from "react";
import { Label, Switch, Textarea } from "@suffragium/ui";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export default function PrivateListInput() {
  const [animateRef] = useAutoAnimate()
  const [checked, setChecked] = useState(false)

  const onCheckedChange = () => {
    setChecked(!checked)
  }

  return (
    <div className="flex w-full flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4">
      <fieldset className="block w-full flex-col sm:flex">
        <div className="flex space-x-3">
          <div className="flex w-auto flex-row items-center h-fit">
            <Switch onCheckedChange={onCheckedChange} checked={checked} />
          </div>
          <div>
            <Label className="text-sm font-semibold leading-none text-black">Make it private </Label>
            <p className="-mt-2 text-sm leading-normal text-gray-600">Input adresses to whitelist the voter</p>
          </div>
        </div>
        <div className="lg:ml-14" ref={animateRef}>
          {checked && <div className="mt-4">
            <Textarea placeholder="0xef46D5fe753c988606E6F703260D816AF53B03EB," />
          </div>
          }
        </div>
      </fieldset>
    </div>
  )
}
