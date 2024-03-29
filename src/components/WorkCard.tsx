import Link from "next/link";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface WorkCardProps {
  companyTitle: string;
  companyUrl: string;
  description?: string;
  className?: string;
  date: string;
  workDescription: string;
  languages: string[];
}

export default function WorkCard({
  companyTitle,
  companyUrl,
  description,
  className,
  date,
  workDescription,
  languages,
}: WorkCardProps) {
  return (
    <div>
      <Link href={companyUrl}>
        <Card className={className + "w-96 text-center  "}>
          <CardHeader>
            <CardTitle className="text-2xl">{companyTitle}</CardTitle>
            <CardDescription>{date}</CardDescription>
            <p>{description}</p>
          </CardHeader>
          <CardContent>
            <p>{workDescription}</p>
          </CardContent>
          <CardFooter className="space-x-2">
            {languages.map((l) => {
              return <Badge key={l}>{l}</Badge>;
            })}
          </CardFooter>
        </Card>
      </Link>
    </div>
  );
}
