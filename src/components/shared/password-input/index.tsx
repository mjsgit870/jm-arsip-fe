"use client"

import {
  Input,
  InputWrapperProps,
  PasswordInput as MantinePasswordInput,
  PasswordInputProps,
} from "@mantine/core"
import { Control, Controller, FieldPath, FieldValues } from "react-hook-form"

interface IPasswordInputProps<T extends FieldValues> {
  control: Control<T>
  label: string
  name: FieldPath<T>
  inputWrapper?: InputWrapperProps
  input?: PasswordInputProps
}

export default function PasswordInput<T extends FieldValues>({
  control,
  label,
  name,
  inputWrapper,
  input,
}: IPasswordInputProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Input.Wrapper label={label} error={error?.message} {...inputWrapper}>
          <MantinePasswordInput {...field} {...input} />
        </Input.Wrapper>
      )}
    />
  )
}
