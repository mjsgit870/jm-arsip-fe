import { ActionIcon, Anchor, Avatar, Group, Menu, Text, Tooltip } from "@mantine/core";
import { IconBellFilled, IconLogout, IconMenu2, IconQuestionMark, IconUserCircle } from "@tabler/icons-react";
import { signOut } from "next-auth/react";

interface IHeaderProps {
  mobileToggle: () => void;
  desktopToggle: () => void;
}

export default function Header({ mobileToggle, desktopToggle }: IHeaderProps) {
  const handleLogout = async () => {
    await signOut()
  }

  return (
    <Group h="100%" px="md" justify="space-between">
      <Group>
        <ActionIcon variant="transparent" onClick={desktopToggle} visibleFrom="sm">
          <IconMenu2 size={18} />
        </ActionIcon>
        <ActionIcon variant="transparent" onClick={mobileToggle} hiddenFrom="sm">
          <IconMenu2 size={18} />
        </ActionIcon>
      </Group>
      <Group>
        <Anchor href="http://frontend-nota-dinas-mitreka.apps.ocdev.jasamarga.co.id/helpdesk" target="_blank" fz="sm">
          Helpdesk
        </Anchor>
        <Tooltip label="Faq">
          <ActionIcon variant="transparent">
            <IconQuestionMark size={18} />
          </ActionIcon>
        </Tooltip>
        <Tooltip label="Notifikasi">
          <ActionIcon variant="transparent">
            <IconBellFilled size={18} />
          </ActionIcon>
        </Tooltip>
        <Menu shadow="xl" width={200} position="bottom-end" offset={15} withArrow>
          <Menu.Target>
            <Group gap="xs" style={{ cursor: 'pointer' }}>
              <Avatar src="https://ui-avatars.com/api/?name=Admin" />
              <Text fz="sm">Admin</Text>
            </Group>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item leftSection={<IconUserCircle size={18} />}>Lihat Profil</Menu.Item>
            <Menu.Item leftSection={<IconLogout size={18} />} color="red" onClick={handleLogout}>Keluar</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Group>
    </Group>
  )
}