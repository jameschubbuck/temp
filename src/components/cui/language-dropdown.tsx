import { InlineCode } from "../typography/inline-code";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { BookA } from "lucide-react";
import DropdownItem from "./dropdown-item";

const LanguageDropdown = () => {
  return (
    <div style={{ marginRight: "5px" }}>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue
            placeholder={
              <DropdownItem icon={<BookA size="15px" />} name="Language" />
            }
          />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="english">
            <DropdownItem icon={<InlineCode>ENG</InlineCode>} name="English" />
          </SelectItem>
          <SelectItem value="cherokee">
            <DropdownItem icon={<InlineCode>CHR</InlineCode>} name="Cherokee" />
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageDropdown;
