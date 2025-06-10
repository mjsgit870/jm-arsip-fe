"use client"

import mantineTheme from "@/config/mantineTheme"
import { MantineProvider } from "@mantine/core"
import { Notifications } from "@mantine/notifications"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { SessionProvider } from "next-auth/react"
import { useState } from "react"

export default function Provider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <MantineProvider theme={mantineTheme}>
      <QueryClientProvider client={queryClient}>
        <SessionProvider>
          <Notifications position="top-center" />
          {children}
        </SessionProvider>
      </QueryClientProvider>
    </MantineProvider>
  )
}