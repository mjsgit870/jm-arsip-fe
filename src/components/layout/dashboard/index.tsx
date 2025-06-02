'use client'

import { ActionIcon, Anchor, AppShell, Avatar, Button, Divider, Group, Image, Menu, ScrollArea, Text, useMantineTheme } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { IconBellFilled, IconChevronUp, IconLogout, IconMenu2, IconQuestionMark, IconUserCircle } from "@tabler/icons-react"
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
        <Group h="100%" px="md" justify="space-between">
          <Group>
            <ActionIcon variant="transparent" onClick={desktopToggle} visibleFrom="sm">
              <IconMenu2 />
            </ActionIcon>
            <ActionIcon variant="transparent" onClick={mobileToggle} hiddenFrom="sm">
              <IconMenu2 />
            </ActionIcon>
          </Group>
          <Group>
            <Anchor href="http://frontend-nota-dinas-mitreka.apps.ocdev.jasamarga.co.id/helpdesk" target="_blank">
              Helpdesk
            </Anchor>
            <ActionIcon variant="transparent">
              <IconQuestionMark />
            </ActionIcon>
            <ActionIcon variant="transparent">
              <IconBellFilled />
            </ActionIcon>
            <Menu shadow="xl" width={200} position="bottom-end" offset={15} withArrow>
              <Menu.Target>
                <Group gap="xs" style={{ cursor: 'pointer' }}>
                  <Avatar src="https://ui-avatars.com/api/?name=Admin" />
                  <Text>Admin</Text>
                </Group>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Item leftSection={<IconUserCircle size={18} />}>Lihat Profil</Menu.Item>
                <Menu.Item leftSection={<IconLogout size={18} />} color="red">Keluar</Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
        </Group>
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
                leftSection={<IconUserCircle />}
                rightSection={<IconChevronUp />}
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
