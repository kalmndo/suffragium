
import Header from "../../components/header";
import Layout from "../../components/layout/Layout";
import { Button, ButtonGroup } from "@suffragium/ui";

export default function votings() {
  return (
    <Layout>
      <Header title="Votings" subtitle="See ongoing and past events" />
      <ButtonGroup>
        <Button color="minimal" className="bg-gray-100 text-gray-900" >Ongoing</Button>
        <Button color="minimal">Past</Button>
      </ButtonGroup>
    </Layout>
  );
}
