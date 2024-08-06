"use client"
import { useState } from 'react';
import { AreaGraph } from '@/components/charts/area-graph';
import { BarGraph } from '@/components/charts/bar-graph';
import { PieGraph } from '@/components/charts/pie-graph';
import Dollar from '@/public/images/dashboard/dollar.svg';
import { CalendarDateRangePicker } from '@/components/date-range-picker';
import { Overview } from '@/components/overview';
import { RecentSales } from '@/components/recent-sales';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import RightSection from '../../../components/ui/rightsection';
import { PinRightIcon } from '@radix-ui/react-icons';

export default function Page() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">
            Dashboard
          </h2>
          <div className="flex items-center space-x-4">
           <RightSection/>
          </div>
        </div>
        <p className="text-gray-400">
          Welcome to Gokul Oottupura Vegeterian
        </p>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
                </CardHeader>
                <CardContent className=' flex items-center'>
                <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full mr-4">
                  <img src="/images/dashboard/dollar.svg" alt="Dollar icon" className="w-6 h-6 text-gray-600" />
                  </div>
                  <div className="text-2xl font-bold">₹85,455
                  <p className="text-xs text-gray-500">
                    Total Revanue
                  </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2" />
                <CardContent className="flex items-center">
                  <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full mr-4">
                  <img src="/images/dashboard/menus.svg" alt="Dollar icon" className="w-6 h-6 text-gray-600" />
                  </div>
                    <div className="text-2xl font-bold">69
                    <p className="text-xs text-gray-500">Total Menus</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                </CardHeader>
                <CardContent className='flex items-center'>
                <div className="flex items-center justify-center w-10 h-10 bg-blue-300 rounded-full mr-4">
                  <img src="/images/dashboard/customer.svg" alt="Dollar icon" className="w-6 h-6 text-gray-600" />
                  </div>
                  <div className="text-2xl font-bold">6003k
                  <p className="text-xs text-gray-500">
                    Total Customers
                  </p>
                  </div>
                  
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                </CardHeader>
                <CardContent className='flex items-center'>
                <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full mr-4">
                  <img src="/images/dashboard/orders.svg" alt="Dollar icon" className="w-6 h-6 text-gray-600" />
                  </div>
                  <div className="text-2xl font-bold"> 85,455
                  <p className="text-xs text-muted-foreground">
                    Total Orders
                  </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
              <div className="col-span-4">
                <BarGraph />
              </div>
              <div className="col-span-4 md:col-span-3">
                <PieGraph />
              </div>
              <div className="col-span-4">
                <AreaGraph />
              </div>
              <Card className="col-span-4 md:col-span-3">
                <CardHeader>
                  <CardDescription>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentSales />
                </CardContent>
              </Card>
             
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </ScrollArea>
  );
}
