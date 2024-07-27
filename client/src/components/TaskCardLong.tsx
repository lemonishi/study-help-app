import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function TaskCard() {
  return (
    <Card className="mb-auto">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus orci
          sem, dignissim in mi in, vulputate rutrum nisi. Cras sit amet quam
          eget urna fringilla mattis. Aenean varius, turpis vel efficitur
          suscipit, tortor mi tempus mauris, eget tincidunt mauris eros eu dui.
          Mauris commodo mattis ultrices. Curabitur dapibus nisi eu justo porta
          vestibulum. Mauris sodales cursus nibh, eget sodales nulla ultrices a.
          Suspendisse potenti. Nulla condimentum dolor eget mi luctus lacinia.
          Nulla facilisi. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Morbi vel justo nisi. Nam scelerisque dolor orci, accumsan
          tincidunt sem tincidunt ut.
        </p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}

export default TaskCard;
