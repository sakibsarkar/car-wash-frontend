import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

const ManageUser = () => {
  return (
    <div className="px-4 py-8 sm:px-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">User Management</h1>
        <p className="text-muted-foreground">
          Manage user roles and permissions.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Card>
          <div className="flex items-center gap-4 p-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src="/placeholder-user.jpg" alt="John Doe" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">John Doe</div>
              <div className="text-sm text-muted-foreground">
                john.doe@example.com
              </div>
              <div className="text-sm text-muted-foreground">
                Member since: 2 years ago
              </div>
            </div>
          </div>
          <Separator />
          <CardContent className="p-4">
            <Select>
              <SelectTrigger className="w-fit">
                <SelectValue placeholder="Limit per page" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Content limit</SelectLabel>

                  <SelectItem value="10">Limit: 10</SelectItem>
                  <SelectItem value="20">Limit: 20</SelectItem>
                  <SelectItem value="30">Limit: 30</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </CardContent>
          <CardFooter className="p-4 text-right">
            <Button variant="outline" size="sm">
              Save
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <div className="flex items-center gap-4 p-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src="/placeholder-user.jpg" alt="Jane Smith" />
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">Jane Smith</div>
              <div className="text-sm text-muted-foreground">
                jane.smith@example.com
              </div>
              <div className="text-sm text-muted-foreground">
                Member since: 1 year ago
              </div>
            </div>
          </div>
          <Separator />
          <CardContent className="p-4">
            <Select>
              <SelectTrigger className="w-fit">
                <SelectValue placeholder="Limit per page" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Content limit</SelectLabel>

                  <SelectItem value="10">Limit: 10</SelectItem>
                  <SelectItem value="20">Limit: 20</SelectItem>
                  <SelectItem value="30">Limit: 30</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </CardContent>
          <CardFooter className="p-4 text-right">
            <Button variant="outline" size="sm">
              Save
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <div className="flex items-center gap-4 p-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src="/placeholder-user.jpg" alt="Bob Johnson" />
              <AvatarFallback>BJ</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">Bob Johnson</div>
              <div className="text-sm text-muted-foreground">
                bob.johnson@example.com
              </div>
              <div className="text-sm text-muted-foreground">
                Member since: 6 months ago
              </div>
            </div>
          </div>
          <Separator />
          <CardContent className="p-4">
            <Select>
              <SelectTrigger className="w-fit">
                <SelectValue placeholder="Limit per page" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Content limit</SelectLabel>

                  <SelectItem value="10">Limit: 10</SelectItem>
                  <SelectItem value="20">Limit: 20</SelectItem>
                  <SelectItem value="30">Limit: 30</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </CardContent>
          <CardFooter className="p-4 text-right">
            <Button variant="outline" size="sm">
              Save
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ManageUser;
