import { DashboardNav } from '@/components/dashboard-nav';
import { navItems } from '@/constants/data';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function Sidebar() {
  return (
    <nav
      className={cn(`relative hidden w-72 border-r pt-4 xl:block bg-[#6B0B00]`)}
    >
      <div className="">
        <div className="">
          <div className="space-y-1">
           <div className='pb-10'>
            <Image alt="logo" height={65} width={152} className='w-[152px] h-[65px] mx-auto' src="/images/logos/logo.svg"/>
           </div>
            <DashboardNav items={navItems} />
          </div>
        </div>
      </div>
    </nav>
  );
}
