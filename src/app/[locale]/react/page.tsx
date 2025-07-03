import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import TwoWayBinding from "@/app/[locale]/react/_components/TwoWayBinding";
import Mount from "@/app/[locale]/react/_components/Mount";
import Memo from "@/app/[locale]/react/_components/Memo";
import UnitTest from "@/app/[locale]/react/_components/UnitTest";

export default function page() {
  return (
    <Tabs defaultValue="basic">
      <TabsList className="grid grid-cols-2">
        <TabsTrigger value="basic">Basic Knowledge</TabsTrigger>
        <TabsTrigger value="advanced">Advanced Knowledge</TabsTrigger>
      </TabsList>
      <TabsContent className="flex flex-col gap-6" value="basic">
        <Mount />
        <TwoWayBinding />
      </TabsContent>
      <TabsContent className="flex flex-col gap-6" value="advanced">
        <Memo />
        <UnitTest />
      </TabsContent>
    </Tabs>
  );
}
