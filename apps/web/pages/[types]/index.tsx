import { Button, CardVoters, Divider } from "@suffragium/ui";
import PoweredBy from "../../components/PoweredBy";

const mockData = {
  title: "US Election",
  description: 'United state of america election 2024, Connect wallet to vote',
  creator: '0x143h809jdfdf',
  contract: '0xj9fj39f49jfowe9jf',
  startDate: 'Friday, August 30, 2024',
  startTime: '09:00 am',
  endDate: 'Friday, August 30, 2024',
  endTime: '09:00 am',
  timeZone: 'Europe/Dublin',
  votings: [
    { candidate: "Donald trump", percentage: 75 },
    { candidate: "Hilary clinton", percentage: 25 }
  ]
}

export default function Voting() {
  const { title, description, creator, contract, startDate, startTime, endDate, endTime, timeZone, votings } = mockData
  return (
    <main className="flex flex-col md:mx-4 items-center mx-auto my-0 ease-in-out md:my-24">
      <div className="flex bg-white p-6 w-3/5">
        <div className="w-2/5">
          <p className="font-semibold text-2xl pb-4">{title}</p>
          <p className="font-light text-gray-600 ">{description}</p>
          <Divider className="my-7" />
          <div className="grid grid-cols-3">
            <p className="text-sm font-medium">Creator</p>
            <p className="text-sm font-light col-span-2 mb-6">{contract}</p>
            <p className="text-sm font-medium">Contract</p>
            <p className="text-sm font-light col-span-2 mb-6">{contract}</p>
            <p className="text-sm font-medium">Start</p>
            <div className="col-span-2">
              <p className="text-sm ">{startDate}</p>
              <div className="flex mb-6">
                <p className="text-sm pr-2">{startTime}</p>
                <p className="text-sm text-gray-600 font-light">{`(${timeZone})`} </p>
              </div>
            </div>
            <p className="text-sm font-medium">End</p>
            <div className="col-span-2">
              <p className="text-sm ">{endDate}</p>
              <div className="flex mb-6">
                <p className="text-sm pr-2">{endTime}</p>
                <p className="text-sm text-gray-600 font-light">{`(${timeZone})`} </p>
              </div>
            </div>
          </div>
        </div>
        <div className='px-4'>
          <Divider orientation="vertical" decorative />
        </div>
        <div className="w-3/5 pt-8 flex flex-col justify-between">
          <div className="space-y-5">
            {votings.map((v, i) => (
              <CardVoters key={i} candidate={v.candidate} percentage={v.percentage} />
            ))}
          </div>
          <div className="">
            <Button className="w-full justify-center" >Connect Wallet</Button>
          </div>
        </div>
      </div>
      <PoweredBy />
    </main>
  )
}
