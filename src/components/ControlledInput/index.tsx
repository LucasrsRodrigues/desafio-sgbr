import React from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { IInputProps, Input } from "@components/base";

interface IControlledInputProps<T extends FieldValues> extends IInputProps {
  control: Control<T>;
  name: Path<T>;
  error?: string;
}

export function ControlledInput<T extends FieldValues>({ control, name, error = "", ...rest }: IControlledInputProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => (
        <Input
          onChangeText={onChange}
          value={value}
          autoCapitalize="none"
          error={error}
          {...rest}
        />
      )}
    />
  )
}