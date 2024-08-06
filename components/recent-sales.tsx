'use client';

import { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { recentSalesData } from '../constants/recentSalesData';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '../components/ui/dropdown-menu';
import { CheckIcon } from '@radix-ui/react-icons';

interface Sale {
  id: number;
  avatar: string;
  fallback: string;
  name: string;
  description: string;
  detail: string;
}

function getRandomSales(data: Sale[], maxItems: number): Sale[] {
  const shuffled = data.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, maxItems);
}

const periods = [
  'Jan 2024 - Dec 2024',
  'Jan 2023 - Dec 2023',
  'Jan 2022 - Dec 2022',
];

export function RecentSales() {
  const [randomSales, setRandomSales] = useState<Sale[]>([]);
  const [selectedPeriod, setSelectedPeriod] = useState<string>(periods[0]);

  useEffect(() => {
    setRandomSales(getRandomSales(recentSalesData, 4));
  }, []);

  return (
    <div className="space-y-8 mt-[-30px]">
      <div className="flex items-center justify-between">
        <h2 className="text-md font-semibold">Daily Trending Menus</h2>
        <DropdownMenu>
          <DropdownMenuTrigger className="px-4 py-2 rounded-md text-xs border border-gray">
            {selectedPeriod}
          </DropdownMenuTrigger>
          <DropdownMenuContent className='text-xs'>
            {periods.map((period) => (
              <DropdownMenuItem
                key={period}
                onSelect={() => setSelectedPeriod(period)}
                className= {selectedPeriod === period ? '' : '' }
              >
                {period}
                {selectedPeriod === period && (
                  <CheckIcon className="ml-2 h-4 w-4 'text-xs'" />
                )}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {randomSales.map((sale, index) => (
        <div key={sale.id} className="flex items-center">
          <span className="mr-2">#{index + 1}</span>
          <Avatar className="h-9 w-9">
            <AvatarImage src={sale.avatar} alt="Avatar" />
            <AvatarFallback>{sale.fallback}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{sale.name}</p>
            <p className="text-sm text-muted-foreground">{sale.description}</p>
          </div>
          <div className="ml-auto text-gray-400 text-xs">{sale.detail}</div>
        </div>
      ))}
    </div>
  );
}
