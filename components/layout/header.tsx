import ThemeToggle from '@/components/layout/ThemeToggle/theme-toggle';
import { cn } from '@/lib/utils';
import { MobileSidebar } from './mobile-sidebar';
import { UserNav } from './user-nav';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="  top-0 z-20 border-b bg-background/95 backdrop-blur w-full lg:pl-[var(--sidebar-width)]">
      <nav className="flex h-14 items-center justify-betweenZ xl:justify-end px-4">
       
        <div className={cn('block xl:!hidden')}>
          <MobileSidebar />
        </div>

        <div className="flex items-center gap-2">
          <UserNav />
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
}
