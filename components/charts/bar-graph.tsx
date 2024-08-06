import * as React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '../../components/ui/dropdown-menu';
import {
  Card,
  CardContent,
  CardHeader
} from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltipContent
} from '@/components/ui/chart';
import { useState, useMemo } from 'react';

export const description = 'An interactive bar chart';

const chartData = {
  2024: [
    { date: '2024-01-01', currentClients: 22042, subscribers: 15440, newCustomers: 30440 },
    { date: '2024-02-01', currentClients: 9447, subscribers: 18440, newCustomers: 25440 },
    { date: '2024-03-01', currentClients: 16337, subscribers: 12044, newCustomers: 34420 },
    { date: '2024-04-01', currentClients: 24244, subscribers: 26044, newCustomers: 38444 },
    { date: '2024-05-01', currentClients: 37322, subscribers: 29011, newCustomers: 40111 },
    { date: '2024-06-01', currentClients: 30111, subscribers: 34011, newCustomers: 45220 },
    { date: '2024-07-01', currentClients: 24511, subscribers: 18220, newCustomers: 36022 },
    { date: '2024-08-01', currentClients: 40323, subscribers: 32232, newCustomers: 48230 },
    { date: '2024-09-01', currentClients: 52329, subscribers: 11023, newCustomers: 23330 },
    { date: '2024-10-01', currentClients: 26221, subscribers: 12290, newCustomers: 33230 },
    { date: '2024-11-01', currentClients: 32227, subscribers: 35320, newCustomers: 46230 },
    { date: '2024-12-01', currentClients: 29232, subscribers: 24310, newCustomers: 12380 }
  ],
  2023: []
};

type ChartDataKeys = keyof typeof chartData;

const chartConfig = {
  currentClients: {
    label: 'Current Clients',
    color: '#3182CE' 
  },
  subscribers: {
    label: 'Subscribers',
    color: '#F6AD55' 
  },
  newCustomers: {
    label: 'New Customers',
    color: '#6B46C1' 
  }
};

export function BarGraph() {
  const [selectedYear, setSelectedYear] = useState<ChartDataKeys>(2024);

  const fullChartData = useMemo(() => {
    const months = [];
    for (let month = 1; month <= 12; month++) {
      const monthString = month.toString().padStart(2, '0');
      const date = `${selectedYear}-${monthString}-01`;
      const existingData = chartData[selectedYear].find(item => item.date === date);
      if (existingData) {
        months.push(existingData);
      } else {
        months.push({
          date,
          currentClients: 0,
          subscribers: 0,
          newCustomers: 0
        });
      }
    }
    return months;
  }, [selectedYear]);

  const yearRangeLabel = useMemo(() => {
    const startDate = `${selectedYear}-01-01`;
    const endDate = `${selectedYear}-12-01`;
    const startDateFormatted = new Date(startDate).toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric'
    });
    const endDateFormatted = new Date(endDate).toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric'
    });
    return `${startDateFormatted} - ${endDateFormatted}`;
  }, [selectedYear]);

  return (
    <Card className="border border-white">
      <CardHeader className="flex flex-col items-stretch border-white">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold text-gray-800">Revenue</h3>
          <div className="flex items-center ml-2">
            <DropdownMenu>
              <DropdownMenuTrigger className="px-4 py-2 rounded-md text-xs border border-gray">
                {yearRangeLabel}
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {[2024, 2023].map((year) => (
                  <DropdownMenuItem
                    key={year}
                    onSelect={() => setSelectedYear(year)}
                    className={selectedYear === year ? 'bg-gray-200' : ''}
                  >
                    {`${year} (${new Date(`${year}-01-01`).toLocaleDateString('en-US', { month: 'short' })} - ${new Date(`${year}-12-01`).toLocaleDateString('en-US', { month: 'short' })})`}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="flex space-x-4 items-center mt-2">
     <div className="flex space-x-4 items-center mt-2">
            <div className="rounded-full h-3 w-3 bg-blue-500"></div>
            <span className="text-xs font-semibold ml-1">Current Clients</span>
            <div className="rounded-full h-3 w-3 bg-orange-500 ml-2"></div>
            <span className="text-xs font-semibold ml-1">Subscribers</span>
            <div className="rounded-full h-3 w-3 bg-purple-500 ml-2"></div>
            <span className="text-xs font-semibold ml-1">New Customers</span>
          </div>

        </div>
      </CardHeader>
      <CardContent className="px-8 sm:p-6 border-b border-white">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[200px] w-full"
        >
          <BarChart
            data={fullChartData}
            barSize={20} 
            margin={{ top: 10, right: 10, bottom: 20, left: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString('en-US', {
                  month: 'short'
                });
              }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value / 1000}k`}
            />
            <Tooltip
              content={<ChartTooltipContent />}
            />
            {Object.keys(chartConfig).map((key, index) => (
              <Bar
                key={index}
                dataKey={key as keyof typeof chartConfig}
                stackId="a"
                fill={chartConfig[key as keyof typeof chartConfig].color}
              />
            ))}
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
