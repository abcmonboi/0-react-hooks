import { Button } from "@/components/ui/button";
import React from "react";

const ComponentUsing = ({ onIncrese }: { onIncrese: () => void }) => {
  console.log("Un-Rerender with useCallback");
  return (
    <div className="flex flex-col items-center justify-center">
      Un-Render with prop only func from main component
      <Button onClick={onIncrese}>Increase</Button>
    </div>
  );
};

export default React.memo(ComponentUsing);
