import React, { ReactNode } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

type FormInputProps = {
  name: string;
  type: string;
  label?: string | ReactNode;
  defaultValue?: string;
  placeholder?: string;
};

function FormInput({
  name,
  type,
  label,
  placeholder,
  defaultValue,
}: FormInputProps) {
  return (
    <div className="mb-2">
      <Label htmlFor="firstName" className="capitalize">
        {label || name}
      </Label>
      <Input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        required
        defaultValue={defaultValue}
      />
    </div>
  );
}

export default FormInput;
