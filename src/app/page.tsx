import Link from "next/link";
import { Button } from "@/components/button";

export default function Home() {
  return (
    <div className="container mx-auto max-w-[1200px]">
      <h1>Home</h1>
      <Link href={"/users/1/userDetail/43"}>USerInfo</Link>
      <Button />
    </div>
  );
}
