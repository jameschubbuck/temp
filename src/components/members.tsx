import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import PersonCard from "./cui/person-card";

const Members = () => {
  return (
    <div style={{ width: "480px", height: "300px" }}>
      <div style={{ marginLeft: "40px", width: "350px" }}>
        <Carousel opts={{ align: "start" }}>
          <CarouselContent>
            <CarouselItem key={1}>
              <PersonCard
                Name="Toby McGuire"
                Icon="https://github.com/shadcn.png"
                Content="He got bit by a spider but then he became a spider. He's a spiderman. Kina cool."
              />
            </CarouselItem>
            <CarouselItem key={2}>
              <PersonCard
                Name="Tom Hanks"
                Icon="https://github.com/shadcn.png"
                Content="A real cool bio he wrote about himself. Yay so cool. Would love to write this. "
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Members;
