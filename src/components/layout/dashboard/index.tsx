'use client'

import { ActionIcon, AppShell, Box, Button, Divider, Group, Image, Menu, ScrollArea, useMantineTheme } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { IconChevronUp, IconMenu2, IconUserCircle } from "@tabler/icons-react"
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
        <AppShell.Section p="sm" h={59}> {/* 59 beacue header is inner border bottom, so we need decrease 1 in this section */} 
          <Group h="100%" justify="space-between">
            <Box h="100%">
              <Image 
                src="http://frontend-nota-dinas-mitreka.apps.ocdev.jasamarga.co.id/img/brand/logo.png" 
                alt="Logo Jasamarga"
                fit="contain"
                h="100%"
              />
            </Box>
            <ActionIcon variant="transparent" onClick={mobileToggle} hiddenFrom="sm">
              <IconMenu2 size={18} />
            </ActionIcon>
          </Group>
        </AppShell.Section>

        <Divider  />
        
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
