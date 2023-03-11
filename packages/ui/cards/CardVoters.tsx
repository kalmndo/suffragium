
export interface CardVotersProps {
  candidate: string
  percentage: number
}

export const CardVoters = (props: CardVotersProps) => {
  return (
    <div className="py-4 px-5 border rounded-md">
      <div className="flex justify-between pb-3">
        <p className="text-sm font-medium">{props.candidate}</p>
        <p className="text-sm font-light">{props.percentage}%</p>
      </div>
      <div className="shadow w-full bg-[#D9D9D9] h-2 rounded-md">
        <div className="bg-primary-800 text-xs h-2 leading-none text-center text-white rounded-md" style={{ width: `${props.percentage}%` }} />
      </div>
    </div>
  )
}
