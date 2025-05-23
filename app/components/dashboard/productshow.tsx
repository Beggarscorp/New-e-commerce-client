'use client';
const productShow = ({ products }: { products: any[] }) => {

    const editproduct = () => {
        alert('Edit product');
    };

    const deleteproduct = () => {
        alert('Delete product');
    };

    const headtdClasses = 'font-bold text-nowrap border-1 px-2 py-1 text-md';
    const bodytdclasses = 'border-1 px-2 py-1 text-sm';

    return (
        <div >
        <div className="text-3xl pb-5">All Products</div>
        <table>
            <thead>
                <tr>
                    <td className={headtdClasses}>Product Image</td>
                    <td className={headtdClasses}>Product Name</td>
                    <td className={headtdClasses}>Short Description</td>
                    <td className={headtdClasses}>Size & fit</td>
                    <td className={headtdClasses}>Material and care</td>
                    <td className={headtdClasses}>Spacification</td>
                    <td className={headtdClasses}>Product color</td>
                    <td className={headtdClasses}>Price</td>
                    <td className={headtdClasses}>Category</td>
                    <td className={headtdClasses}>In stock</td>
                    <td className={headtdClasses}>Min order quantity</td>
                    <td className={headtdClasses}>Actions</td>
                </tr>
            </thead>
            <tbody>
                {Array.isArray(products) && products.length > 0 ? (
                    products.map((product: any) => (
                        <tr key={product._id}>
                            <td className={bodytdclasses}><img src={product.productimage} alt="" /></td>
                            <td className={bodytdclasses}>{product.productname}</td>
                            <td className={bodytdclasses}>{product.shortdescription}</td>
                            <td className={bodytdclasses}>{product.sizeandfit}</td>
                            <td className={bodytdclasses}>{product.materialandcare}</td>
                            <td className={bodytdclasses}>{product.spacification}</td>
                            <td className={bodytdclasses}>{product.productcolor}</td>
                            <td className={bodytdclasses}>{product.price}</td>
                            <td className={bodytdclasses}>{product.category}</td>
                            <td className={bodytdclasses}>{product.stock}</td>
                            <td className={bodytdclasses}>{product.minorderquantity}</td>
                            <td className={bodytdclasses}>
                                <button onClick={editproduct} className='my-1 bg-green-600 px-2 rounded'>Edit</button>
                                <button onClick={deleteproduct} className='my-1 bg-red-600 px-2 rounded'>Delete</button>
                            </td>
                        </tr>
                    ))
                    ) : (
                        <p>No products found.</p>
                )}
            </tbody>
        </table>
    </div>
    );
    }
export default productShow;