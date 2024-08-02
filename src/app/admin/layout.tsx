import type { Metadata } from "next";
import { FaChartBar, FaBox, FaListAlt, FaBlogger, FaUser } from 'react-icons/fa';
import Link from 'next/link';


export const metadata: Metadata = {
  title: "Store Admin Dashboard",
  description: "Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
    <aside className="bg-gray-900 text-white w-full lg:w-1/4 xl:w-1/5 p-4">
      <nav className="space-y-2">
        <Link className="flex items-center p-2 hover:bg-gray-700" href="/admin/dashboard">
            <FaChartBar className="mr-2" /> Dashboard
        </Link>
        <div className="group">
          <button className="w-full flex items-center p-2 hover:bg-gray-700">
            <FaBox className="mr-2" /> Products
          </button>
          <div className="hidden group-hover:block pl-6">
            <Link className="block p-2 hover:bg-gray-700" href="/admin/products/list">
              Product List
            </Link>
            <Link className="block p-2 hover:bg-gray-700" href="/admin/products/add">
             Add Product
            </Link>
          </div>
        </div>
        <div className="group">
          <button className="w-full flex items-center p-2 hover:bg-gray-700">
            <FaBlogger className="mr-2" /> Blog
          </button>
          <div className="hidden group-hover:block pl-6">
            <Link className="block p-2 hover:bg-gray-700" href="/admin/blog/list">
              Blog List
            </Link>
            <Link className="block p-2 hover:bg-gray-700" href="/admin/blog/add">
              Add Blog
            </Link>
          </div>
        </div>
        <Link className="flex items-center p-2 hover:bg-gray-700" href="/admin/orders">
            <FaListAlt className="mr-2" /> Order List
        </Link>
        <Link className="flex items-center p-2 hover:bg-gray-700"  href="/admin/profile">
            <FaUser className="mr-2" /> Profile
        </Link>
      </nav>
    </aside>
    <main className="flex-1 p-4">
      {children}
    </main>
  </div>
  );
}
