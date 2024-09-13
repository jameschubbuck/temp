"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Palette, Moon, Sun, ComputerIcon } from "lucide-react";
import DropdownItem from "./dropdown-item";
import * as React from "react";
import { useTheme } from "next-themes";

const ThemeDropdown = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Select value={theme} onValueChange={setTheme}>
      <SelectTrigger className="w-[180px]">
        <SelectValue
          placeholder={
            <DropdownItem icon={<Palette size="15px" />} name="Theme" />
          }
        />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">
          <DropdownItem icon={<Sun size="15px" />} name="Light" />
        </SelectItem>
        <SelectItem value="dark">
          <DropdownItem icon={<Moon size="15px" />} name="Dark" />
        </SelectItem>
        <SelectItem value="system">
          <DropdownItem icon={<ComputerIcon size="15px" />} name="System" />
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default ThemeDropdown;
