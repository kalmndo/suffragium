
import Header from "../../components/header";
import Layout from "../../components/layout/Layout";
import { Button, ButtonGroup, CardVote, InputField } from "@suffragium/ui";
import { FiSearch } from "@suffragium/ui/icon";
import { classNames } from "@suffragium/lib";

export default function votings() {

  return (
    <Layout>
      <Header
        title="Votings"
        subtitle="See ongoing and past events"
        action={
          <InputField
            className="!border-gray-100 bg-gray-100 !pl-0 focus:!ring-offset-0"
            addOnLeading={<FiSearch className="h-4 w-4 text-gray-500" />}
            addOnClassname="!border-gray-100"
            containerClassName={classNames("focus:!ring-offset-0")}
            type="search"
            autoComplete="false"
            placeholder=" Search by title"
          />
        }
      />
      <div className='pb-12'>

        <ButtonGroup>
          <Button color="minimal" className="bg-gray-100 text-gray-900" >Ongoing</Button>
          <Button color="minimal">Past</Button>
        </ButtonGroup>
      </div>
      {[0, 1, 2].map((_a, i) => (
        <div key={i} className='pb-3'>

          <CardVote />
        </div>
      ))}
    </Layout>
  );
}
