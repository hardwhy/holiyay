import React, { ReactNode } from "react";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

type TextAreaInputProps = {
  name: string;
  label: string | ReactNode;
  defaultValue?: string;
  placeholder?: string;
};
function TextAreaInput({ name, label, defaultValue, placeholder }: TextAreaInputProps) {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
      <Textarea
        id={name}
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        rows={5}
        required
        className="leading-loose"
      />
    </div>
  );
}

export default TextAreaInput;
