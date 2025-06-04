import { Group, ActionIcon, Anchor, Menu, Avatar, Text } from "@mantine/core";
import { IconMenu2, IconQuestionMark, IconBellFilled, IconUserCircle, IconLogout } from "@tabler/icons-react";

interface IHeaderProps {
  mobileToggle: () => void;
  desktopToggle: () => void;
}

export default function Header({ mobileToggle, desktopToggle }: IHeaderProps) {
  return (
    <Group h="100%" px="md" justify="space-between">
      <Group>
        <ActionIcon variant="transparent" onClick={desktopToggle} visibleFrom="sm" size="sm">
          <IconMenu2 size={18} />
        </ActionIcon>
        <ActionIcon variant="transparent" onClick={mobileToggle} hiddenFrom="sm" size="sm">
          <IconMenu2 size={18} />
        </ActionIcon>
      </Group>
      <Group>
        <Anchor href="http://frontend-nota-dinas-mitreka.apps.ocdev.jasamarga.co.id/helpdesk" target="_blank" fz="sm">
          Helpdesk
        </Anchor>
        <ActionIcon variant="transparent" size="sm">
          <IconQuestionMark size={18} />
        </ActionIcon>
        <ActionIcon variant="transparent" size="sm">
          <IconBellFilled size={18} />
        </ActionIcon>
        <Menu shadow="xl" width={200} position="bottom-end" offset={15} withArrow>
          <Menu.Target>
            <Group gap="xs" style={{ cursor: 'pointer' }}>
              <Avatar src="https://ui-avatars.com/api/?name=Admin" />
              <Text fz="sm">Admin</Text>
            </Group>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item leftSection={<IconUserCircle size={18} />}>Lihat Profil</Menu.Item>
            <Menu.Item leftSection={<IconLogout size={18} />} color="red">Keluar</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Group>
    </Group>
  )
}