import Members from "@/components/members";
import { H1 } from "./typography/h1";
import "@/components/hand.css";
import { Separator } from "./ui/separator";

export default function HomePage() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div>
          <H1>
            Welcome to East
            <br /> Coast Cherokees!
          </H1>
        </div>
        <div id="hand" style={{ marginLeft: "15px", marginTop: "40px" }}>
          <H1> 👋 </H1>
        </div>
      </div>
      <Separator style={{ height: "200px" }} orientation="vertical" />
      <Members />
    </div>
  );
}
