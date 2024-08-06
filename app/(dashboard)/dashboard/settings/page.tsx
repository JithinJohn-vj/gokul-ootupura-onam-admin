import { Breadcrumbs } from '@/components/breadcrumbs';
import NewTaskDialog from '@/components/kanban/new-task-dialog';
import RightSection from '@/components/ui/rightsection';
import Tabs from '../../../../components/settings/tabsection';


const breadcrumbItems = [
  { title: 'Dashboard', link: '/settings' },
  { title: 'Settings', link: '/dashboard/settings' }
];

export default function Page() {
  return (
    <>
      <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Settings & Update</h2>
            <Breadcrumbs items={breadcrumbItems} />
          </div>
          <div>
            <RightSection />
          </div>
        </div>
        
        <Tabs/>
      </div>
    </>
  );
}
