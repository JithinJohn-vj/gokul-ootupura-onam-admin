'use client';

import { Breadcrumbs } from '@/components/breadcrumbs';
import RightSection from '../../../../components/ui/rightsection'; 
import Navigation from '../../../../components/ui/navigation';
import { ScrollArea } from '@/components/ui/scroll-area';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Order Management', link: '/dashboard/order-management' }
];

export default function OrderManagementPage() {
  return (
    <>
    <ScrollArea className="h-full">
    <div className="flex-1 space-y-2 p-4 pt-6 md:p-8">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Order Management</h2>
          <Breadcrumbs items={breadcrumbItems} />
        </div>
        <div>
          <RightSection />
        </div>
      </div>
      <Navigation />
      </div>
      </ScrollArea>
    </>
  );
}
