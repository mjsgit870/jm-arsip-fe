'use client'

import { AppShell, Button, Divider, Image, Menu, ScrollArea, useMantineTheme } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { IconChevronUp, IconUserCircle } from "@tabler/icons-react"
import Header from "./Header"
import { Sidebar } from "./Sidebar"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpened, { toggle: mobileToggle }] = useDisclosure()
  const [desktopOpened, { toggle: desktopToggle }] = useDisclosure(true)

  const theme = useMantineTheme()

  return (
    <AppShell
      layout="alt"
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Header mobileToggle={mobileToggle} desktopToggle={desktopToggle} />
      </AppShell.Header>

      <AppShell.Navbar>
        <AppShell.Section p="sm">
          <Image 
            src="http://frontend-nota-dinas-mitreka.apps.ocdev.jasamarga.co.id/img/brand/logo.png" 
            alt="Logo Mitreka"
          />
        </AppShell.Section>

        <Divider />
        
        <AppShell.Section grow component={ScrollArea}>
          <Sidebar />
        </AppShell.Section>

        <Divider />

        <AppShell.Section p="sm">
          <Menu shadow="md" withArrow>
            <Menu.Target>
              <Button
                fullWidth
                leftSection={<IconUserCircle size={18} />}
                rightSection={<IconChevronUp size={18} />}
              >
                IT Support & Services Assistant
              </Button>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Label>Jabatan</Menu.Label>
              <Menu.Item style={{ backgroundColor: theme.colors.blue[0] }}>IT Support & Services Assistant</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </AppShell.Section>
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  )
}
