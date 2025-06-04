"use client"

import { Input, InputProps, InputWrapperProps } from "@mantine/core"
import { Control, Controller, FieldPath, FieldValues } from "react-hook-form"

interface ITextInputProps<T extends FieldValues> {
  control: Control<T>
  label: string
  name: FieldPath<T>
  inputWrapper?: InputWrapperProps
  input?: InputProps
}

export default function TextInput<T extends FieldValues>({
  control,
  label,
  name,
  inputWrapper,
  input,
}: ITextInputProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Input.Wrapper label={label} error={error?.message} {...inputWrapper}>
          <Input {...field} {...input} />
        </Input.Wrapper>
      )}
    />
  )
}
