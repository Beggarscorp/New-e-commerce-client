import Link from "next/link";

const sidebar = () => {
    return (
        <>
        <div className="bg-gray-800 h-screen p-3 w-full">
            <div className="text-2xl pb-4">Dashboard</div>
            <div className="links space-y-4 p-3">
                <div className="bg-gray-700 text-center py-1 rounded hover:bg-gray-900 transition duration-500 font-bold">
                    <Link href="/dashboard/admin">Admin</Link>
                </div>
                <div className="bg-gray-700 text-center py-1 rounded hover:bg-gray-900 transition duration-500 font-bold ">
                    <Link href="/dashboard/addproducts">Add Products</Link>
                </div>
                <div className="bg-gray-700 text-center py-1 rounded hover:bg-gray-900 transition duration-500 font-bold ">
                    <Link href="/dashboard/addcategory">Add Category</Link>
                </div>
                <div className="bg-gray-700 text-center py-1 rounded hover:bg-gray-900 transition duration-500 font-bold ">
                    <Link href="/dashboard/products">Products</Link>
                </div>
                <div className="bg-gray-700 text-center py-1 rounded hover:bg-gray-900 transition duration-500 font-bold ">
                    <Link href="/dashboard/category">Categories</Link>
                </div>
                <div className="bg-gray-700 text-center py-1 rounded hover:bg-gray-900 transition duration-500 font-bold ">
                    <Link href="/dashboard/orders">Orders</Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default sidebar;