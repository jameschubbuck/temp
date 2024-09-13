import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const PersonCard = ({ Name, Icon, Content }) => {
  return (
    <Card style={{ width: "350px", display: "flex" }}>
      <CardHeader>
        <CardTitle style={{ display: "flex", alignItems: "center" }}>
          <Avatar style={{ marginRight: "10px" }}>
            <AvatarImage src={Icon} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          {Name}
        </CardTitle>
        <CardDescription>{Content}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default PersonCard;
