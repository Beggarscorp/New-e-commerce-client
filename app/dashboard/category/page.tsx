
export default function products() {

    return (
        <>
        <div className="text-2xl mb-3">Category</div>

        <table className="w-full border-2 border-gray-300">
            <thead className="bg-gray-800 font-semibold">
                <tr>
                    <td className="py-2 text-center border-1">Category name</td>
                    <td className="py-2 text-center border-1">Category slug</td>
                    <td className="py-2 text-center border-1">Parent category</td>
                    <td className="py-2 text-center border-1">Create date</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="py-2 text-center border-1">Patchwork saree</td>
                    <td className="py-2 text-center border-1">patchwork-saree</td>
                    <td className="py-2 text-center border-1">Patchwork</td>
                    <td className="py-2 text-center border-1">5-20-2025</td>
                </tr>
            </tbody>
        </table>

        </>
    )
}