"use client"

import { Checkbox, CheckboxProps } from "@mantine/core"
import { Control, Controller, FieldPath, FieldValues } from "react-hook-form"

interface ITextInputProps<T extends FieldValues> {
  control: Control<T>
  label: string
  name: FieldPath<T>
  input?: CheckboxProps
}

export default function CheckboxInput<T extends FieldValues>({
  control,
  label,
  name,
  input,
}: ITextInputProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Checkbox label={label} error={error?.message} {...input} {...field} />
      )}
    />
  )
}
