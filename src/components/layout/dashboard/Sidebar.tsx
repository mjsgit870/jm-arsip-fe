import { ScrollArea } from '@mantine/core'
import {
  IconDashboard,
  IconDatabase,
  IconFile,
  IconFolder,
  IconReport,
  IconSearch,
  IconSettings,
  IconUserCog
} from '@tabler/icons-react'
import classes from './Sidebar.module.css'
import { LinksGroup } from './SidebarLinksGroup'

const mockdata = [
  { label: 'Pencarian Arsip', icon: IconSearch },
  { label: 'Dashboard', icon: IconDashboard },
  {
    label: 'Naskah Dinas',
    icon: IconFile,
    initiallyOpened: false,
    links: [
      { label: 'Tugas', link: '/' },
      { label: 'Kotak Masuk', link: '/' },
      { label: 'Terkirim', link: '/' },
      { label: 'Draft', link: '/' },
      { label: 'Kelola Label', link: '/' },
    ],
  },
  {
    label: 'Dokumen',
    icon: IconFolder,
    initiallyOpened: false,
    links: [
      { label: 'Arip Aktif', link: '/' },
      { label: 'Permintaan Akses', link: '/' },
      { label: 'Pemberkasan', link: '/' },
    ],
  },
  { label: 'Pelaporan', icon: IconReport },
  {
    label: 'Master Data',
    icon: IconDatabase,
    initiallyOpened: false,
    links: [
      { label: 'Kode Nomor Naskah', link: '/' },
    ],
  },
  {
    label: 'Manajemen User',
    icon: IconUserCog,
    initiallyOpened: false,
    links: [
      { label: 'Admin', link: '/' },
      { label: 'User', link: '/' },
      { label: 'Role', link: '/' },
      { label: 'Permission', link: '/' },
    ],
  },
  {
    label: 'Pengaturan',
    icon: IconSettings,
    initiallyOpened: false,
    links: [
      { label: 'Delegasi', link: '/' },
      { label: 'Sekretaris', link: '/' },
      { label: 'Grup Unit', link: '/' },
      { label: 'Trigger', link: '/' },
    ],
  },
]

export function Sidebar() {
  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />)

  return (
    <nav className={classes.navbar}>
      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>
    </nav>
  )
}