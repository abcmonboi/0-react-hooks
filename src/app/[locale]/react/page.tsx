import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import TwoWayBinding from "@/app/[locale]/react/_components/TwoWayBinding";
import Mount from "@/app/[locale]/react/_components/Mount";

export default function page() {
  return (
    <Tabs defaultValue="basic">
      <TabsList>
        <TabsTrigger value="basic">Basic Knowledge</TabsTrigger>
        <TabsTrigger value="advanced">Advanced Knowledge</TabsTrigger>
      </TabsList>
      <TabsContent className="flex flex-col gap-6" value="basic">
        <TwoWayBinding />
        <Mount />
      </TabsContent>
      <TabsContent value="advanced">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you&apos;ll be logged
              out.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="grid gap-3">
              <Label htmlFor="tabs-demo-current">Current password</Label>
              <Input id="tabs-demo-current" type="password" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="tabs-demo-new">New password</Label>
              <Input id="tabs-demo-new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
