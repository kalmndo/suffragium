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
    </Layout>
  )
}
