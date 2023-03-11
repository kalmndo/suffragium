
import Header from "../../components/header";
import Layout from "../../components/layout/Layout";
import { Button, ButtonGroup, CardVote } from "@suffragium/ui";

export default function votings() {

  return (
    <Layout>
      <Header title="Votings" subtitle="See ongoing and past events" />
      <div className='pb-12'>

        <ButtonGroup>
          <Button color="minimal" className="bg-gray-100 text-gray-900" >Ongoing</Button>
          <Button color="minimal">Past</Button>
        </ButtonGroup>
      </div>
      {[0, 1, 2].map((a, i) => (
        <div key={i} className='pb-3'>

          <CardVote />
        </div>
      ))}
    </Layout>
  );
}
