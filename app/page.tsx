import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex gap-2 mb-4">
      <Badge variant="secondary">UI/UX Designer</Badge>
      <Badge variant="outline">Frontend Dev</Badge>
      <Badge variant="outline">Startup Experience</Badge>
    </div>
  );
}
