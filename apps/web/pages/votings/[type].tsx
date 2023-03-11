import { ButtonGroup, Button, CardStartEndDate, CardVoters } from "@suffragium/ui";
import { FiExternalLink, FiLink } from "@suffragium/ui/icon";
import { Tooltip } from "@suffragium/ui/tooltip";
import Header from "../../components/header";
import Layout from "../../components/layout/Layout";

const mock = [
  {
    candidate: "Walter jr",
    percentage: 24
  },
  {
    candidate: "Walter sr",
    percentage: 76
  }
]

const mockTable = [
  {
    date: '12-12-2023, 02:30 AM',
    address: '0xasdf9efjefj',
    vote: "Walter js"
  },
  {
    date: '12-12-2023, 02:30 AM',
    address: '0xasdf9efjefj',
    vote: "Walter js"
  },
  {
    date: '12-12-2023, 02:30 AM',
    address: '0xasdf9efjefj',
    vote: "Walter js"
  },
]

export default function VoteDetail() {
  return (
    <Layout>
      <Header
        title="Title"
        subtitle="description"
        action={
          <ButtonGroup>
            <Tooltip content='Preview'>
              <Button StartIcon={FiExternalLink} variant='icon' color='secondary' />
            </Tooltip>
            <Tooltip content='Copy voting link'>
              <Button StartIcon={FiLink} variant='icon' color='secondary' />
            </Tooltip>
          </ButtonGroup>
        }
        isBack
      />
      <CardStartEndDate />
      <div className="pt-16 pb-9">
        <p className="font-semibold text-xl ">70 Voters</p>
      </div>
      <div className="max-w-[60%]">
        <div className="space-y-2">
          {mock.map((v, i) => {
            return (
              <CardVoters key={i} candidate={v.candidate} percentage={v.percentage} />
            )
          })}
        </div>
      </div>
      <div className="pt-16 pb-20">
        <table className="table-auto w-full text-sm">
          <thead>
            <tr>
              <th className="font-medium p-4 pl-8 pt-0 pb-3 text-left">Date</th>
              <th className="font-medium p-4 pt-0 pb-3 text-left">Address</th>
              <th className="font-medium p-4 pr-8 pt-0 pb-3 text-left">Vote</th>
            </tr>
          </thead>
          <tbody className="border">
            {mockTable.map((v, i) => (
              <tr key={i} className="border-b"> 
                <td className="font-light p-4 pl-8">{v.date}</td>
                <td className="font-light p-4">{v.address}</td>
                <td className="font-light p-4 pr-8">{v.vote}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}
