import Header from "../../components/header";
import Layout from "../../components/layout/Layout";
import { Button, Divider, InputField } from "@suffragium/ui";
import Candidates from "../../components/create-vote/Candidates";
import PrivateListInput from "../../components/create-vote/PrivateList";

export default function createVote() {
  return (
    <Layout>
      <Header title="Create Vote" subtitle="Create vote to share for people" />
      <div className="space-y-8">
        <InputField name="Title" />
        <InputField name="Description" />
        <Candidates />
        <InputField name="Description" />
        <Divider />
        <PrivateListInput />
        <Button>Create Vote</Button>
      </div>
    </Layout>
  );
}
