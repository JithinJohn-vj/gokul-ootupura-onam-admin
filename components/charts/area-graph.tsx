import * as React from 'react';
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
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
  { month: 'Jan 2024', clients: 1865, customers: 8055, subscribers: 4055 },
  { month: 'Feb 2024', clients: 3045, customers: 20044, subscribers: 64440 },
  { month: 'Mar 2024', clients: 23447, customers: 12440, subscribers: 54440 },
  { month: 'Apr 2024', clients: 73444, customers: 19044, subscribers: 70444 },
  { month: 'May 2024', clients: 20449, customers: 13440, subscribers: 8440 },
  { month: 'Jun 2024', clients: 21444, customers: 14440, subscribers: 9044 },
  { month: 'Jul 2024', clients: 18446, customers: 44480, subscribers: 4440 },
  { month: 'Aug 2024', clients: 34405, customers: 20440, subscribers: 64440 },
  { month: 'Sep 2024', clients: 24437, customers: 144420, subscribers: 5440 },
  { month: 'Oct 2024', clients: 7443, customers: 19044, subscribers: 70444 },
  { month: 'Nov 2024', clients: 24409, customers: 13440, subscribers: 8440 },
  { month: 'Dec 2024', clients: 21444, customers: 14440, subscribers: 9440 }
];

const chartConfig = {
  clients: {
    label: 'Current Clients',
    color: 'hsl(200, 70%, 50%)'
  },
  customers: {
    label: 'New Customers',
    color: 'hsl(120, 70%, 50%)'
  },
  subscribers: {
    label: 'Subscribers',
    color: 'hsl(60, 70%, 50%)'
  }
};

export function AreaGraph() {
  const [selectedOption, setSelectedOption] = React.useState('Jan 2024 - Dec 2024');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    switch (option) {
      case 'Jan 2024 - Dec 2024':
        break;
      case 'Last 6 Months':
        break;
      case 'Last 3 Months':
        break;
      default:
        break;
    }
  };

  const filterChartData = (startDate, endDate) => {
    return chartData.filter(entry => {
      const entryDate = new Date(entry.month + ' 1, 2024');
      return entryDate >= startDate && entryDate <= endDate;
    });
  };

  let filteredData = chartData; 
  if (selectedOption === 'Last 6 Months') {
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
    filteredData = filterChartData(sixMonthsAgo, new Date());
  } else if (selectedOption === 'Last 3 Months') {
    const threeMonthsAgo = new Date();
    threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
    filteredData = filterChartData(threeMonthsAgo, new Date());
  }

  return (
    <Card>
      <CardHeader className="flex">
        <div className="flex justify-between items-center w-full">
          <div>
            <CardTitle>Revenue Chart</CardTitle>
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger className='px-4 py-2 rounded-md text-xs border border-gray'>
                {selectedOption}
              </DropdownMenuTrigger >
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => handleOptionChange('Jan 2024 - Dec 2024')} className='text-xs'>
                  Jan 2024 - Dec 2024
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleOptionChange('Last 6 Months')} className='text-xs'>
                  Last 6 Months
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleOptionChange('Last 3 Months')} className='text-xs'>
                  Last 3 Months
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <CardDescription>
          <div className="flex space-x-4 items-center mt-2">
            <div className="rounded-full h-3 w-3 bg-blue-500"></div>
            <span className="text-xs font-semibold ml-1">Current Clients</span>
            <div className="rounded-full h-3 w-3 bg-orange-500 ml-2"></div>
            <span className="text-xs font-semibold ml-1">Subscribers</span>
            <div className="rounded-full h-3 w-3 bg-purple-500 ml-2"></div>
            <span className="text-xs font-semibold ml-1">New Customers</span>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[210px] w-full"
        >
          <AreaChart
            data={filteredData}
            margin={{
              left: 12,
              right: 12
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => `${value / 1000}k`}
              ticks={[0, 25000, 50000, 100000, 150000, 200000, 250000]}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="subscribers"
              type="natural"
              fill="hsl(60, 70%, 50%)"
              fillOpacity={0.4}
              stroke="hsl(60, 70%, 50%)"
              stackId="a"
            />
            <Area
              dataKey="customers"
              type="natural"
              fill="hsl(120, 70%, 50%)"
              fillOpacity={0.4}
              stroke="hsl(120, 70%, 50%)"
              stackId="a"
            />
            <Area
              dataKey="clients"
              type="natural"
              fill="hsl(200, 70%, 50%)"
              fillOpacity={0.4}
              stroke="hsl(200, 70%, 50%)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
      </CardFooter>
    </Card>
  );
}
