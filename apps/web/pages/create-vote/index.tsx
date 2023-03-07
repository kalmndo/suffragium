import Header from "../../components/header";
import Layout from "../../components/layout/Layout";
import { InputField } from "@suffragium/ui";

export default function createVote() {
  return (
    <Layout>
      <Header title="Create Vote" subtitle="Create vote to share for people" />
      <div className="space-y-8">
        <InputField name="Title" />
        <InputField name="Description" />
        <InputField name="Candidate" />
      </div>
    </Layout>
  );
}
