import Header from "../../components/header";
import Layout from "../../components/layout/Layout";
import { Button, Input, InputField } from "@suffragium/ui";
import { FiPlus } from "@suffragium/ui/icon";
import Candidates from "../../components/create-vote/Candidates";

export default function createVote() {
  return (
    <Layout>
      <Header title="Create Vote" subtitle="Create vote to share for people" />
      <div className="space-y-8">
        <InputField name="Title" />
        <InputField name="Description" />
        <Candidates />
        <InputField name="Description" />

      </div>
    </Layout>
  );
}
