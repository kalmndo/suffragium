import { FiArrowRight } from "@suffragium/ui/icon";
import { Badge } from "../badge";

export const CardVote = () => {
  return (
    <div className="grid grid-cols-5 py-4 px-5 border rounded-md hover:cursor-pointer">
      <div className="col-span-2">
        <p className="text-sm leading-6 font-medium">California</p>
        <p className="text-sm text-gray-500 font-light">This is the descrition</p>
      </div>
      <div>
        <p className="text-sm leading-6 text-gray-900">Mon, 1 August</p>
        <p className="text-sm text-gray-500 font-light">8:30 AM</p>
      </div>
      <div className="self-center">
        <div className="flex justify-center">

          <FiArrowRight />
        </div>
      </div>
      <div>
        <p className="text-sm leading-6 text-gray-900">Mon, 1 August</p>
        <p className="text-sm text-gray-500 font-light">8:30 AM</p>
      </div>
      <div>
        <Badge variant="blue">Public</Badge>
      </div>
    </div>
  )
}


