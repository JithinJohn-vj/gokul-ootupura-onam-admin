import * as React from 'react';
import { Pie, PieChart } from 'recharts';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '../../components/ui/dropdown-menu'; 

const chartData = [
  { status: 'On Delivery', count: 275, fill: 'var(--color-delivery)' },
  { status: 'Delivered', count: 200, fill: 'var(--color-delivered)' },
  { status: 'Cancelled', count: 287, fill: 'var(--color-cancelled)' },
  { status: 'Others', count: 190, fill: 'var(--color-others)' }
];

const chartConfig = {
  count: {
    label: 'Count'
  },
  delivery: {
    label: 'On Delivery',
    color: 'hsl(var(--chart-1))'
  },
  delivered: {
    label: 'Delivered',
    color: 'hsl(var(--chart-2))'
  },
  cancelled: {
    label: 'Cancelled',
    color: 'hsl(var(--chart-3))'
  },
  others: {
    label: 'Others',
    color: 'hsl(var(--chart-4))'
  }
};

export function PieGraph() {
  const [selectedDateRange, setSelectedDateRange] = React.useState('Jan 2024 - Dec 2024');

  const handleDateRangeChange = (dateRange) => {
    setSelectedDateRange(dateRange);
  };

  return (
    <Card className="border border-white">
      <CardHeader className="flex flex-col items-stretch border-b border-white">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold text-gray-800">Order Summary</h3>
          <div className="flex items-center ml-2">
            <DropdownMenu>
              <DropdownMenuTrigger className='px-4 py-2 rounded-md text-xs border border-gray'>
                {selectedDateRange}
              </DropdownMenuTrigger>
              <DropdownMenuContent className="border-black">
                <DropdownMenuItem onClick={() => handleDateRangeChange('Jan 2024 - Dec 2024')} className='text-xs'>
                  Jan 2024 - Dec 2024
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1 pb-1 flex">
        <div className="flex-1">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square h-full -ml-8"
          >
            <PieChart width={320} height={320}>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey="count"
                nameKey="status"
                innerRadius={50}
                strokeWidth={5}
                paddingAngle={5}
              />
            </PieChart>
          </ChartContainer>
        </div>
        <div className="flex-1 mt-4 mr-14 mt-[60px]">
          {chartData.map(item => (
            <div key={item.status} className="flex items-center mb-1">
              <div
                className="rounded-full h-3 w-3 mr-2"
                style={{ backgroundColor: item.fill }}
              ></div>
              <span className="text-xs">{item.status}</span>
              <span className="ml-auto text-xs font-bold">{item.count}</span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-base"></CardFooter>
    </Card>
  );
}
