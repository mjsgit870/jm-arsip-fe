import DashboardLayout from "@/components/layout/dashboard"

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <DashboardLayout>{children}</DashboardLayout>
}