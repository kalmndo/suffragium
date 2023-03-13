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

  const removeCandidate = (index: number) => {
    const newCandidate = [...candidates];
    newCandidate.splice(index, 1);
    setCandidates(newCandidate);
  };

  return (
    <div>
      <Label>Candidates</Label>
      <ul ref={animateRef}>
        {candidates.map((v, i) => {
          return (
            <li key={i} className="flex space-x-2 text-sm">
              <Input
                name={`candidate-${i}`}
                placeholder="candidate"
                value={v}
                defaultValue={''}
              />
              {candidates.length > 2 &&

                <Button
                  variant="icon"
                  StartIcon={FiTrash}
                  color="destructive"
                  disabled={candidates.length < 3}
                  onClick={() => {
                    removeCandidate(i);
                  }}
                />
              }
            </li>
          );
        })}
      </ul>
      <Button color="minimal" StartIcon={FiPlus} onClick={addCandidates}>
        Add more
      </Button>
    </div>
  );
}
