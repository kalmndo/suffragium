import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Button, Input, Label } from "@suffragium/ui";
import { FiPlus } from "@suffragium/ui/icon";
import { useState } from "react";

export default function Candidates() {
  const [animateRef] = useAutoAnimate<HTMLUListElement>();
  const [candidates, setCandidates] = useState<string[]>(['adam', 'jordan'])
  const addCandidates = () => {
    setCandidates(([...candidates, '']))
  }
  return (
    <div>
      <Label >Candidates</Label>
      <ul ref={animateRef}>
        {candidates.map((v, i) =>
          <Input name={`candidate-${i}`} placeholder="candidate" value={v} />
        )}
      <Button
        color="minimal"
        StartIcon={FiPlus}
        onClick={addCandidates}
      >
        Add more
      </Button>
      </ul>
    </div>
  )
}