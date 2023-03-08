import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Button, Input, Label } from "@suffragium/ui";
import { FiPlus, FiTrash } from "@suffragium/ui/icon";
import { useState } from "react";

export default function Candidates() {
  const [animateRef] = useAutoAnimate<HTMLUListElement>();
  const [candidates, setCandidates] = useState<string[]>(["adam", "jordan"]);

  const addCandidates = () => {
    setCandidates([...candidates, "new"]);
  };

  const removeCandidate = (value: number) => {
    const newCandidate = candidates.filter((_, v) => {
      if (v === value) {
        candidates.push("");
        return false;
      }
      return true;
    });
    setCandidates(newCandidate);
  };

  return (
    <div>
      <Label>Candidates</Label>
      <ul ref={animateRef}>
        {candidates.map((v, i) => {
          console.log('o', i)
          return (
            <div key={i} className="flex space-x-2 text-sm">
              <Input
                name={`candidate-${i}`}
                placeholder="candidate"
                value={v}
                defaultValue={''}
              />
              <Button
                variant="icon"
                StartIcon={FiTrash}
                color="destructive"
                disabled={candidates.length < 3}
                onClick={() => {
                  removeCandidate(i);
                }}
              />
            </div>
          );
        })}
        <Button color="minimal" StartIcon={FiPlus} onClick={addCandidates}>
          Add more
        </Button>
      </ul>
    </div>
  );
}
