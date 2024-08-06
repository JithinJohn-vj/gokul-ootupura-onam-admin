import * as React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { Button } from '../../components/ui/button';
import SearchBox from '@/components/ui/searchandfilter';
import { orders } from '../../constants/orders';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../../components/ui/card';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

const navigationItems = [
  { title: 'All Orders', value: 'all-orders' },
  { title: 'New Orders', value: 'new-orders' },
  { title: 'Delivered', value: 'delivered' },
  { title: 'On Cook', value: 'on-cook' },
  { title: 'Cancelled', value: 'cancelled' }
];

const TabsNavigation = () => {
  const [activeTab, setActiveTab] = React.useState(navigationItems[0].value); 
  const [view, setView] = React.useState('card'); 

  return (
    <Tabs.Root state={activeTab} onStateChange={(newState) => setActiveTab(newState)}>
      <Tabs.List className="flex space-x-4 mb-4">
        {navigationItems.map((item) => (
          <Tabs.Trigger
            key={item.value}
            value={item.value}
            className={`text-gray-500 hover:text-red-700 relative ${activeTab === item.value ? 'border-b-2 border-red-500' : ''}`}
          >
            {item.title}
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      <SearchBox view={view} setView={setView} />
      {view === 'card' && (
        <Tabs.Content value={activeTab} className="p-4">
          <div className="grid grid-cols-3 gap-4">
            {orders
              .filter(order => {
                if (activeTab === 'all-orders') {
                  return true;
                } else {
                  const formattedStatus = order.status.toLowerCase().replace(/\s+/g, '-');
                  return formattedStatus === activeTab;
                }
              })
              .map(order => (
                <Card key={order.orderNumber}>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle className='text-xl'># {order.orderNumber}</CardTitle>
                        <CardDescription className="text-xs">{`${order.dateTime}`}</CardDescription>
                      </div>
                      <div>
                        <img src={order.statusImage} alt={order.status} className="w-15 h-15" />
                      </div>
                    </div>
                  </CardHeader>
                  <Separator />
                  <CardContent>
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center">
                        <img src="/images/ordermanagement/person.svg" alt="Customer" className="w-4 h-4 mr-2" />
                        <div>
                          <p className='text-[12px] text-gray-600'>CUSTOMER NAME</p>
                          <p className='text-[14px]'>{`${order.customerName}`}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <img src="/images/ordermanagement/item.svg" alt="Items" className="w-4 h-4 mr-2" />
                        <div>
                          <p className='text-[12px] text-gray-600'>ITEMS</p>
                          <p className='text-[14px]'>{`${order.itemsCount} items`}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <Separator />
                  <CardContent>
                    <div className="flex justify-between items-center  mt-4">
                      <div className="flex items-center">
                        <img src="/images/ordermanagement/table.svg" alt="Table Details" className="w-4 h-4 mr-2" />
                        <div>
                          <p className='text-[12px] text-gray-600'>TABLE DETAILS</p>
                          <p className='text-[14px]'>{`Table ${order.tableNumber}`}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <img src="/images/ordermanagement/sell.svg" alt="Total" className="w-4 h-4 mr-2" />
                        <div>
                          <p className='text-[12px] text-gray-600'>TOTAL</p>
                          <p className='text-[14px]'>{`₹${order.amount.toFixed(2)}`}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                  <Link
                          href={`/dashboard/ordermanagement/orderdetails?orderNumber=${encodeURIComponent(order.orderNumber)}&customerName=${encodeURIComponent(order.customerName)}&quantity=${encodeURIComponent(order.quantity)}&dateTime=${encodeURIComponent(order.dateTime)}&itemsCount=${encodeURIComponent(order.itemsCount)}&tableNumber=${encodeURIComponent(order.tableNumber)}&amount=${encodeURIComponent(order.amount)}&statusImage=${encodeURIComponent(order.statusImage)}&phoneNumber=${encodeURIComponent(order.phoneNumber)}&paymentType=${encodeURIComponent(order.paymentType)}&price=${encodeURIComponent(order.price)}&item=${encodeURIComponent(order.item)} &itemImage=${encodeURIComponent(order.itemImage)}  `}
                        >
                      <Button variant="secondary" className='h-8 w-[320px] bg-transparent border border-gray-300 mr-2'>
                        View Details
                      </Button>
                    </Link>

                  </CardFooter>
                  <CardFooter>
                    <Button variant="secondary" className='h-8 w-[150px] bg-transparent border border-gray-300 mr-2'>
                      <img src="/images/ordermanagement/print.svg" alt="Total" className="w-4 h-4 mr-2" /> Print
                    </Button>
                    <Button variant="secondary" className='h-8 w-[150px] bg-transparent border border-gray-300'>
                      <img src="/images/ordermanagement/delete.svg" alt="Total" className="w-4 h-4 mr-2" /> Delete
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </Tabs.Content>
      )}

      {/* Render List View */}
      {view === 'list' && (
        <Tabs.Content value={activeTab} className="p-4">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className='text-xs'>
                <tr className="bg-gray-100 text-gray-500">
                  <th className="border px-4 py-2">ORDER ID</th>
                  <th className="border px-4 py-2">CUSTOMER NAME</th>
                  <th className="border px-4 py-2">DATE</th>
                  <th className="border px-4 py-2">ITEMS</th>
                  <th className="border px-4 py-2">TABLE DETAILS</th>
                  <th className="border px-4 py-2">TOTAL</th>
                  <th className="border px-4 py-2">STATUS</th>
                  <th className="border px-4 py-2">ACTIONS</th>
                </tr>
              </thead>
              <tbody className='text-xs'>
                {orders
                  .filter(order => {
                    if (activeTab === 'all-orders') {
                      return true;
                    } else {
                      const formattedStatus = order.status.toLowerCase().replace(/\s+/g, '-');
                      return formattedStatus === activeTab;
                    }
                  })
                  .map(order => (
                    <tr key={order.orderNumber}>
                      <td className="border px-4 py-2">{order.orderNumber}</td>
                      <td className="border px-4 py-2">{order.customerName}</td>
                      <td className="border px-4 py-2">{order.dateTime}</td>
                      <td className="border px-4 py-2">{order.itemsCount} items</td>
                      <td className="border px-4 py-2">{order.tableNumber}</td>
                      <td className="border px-4 py-2">{`₹${order.amount.toFixed(2)}`}</td>
                      <td className="border px-4 py-2">
                        <img src={order.statusImage} alt={order.status} className="w-15 h-15" />
                      </td>
                      <td className="border px-6 py-2 ">
                      <Link
                          href={`/dashboard/ordermanagement/orderdetails?orderNumber=${encodeURIComponent(order.orderNumber)}&customerName=${encodeURIComponent(order.customerName)}&quantity=${encodeURIComponent(order.quantity)}&dateTime=${encodeURIComponent(order.dateTime)}&itemsCount=${encodeURIComponent(order.itemsCount)}&tableNumber=${encodeURIComponent(order.tableNumber)}&amount=${encodeURIComponent(order.amount)}&statusImage=${encodeURIComponent(order.statusImage)}&phoneNumber=${encodeURIComponent(order.phoneNumber)}&paymentType=${encodeURIComponent(order.paymentType)}&price=${encodeURIComponent(order.price)}&item=${encodeURIComponent(order.item)} &itemImage=${encodeURIComponent(order.itemImage)}  `}
                        >
                          <Button variant="secondary" className='bg-transparent mr-2'>
                          <img src="/images/ordermanagement/visibility.svg" alt="Total" className="w-4 h-4 mr-2" />
                          </Button>
                        </Link>

                        <Button variant="secondary" className="bg-transparent ">
                          <img src="/images/ordermanagement/edit.svg" alt="Total" className="w-4 h-4 mr-2" />
                        </Button>
                        <Button variant="secondary" className=" bg-transparent">
                          <img src="/images/ordermanagement/delete.svg" alt="Total" className="w-4 h-4 mr-2" />
                        </Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </Tabs.Content>
      )}
    </Tabs.Root>
  );
};

export default TabsNavigation;
