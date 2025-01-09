import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useState } from "react";

const SelectCategory = ({ categories, label, onChange }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleSelect = (value) => {
    setSelectedValue(value);
    onChange(value);
  };

  const renderCategories = (categories, prefix = "") => {
    return categories.map((category) => {
      const displayName = `${prefix}${category.name}`;
      return (
        <React.Fragment key={category.category_id}>
          <SelectItem value={category.category_id.toString()}>
            {displayName}
          </SelectItem>
          {category.children &&
            renderCategories(category.children, `${displayName} > `)}
        </React.Fragment>
      );
    });
  };

  return (
    <Select onValueChange={handleSelect}>
      <SelectTrigger>
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="top">None</SelectItem>
        {renderCategories(categories)}
      </SelectContent>
    </Select>
  );
};

export default SelectCategory;
