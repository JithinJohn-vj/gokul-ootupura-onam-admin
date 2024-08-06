import { Breadcrumbs } from '@/components/breadcrumbs';
import { Button } from '../../../../components/ui/button';
import RightSection from '@/components/ui/rightsection';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import SearchBox from '../../../../components/menumanagement/search';
import MenuComponent from '@/components/menumanagement/navigation';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Menu Management', link: '/dashboard/menumanagement' }
];

const MenuManagementPage = () => {
  return (
    <>
      <ScrollArea className="h-full">
        <div className="flex-1 space-y-2 p-4 pt-6 md:p-8">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Menu Management</h2>
              <Breadcrumbs items={breadcrumbItems} />
            </div>
            <div>
              <RightSection />
            </div>
          </div>
          <MenuComponent/>
        </div>
      </ScrollArea>
    </>
  );
};

export default MenuManagementPage;
