
const admin = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-5">
            <div className="card bg-gray-600 text-center py-3 rounded space-y-3">
                <div className="text-2xl bold">Products</div>
                <div>50</div>
            </div>
            <div className="card bg-gray-600 text-center py-3 rounded space-y-3">
                <div className="text-2xl bold">Categories</div>
                <div>50</div>
            </div>
            <div className="card bg-gray-600 text-center py-3 rounded space-y-3">
                <div className="text-2xl bold">Orders</div>
                <div>50</div>
            </div>
        </div>
    )
}

export default admin;