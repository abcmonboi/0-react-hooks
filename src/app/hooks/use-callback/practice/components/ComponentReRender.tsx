import { Button } from "@/components/ui/button";
import React from "react";

const ComponentReRender = ({ onIncrese }: { onIncrese: () => void }) => {
  //   console.log("Re-Render unuse callback");
  return (
    <div className="flex flex-col items-center justify-center">
      Re-render
      <Button onClick={onIncrese}>Increase</Button>
    </div>
  );
};

export default React.memo(ComponentReRender);
