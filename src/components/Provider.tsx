'use client'

import mantineTheme from "@/config/mantineTheme"
import { MantineProvider } from "@mantine/core"

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider theme={mantineTheme}>
      {children}
    </MantineProvider>
  )
}