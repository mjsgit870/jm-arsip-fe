"use client"

import CheckboxInput from "@/components/shared/checkbox-input";
import PasswordInput from "@/components/shared/password-input";
import TextInput from "@/components/shared/text-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Flex, Image, LoadingOverlay, Text, Title } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconKey, IconUser } from "@tabler/icons-react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ILoginForm, loginSchema } from "../schemas/authSchema";

export default function LoginPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false)

  const { control, handleSubmit } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: '',
      password: '',
      remember: false
    }
  });

  const onSubmit: SubmitHandler<ILoginForm> = async (data) => {
    setLoading(true)

    const res = await signIn("credentials", { redirect: false, ...data })

    if (res?.error) {
      notifications.show({ title: "Error", message: "Login Gagal", color: "red" })
      setLoading(false)
      return
    }

    notifications.show({ title: "Success", message: "Login Berhasil", color: "green" })
    setLoading(false)
    router.push("/dashboard")
  }

  return (
    <Flex h={{ base: "auto", md: "100vh" }} direction={{ base: "column", md: "row" }}>
      {/* Left Side - Login */}
      <Box flex={5} pos="relative" mt={{ base: 80, md: 0 }}>
        <LoadingOverlay visible={loading} loaderProps={{ type: "dots" }} />
        <Flex h="100%" justify="center" align="center" direction="column" gap="md">
          <Flex direction="column" align="center" gap="sm">
            <Image 
              src="/logo-jasamarga.png" 
              alt="Logo Jasamarga" 
              style={{ height: 50, width: "auto" }}
            />
            <Title tt="uppercase" order={3}>Jasamarga Digital Arsip</Title>
            <Text>Silahkan Masuk</Text>
          </Flex>
          <Flex 
            component="form" 
            direction="column" 
            miw={{ base: "initial", md: 400 }} 
            gap="sm" 
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextInput 
              control={control} 
              name="username" 
              label="Username" 
              inputProps={{ size: "lg", leftSection: <IconUser size={18} /> }} 
            />
            <PasswordInput 
              control={control} 
              name="password" 
              label="Password" 
              inputProps={{ size: "lg", leftSection: <IconKey size={18} /> }} 
            />

            <CheckboxInput 
              control={control} 
              name="remember" 
              label="Ingat saya" 
              inputProps={{ my: "sm" }} 
            />

            <Button type="submit" size="lg" loading={loading}>Login</Button>
          </Flex>
        </Flex>
      </Box>
      
      {/* Right Side - Image */}
      <Box flex={7} p="md" bg="blue" visibleFrom="md">
        <Flex h="100%" justify="center" align="center">
          <Image src="/login-image.svg" alt="Login Image" h="27vw" w="auto" />
        </Flex>
      </Box>
    </Flex>
  )
}