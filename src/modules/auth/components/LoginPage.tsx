"use client"

import CheckboxInput from "@/components/shared/checkbox-input";
import PasswordInput from "@/components/shared/password-input";
import TextInput from "@/components/shared/text-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Flex, Image, Text, Title } from "@mantine/core";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ILoginForm, loginSchema } from "../schemas/authSchema";
import { IconKey, IconUser } from "@tabler/icons-react";

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

  const onSubmit: SubmitHandler<ILoginForm> = (data) => {
    console.log(data)
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      router.push("/dashboard");
    }, 2000);
  }

  return (
    <Flex h="100vh">
      {/* Left Side - Login */}
      <Box flex={5}>
        <Flex h="100%" justify="center" align="center" direction="column" gap="md">
          <Flex direction="column" align="center" gap="sm">
            <Image 
              src="http://frontend-nota-dinas-mitreka.apps.ocdev.jasamarga.co.id/img/brand/logo.png" 
              alt="Logo Jasamarga" 
              h={50}
              w="auto"
            />
            <Title tt="uppercase" order={3}>Jasamarga Digital Arsip</Title>
            <Text>Silahkan Masuk</Text>
          </Flex>
          <Flex component="form" direction="column" gap="sm" miw={400} onSubmit={handleSubmit(onSubmit)}>
            <TextInput 
              control={control} 
              name="username" 
              label="Username" 
              input={{ 
                size: "lg",
                leftSection: <IconUser size={18} />
              }} 
            />
            <PasswordInput 
              control={control} 
              name="password" 
              label="Password" 
              input={{ 
                size: "lg",
                leftSection: <IconKey size={18} />
              }} 
            />

            <CheckboxInput control={control} name="remember" label="Ingat saya" input={{ my: "sm" }} />

            <Button type="submit" size="lg" loading={loading}>Login</Button>
          </Flex>
        </Flex>
      </Box>
      
      {/* Right Side - Image */}
      <Box flex={7} p="md" bg="blue">
        <Flex h="100%" justify="center" align="center">
          <Image src="/login-image.svg" alt="Login Image" h="27vw" w="auto" />
        </Flex>
      </Box>
    </Flex>
  )
}