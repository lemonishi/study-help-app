import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "./ui/aspect-ratio";

function TaskCard(props: any) {
  return (
    <Card>
      <AspectRatio
        ratio={5 / 4}
        className="flex flex-col justify-between"
      >
        <div>
          <CardHeader>
            <CardTitle>{props.title}</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{props.content}</p>
          </CardContent>
        </div>
        <div className="flex">
          <CardFooter>
            <p>Tags</p>
          </CardFooter>
        </div>
      </AspectRatio>
    </Card>
  );
}

export default TaskCard;
