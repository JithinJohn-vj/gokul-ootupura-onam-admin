"use client"
import React, { useEffect, useState } from 'react';
import { Button } from '../../../../../components/ui/button';
import { Breadcrumbs } from '@/components/breadcrumbs';
import RightSection from '@/components/ui/rightsection';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from '../../../../../components/ui/card'; // Adjust the path as per your project structure

// Define the type for breadcrumb items
interface BreadcrumbItem {
  title: string;
  link: string;
}

// Adjust the breadcrumb items array
const breadcrumbItems: BreadcrumbItem[] = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Order Management', link: '/dashboard/ordermanagement' },
  { title: 'Order Details', link: '/dashboard/ordermanagement/orderdetails' }
];

// Define the type for order details
interface OrderDetails {
  orderNumber: string;
  customerName: string;
  dateTime: string;
  itemsCount: string;
  tableNumber: string;
  amount: string;
  statusImage: string;
  phoneNumber: string;
  item: string;
  itemImage: string;
  quantity: string;
  price: string;
  paymentType: string;
}

const OrderDetailsPage = () => {
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  const [showAddItemForm, setShowAddItemForm] = useState(false);
  const [showEditItemForm, setShowEditItemForm] = useState(false);
  const [editedItem, setEditedItem] = useState({ dishName: '', quantity: 1, price: '' });

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const orderNumber = queryParams.get('orderNumber') || '';
    const customerName = queryParams.get('customerName') || '';
    const dateTime = queryParams.get('dateTime') || '';
    const itemsCount = queryParams.get('itemsCount') || '';
    const tableNumber = queryParams.get('tableNumber') || '';
    const amount = queryParams.get('amount') || '';
    const statusImage = queryParams.get('statusImage') || '';
    const phoneNumber = queryParams.get('phoneNumber') || '';
    const item = queryParams.get('item') || '';
    const itemImage = queryParams.get('itemImage') || '';
    const quantity = queryParams.get('quantity') || '';
    const price = queryParams.get('price') || '';
    const paymentType = queryParams.get('paymentType') || '';

    setOrderDetails({
      orderNumber,
      customerName,
      dateTime,
      itemsCount,
      tableNumber,
      amount,
      statusImage,
      phoneNumber,
      item,
      itemImage,
      quantity,
      price,
      paymentType
    });
  }, []);

  const handleAddItemClick = () => {
    setShowAddItemForm(true);
  };

  const handleEditItemClick = () => {
    setShowEditItemForm(true);
    setEditedItem({
      dishName: orderDetails?.item || '',
      quantity: orderDetails?.quantity || '',
      price: orderDetails?.price || ''
    });
  };

  const handleCancelAddItem = () => {
    setShowAddItemForm(false);
  };

  const handleCancelEditItem = () => {
    setShowEditItemForm(false);
  };

  const handleSaveItem = () => {
    console.log('New Item:', editedItem);
    setShowAddItemForm(false);
    setShowEditItemForm(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedItem((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  if (!orderDetails) {
    return <div>Loading...</div>;
  }

  const formatDate = (dateTime: string) => {
    const dateObj = new Date(dateTime);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return dateObj.toLocaleDateString('en-US', options);
  };

  const formatTime = (dateTime: string) => {
    const dateObj = new Date(dateTime);
    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    return dateObj.toLocaleTimeString('en-US', options);
  };

  return (
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
        <div className="flex items-center mb-2">
          <div>
            <p className="mb-2 text-3xl">Order ID #{orderDetails.orderNumber}</p>
          </div>
          <div className="ml-6 mt-[-10px]">
            <img src={orderDetails.statusImage} alt="Status" className="inline w-30 h-30px" />
          </div>
        </div>
        <h2 className='mt-4'>Order Details</h2>
        <div className="flex justify-between gap-4">
          <div className='w-[700px]'>
            <table className="min-w-full bg-white border-none">
              <thead className='text-xs'>
                <tr className='bg-gray-100 text-gray-500'>
                  <th className="border-b border-r px-4 py-2">Item</th>
                  <th className="border-b border-r px-4 py-2">Quantity</th>
                  <th className="border-b border-r px-4 py-2">Price</th>
                  <th className="border-b border-r px-4 py-2">Amount</th>
                  <th className="border-b px-4 py-2"></th>
                </tr>
              </thead>
              <tbody>
                <tr key={orderDetails.orderNumber} className='bg-gray-100 text-gray-500'>
                  <td className="border-r px-4 py-2 flex items-center">
                    <img src={orderDetails.itemImage} alt="Item Image" className="w-12 h-12 mr-2" />
                    {orderDetails.item}
                  </td>
                  <td className="border-r px-4 py-2">{orderDetails.quantity}</td>
                  <td className="border-r px-4 py-2">{orderDetails.price}</td>
                  <td className="border-r px-4 py-2">{orderDetails.amount}</td>
                  <td className="px-6 py-2 space-x-2">
                    <Button variant="secondary" className='bg-transparent' onClick={handleEditItemClick}>
                      <img src="/images/ordermanagement/edit.svg" alt="Edit" className="w-4 h-4 mr-2" />
                    </Button>
                    <Button variant="secondary" className='bg-transparent'>
                      <img src="/images/ordermanagement/delete.svg" alt="Delete" className="w-4 h-4 mr-2" />
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className='flex justify-end mt-4'>
              <Button className='bg-white text-red-800 h-10 ' onClick={handleAddItemClick}>
                <img src="/images/ordermanagement/additem.svg" alt="Add Item" className="w-4 h-4 mr-2" />Add Item
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <Card className='w-[350px]'>
              <CardHeader>
                <CardTitle className='text-xl'>Customer Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-x-2 text-xs">
                  <p className="mb-2">Customer Name</p>
                  <p className="mb-2">{orderDetails.customerName}</p>
                  <p className="mb-2">Payment Type</p>
                  <p className="mb-2">{orderDetails.paymentType}</p>
                  <p className="mb-2">Phone Number</p>
                  <p className="mb-2">{orderDetails.phoneNumber}</p>
                </div>
              </CardContent>
            </Card>
            <Card className='w-[350px]'>
              <CardHeader>
                <CardTitle className='text-xl'>Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-x-2 text-xs">
                  <p className="mb-2">Created Date</p>
                  <p className="mb-2">{formatDate(orderDetails.dateTime)}</p>
                  <p className="mb-2">Order Time</p>
                  <p className="mb-2">{formatTime(orderDetails.dateTime)}</p>
                  <p className="mb-2">Sub Total</p>
                  <p className="mb-2">{orderDetails.amount}</p>
                  <p className="mb-2">Total</p>
                  <p className="mb-2">{orderDetails.amount}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      {showAddItemForm && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg w-[650px]">
            <h3 className="text-lg font-bold mb-4">Add New Item</h3>
            <div className="flex space-x-4">
              <div className="mb-4 flex-1">
                <label htmlFor="dishName" className="block text-sm font-medium text-gray-700">
                  Dish Name
                </label>
                <input
                  type="text"
                  id="dishName"
                  name="dishName"
                  value={editedItem.dishName}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-30 border rounded-md"
                />
              </div>
              <div className="mb-4 flex-1">
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                  Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={editedItem.quantity}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-30 border rounded-md"
                  min="1"
                />
              </div>
              <div className="mb-4 flex-1">
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={editedItem.price}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-30 border rounded-md"
                  min="0"
                  step="0.01"
                />
              </div>
            </div>
            <div className="flex justify-end space-x-2">
              <Button variant="secondary" onClick={handleCancelAddItem}>
                Cancel
              </Button>
              <Button onClick={handleSaveItem} className='bg-red-800'>Save</Button>
            </div>
          </div>
        </div>
      )}
      {showEditItemForm && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg w-[650px]">
            <h3 className="text-lg font-bold mb-4">Edit & Update</h3>
            <div className="mb-4 flex-1">
                <label htmlFor="dishName" className="block text-sm font-medium text-gray-700">
                  Order Name
                </label>
                <input
                  type="text"
                  id="dishName"
                  name="dishName"
                  value={editedItem.dishName}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-[615px] border rounded-md"
                />
              </div>
            <div className="flex space-x-4">
              
              <div className="mb-4 flex-1">
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                  Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={editedItem.quantity}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-[300px] border rounded-md"
                  min="1"
                />
              </div>
              <div className="mb-4 flex-1">
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={editedItem.price}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-[300px] border rounded-md"
                  min="0"
                  step="0.01"
                />
              </div>
            </div>
            <div className="flex justify-end space-x-2">
              <Button variant="secondary" onClick={handleCancelEditItem}>
                Cancel
              </Button>
              <Button onClick={handleSaveItem} className='bg-red-800'>Save</Button>
            </div>
          </div>
        </div>
      )}
    </ScrollArea>
  );
};

export default OrderDetailsPage;
