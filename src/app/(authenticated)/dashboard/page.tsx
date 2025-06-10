import dynamic from "next/dynamic"

const DashboardPage = dynamic(() => import("@/modules/dashboard/components/DashboardPage"))

export default function Dashboard() {
  return (
    <DashboardPage />
  )
}