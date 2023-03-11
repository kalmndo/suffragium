import { FiArrowRight } from "react-icons/fi"

export const CardStartEndDate = () => {
  return (
    <div className="flex justify-between">
      <div className="">
        <p className="text-sm leading-6 text-gray-900">Monday, August 30, 2021</p>
        <div className="flex space-x-1">
          <p className="text-sm text-gray-900 font-light">8:30 AM</p>
          <p className="text-sm text-gray-500 font-light"> (Europe/Dublin)</p>
        </div>
      </div>
      <div className="flex-none self-center">
        <FiArrowRight />
      </div>
      <div className="">
        <p className="text-sm leading-6 text-gray-900">Monday, August 30, 2021</p>
        <div className="flex space-x-1">
          <p className="text-sm text-gray-900 font-light">8:30 AM</p>
          <p className="text-sm text-gray-500 font-light"> (Europe/Dublin)</p>
        </div>
      </div>
    </div>
  )
}
