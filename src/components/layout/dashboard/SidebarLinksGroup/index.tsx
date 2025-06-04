import { Box, Collapse, Group, Text, ThemeIcon, UnstyledButton } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import React, { useState } from 'react';
import classes from './SidebarLinksGroup.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LinksGroupProps {
  icon: React.FC<any>;
  label: string;
  href?: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
}

export function LinksGroup({ icon: Icon, label, href, initiallyOpened, links }: LinksGroupProps) {
  const pathname = usePathname();
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);

  const isActive = (link: string) => pathname === link || pathname.startsWith(`${link}/`);

  const items = (hasLinks ? links : []).map((link) => (
    <Text
      component={Link}
      className={`${classes.link} ${isActive(link.link) ? classes.active : ''}`}
      href={link.link}
      key={link.label}
    >
      {link.label}
    </Text>
  ));

  const groupIsActive = hasLinks
    ? links?.some((link) => isActive(link.link))
    : isActive(href || '');

  return (
    <>
      {hasLinks ? (
        <React.Fragment>
          <UnstyledButton 
            onClick={() => setOpened((o) => !o)} 
            className={`${classes.control} ${groupIsActive ? classes.active : ''}`}
          >
            <Group justify="space-between" gap={0}>
              <Box style={{ display: 'flex', alignItems: 'center' }}>
                <ThemeIcon variant="light" size={30}>
                  <Icon size={18} />
                </ThemeIcon>
                <Box ml="md">{label}</Box>
              </Box>
              {hasLinks && (
                <IconChevronRight
                  className={classes.chevron}
                  stroke={1.5}
                  size={16}
                  style={{ transform: opened ? 'rotate(-90deg)' : 'none' }}
                />
              )}
            </Group>
          </UnstyledButton>
          {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
        </React.Fragment>
      ) : href ? (
        <UnstyledButton 
          component={Link} 
          href={href} 
          className={`${classes.control} ${isActive(href) ? classes.active : ''}`}
        >
          <Box style={{ display: 'flex', alignItems: 'center' }}>
            <ThemeIcon variant="light" size={30}>
              <Icon size={18} />
            </ThemeIcon>
            <Box ml="md">{label}</Box>
          </Box>
        </UnstyledButton>
      ) : null}
    </>
  );
}
