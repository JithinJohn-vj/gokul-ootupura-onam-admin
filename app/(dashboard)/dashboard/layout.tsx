import Header from '@/components/layout/header';
import Sidebar from '@/components/layout/sidebar-old';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next Shadcn Dashboard Starter',
  description: 'Basic dashboard with Next.js and Shadcn'
};

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
      
        <Header />
        <main className=" overflow-hidden">{children}</main>
      </div>
    </div>
  );
}
