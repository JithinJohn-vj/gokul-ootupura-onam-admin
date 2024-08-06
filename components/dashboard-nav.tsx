'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';
import { NavItem } from '@/types';
import { Dispatch, SetStateAction } from 'react';
import { useSidebar } from '@/hooks/useSidebar';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from './ui/tooltip';

interface DashboardNavProps {
  items: NavItem[];
  setOpen?: Dispatch<SetStateAction<boolean>>;
  isMobileNav?: boolean;
}

export function DashboardNav({
  items,
  setOpen,
  isMobileNav = false
}: DashboardNavProps) {
  const path = usePathname();
  const { isMinimized } = useSidebar();

  if (!items?.length) {
    return null;
  }

  console.log('isActive', isMobileNav, isMinimized);

  // Separate the last two items from the rest
  const lastTwoItems = items.slice(-2);
  const otherItems = items.slice(0, -2);

  return (
    <nav className="flex flex-col justify-between h-[70vh] ">
      <TooltipProvider>
        <div className='flex flex-col justify-between  h-full '>
        <div className="grid items-start gap-2">
          {otherItems.map((item, index) => {
            const Icon = Icons[item.icon || 'arrowRight'];
            return (
              item.href && (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.disabled ? '/' : item.href}
                      className={cn(
                        'flex w-4/5 mx-auto items-center gap-2 overflow-hidden rounded-md py-2 px-2 text-base font-normal hover:bg-accent hover:text-[#6B0B00] text-white',
                        path === item.href ? 'bg-white text-[#6B0B00] font-semibold' : 'transparent',
                        item.disabled && 'cursor-not-allowed opacity-80'
                      )}
                      onClick={() => {
                        if (setOpen) setOpen(false);
                      }}
                    >
                      <Icon className={`ml-3 size-5`} />

                      {isMobileNav || (!isMinimized && !isMobileNav) ? (
                        <span className="mr-2 truncate">{item.title}</span>
                      ) : (
                        ''
                      )}
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent
                    align="center"
                    side="right"
                    sideOffset={8}
                    className={!isMinimized ? 'hidden' : 'inline-block'}
                  >
                    {item.title}
                  </TooltipContent>
                </Tooltip>
              )
            );
          })}
        </div>
        <div className="grid items-start gap-2 mt-auto">
          {lastTwoItems.map((item, index) => {
            const Icon = Icons[item.icon || 'arrowRight'];
            return (
              item.href && (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.disabled ? '/' : item.href}
                      className={cn(
                        'flex w-4/5 mx-auto items-center gap-2 overflow-hidden rounded-md py-2 px-2 text-base font-normal hover:bg-accent hover:text-[#6B0B00] text-white',
                        path === item.href ? 'bg-white text-[#6B0B00] font-semibold' : 'transparent',
                        item.disabled && 'cursor-not-allowed opacity-80'
                      )}
                      onClick={() => {
                        if (setOpen) setOpen(false);
                      }}
                    >
                      <Icon className={`ml-3 size-5`} />

                      {isMobileNav || (!isMinimized && !isMobileNav) ? (
                        <span className="mr-2 truncate">{item.title}</span>
                      ) : (
                        ''
                      )}
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent
                    align="center"
                    side="right"
                    sideOffset={8}
                    className={!isMinimized ? 'hidden' : 'inline-block'}
                  >
                    {item.title}
                  </TooltipContent>
                </Tooltip>
              )
            );
          })}
        </div>
        </div>
      </TooltipProvider>
    </nav>
  );
}
