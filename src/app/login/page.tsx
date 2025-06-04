import dynamic from "next/dynamic"

const LoginPage = dynamic(() => import("@/modules/auth/components/LoginPage"))

export default function Login() {
  return (
    <LoginPage />
  )
}