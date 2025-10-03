import MyAccountSideBar from '../component/MyAccountSideBar';
import { FaChevronDown } from 'react-icons/fa';
import OrderStatus from '../component/OrderStatus';
import useHandleAccordion from '../hooks/useHandleAccordion';

const Order = () => {
  const orders = [
    {
      orderId: "ORD12345",
      paymentId: "PAY67890",
      products: "Shoes, T-Shirt",
      name: "John Doe",
      phone: "9876543210",
      address: "123, Main Street, Delhi",
      pincode: "110011",
      email: "john@example.com",
      userId: "USR1001",
      status: "pending",
      date: "2025-09-30",
    },
    {
      orderId: "ORD54321",
      paymentId: "PAY98765",
      products: "Watch, Bag",
      name: "Jane Smith",
      phone: "9876501234",
      address: "456, Park Avenue, Mumbai",
      pincode: "400001",
      email: "jane@example.com",
      userId: "USR1002",
      status: "completed",
      date: "2025-09-28",
    }
  ];

  const { index, handelAccordion } = useHandleAccordion();

  return (
    <section className="py-10 w-full bg-gray-50">
      <div className="container flex gap-6">
        {/* Sidebar */}
        <MyAccountSideBar />

        {/* Orders Table */}
       <div className="overflow-x-auto max-h-[500px] rounded-lg scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
  <table className="min-w-full text-sm text-left border-collapse">
    {/* Table Head */}
    <thead className="bg-gray-100 text-gray-700 uppercase text-xs tracking-wider sticky top-0 z-10">
      <tr>
        <th className="p-3"></th>
        <th className="p-3">Order ID</th>
        <th className="p-3">Payment Id</th>
        <th className="p-3">Products</th>
        <th className="p-3">Name</th>
        <th className="p-3">Phone</th>
        <th className="p-3">Address</th>
        <th className="p-3 text-center">Pincode</th>
        <th className="p-3">Email</th>
        <th className="p-3 text-center">User Id</th>
        <th className="p-3 text-center">Status</th>
        <th className="p-3">Date</th>
      </tr>
    </thead>

    {/* Table Body */}
    <tbody className="divide-y divide-gray-100">
      {orders.map((item, clickIndex) => (
        <>
          <tr key={clickIndex} className="hover:bg-gray-50 transition">
            <td className="p-3">
              <button
                onClick={() => handelAccordion(clickIndex)}
                className={`p-2 rounded-full hover:bg-gray-200 transition ${
                  clickIndex === index ? "rotate-180" : ""
                }`}
              >
                <FaChevronDown className="text-gray-600 text-sm transition-transform" />
              </button>
            </td>
            <td className="p-3">{item.orderId}</td>
            <td className="p-3">{item.paymentId}</td>
            <td className="p-3 whitespace-nowrap">{item.products}</td>
            <td className="p-3 whitespace-nowrap">{item.name}</td>
            <td className="p-3">{item.phone}</td>
            <td className="p-3 whitespace-nowrap">{item.address}</td>
            <td className="p-3 text-center">{item.pincode}</td>
            <td className="p-3">{item.email}</td>
            <td className="p-3 text-center">{item.userId}</td>
            <td className="p-3 text-center">
              <OrderStatus status={item.status} />
            </td>
            <td className="p-3 whitespace-nowrap">{item.date}</td>
          </tr>

          {/* Accordion Content */}
          {clickIndex === index && (
            <tr className="bg-gray-50">
              <td></td>
              <td colSpan={11} className="p-4">
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4">
                  <h3 className="font-medium text-gray-700 mb-3">
                    Product Details
                  </h3>
                  <table className="w-full text-sm">
                    <thead className="bg-gray-100 text-gray-600 text-xs uppercase">
                      <tr>
                        <th className="p-2">Product Id</th>
                        <th className="p-2">Title</th>
                        <th className="p-2">Image</th>
                        <th className="p-2">Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2">PRD001</td>
                        <td className="p-2">Shoes</td>
                        <td className="p-2">
                          <img
                            src="https://via.placeholder.com/40"
                            alt="product"
                            className="w-10 h-10 rounded object-cover"
                          />
                        </td>
                        <td className="p-2">1</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>
          )}
        </>
      ))}
    </tbody>
  </table>
</div>

      </div>
    </section>
  );
};

export default Order;
