'use client';

import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import { cn } from '@/lib/utils';

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      'peer inline-flex h-[20px] w-[36px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        'pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0'
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };

interface AvailabilitySwitchProps {
  isUnavailable: boolean;
  setIsUnavailable: (value: boolean) => void;
}

const AvailabilitySwitch: React.FC<AvailabilitySwitchProps> = ({ isUnavailable, setIsUnavailable }) => {
  // Retrieve the initial state from localStorage
  React.useEffect(() => {
    const savedState = localStorage.getItem('isUnavailable');
    if (savedState !== null) {
      setIsUnavailable(JSON.parse(savedState));
    }
  }, [setIsUnavailable]);

  // Save the state to localStorage when it changes
  const handleCheckedChange = (value: boolean) => {
    setIsUnavailable(value);
    localStorage.setItem('isUnavailable', JSON.stringify(value));
  };

  return (
    <div className="flex justify-between">
      <div className="flex items-start">
        <img
          src={isUnavailable ? "/images/menu/notavailable.png" : "/images/menu/available.svg"}
          alt={isUnavailable ? "Unavailable Icon" : "Availability Icon"}
          className="w-6 h-6 mr-2 mt-2"
        />
        <div>
          <p className="text-gray-700">{isUnavailable ? 'Currently Unavailable' : 'Available'}</p>
          <p className="text-gray-500 text-xs">
            {isUnavailable
              ? 'This item is currently unavailable for viewing or ordering.'
              : 'Customer can view and order this item during store hours.'}
          </p>
        </div>
      </div>
      <div className="ml-4 flex items-center">
        <Switch 
          id="unavailable-switch" 
          checked={isUnavailable} 
          onCheckedChange={handleCheckedChange} 
        />
        <label htmlFor="unavailable-switch" className="ml-2 text-gray-700">
          {isUnavailable ? 'Mark as available today' : 'Mark as unavailable today'}
        </label>
      </div>
    </div>
  );
};

export default AvailabilitySwitch;
