import { ButtonGroup, Button } from "@suffragium/ui";
import { FiExternalLink, FiLink } from "@suffragium/ui/icon";
import { Tooltip } from "@suffragium/ui/tooltip";
import Header from "../../components/header";
import Layout from "../../components/layout/Layout";

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

    </Layout>
  )
}
