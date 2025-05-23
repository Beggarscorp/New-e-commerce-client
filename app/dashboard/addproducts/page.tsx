'use client'
import React from 'react';
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const addproducts = () => {

    const [FormData, setFormData] = useState({
        productname: "",
        shortdescription: "",
        sizeandfit: "",
        materialandcare: "",
        spacification: "",
        productcolor: "",
        price: "",
        category: "",
        stock: "",
        minorderquantity: "",
        productimage: "",
        productgalleryimage: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...FormData, [name]: value });
    };
    const formsubmit = async () => {

        try{
            const dataSend = await fetch("http://localhost:5000/api/addproducts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },  
                body: JSON.stringify(FormData),
            })
            .then((response) => {
                console.log(response);
                if (response.ok) {
                    console.log("Product added successfully");
                } else {
                    console.error("Error adding product");
                }
            })

        }
        catch(err){
            console.log(err);
        }
        console.log("Form submitted");
    }

    const inputfieldclasses = "focus:outline-0 outline-0 w-full border-2 border-gray-300 rounded p-2 mt-2";

    return (
        <>
            <div className="text-2xl mb-5">Add Products</div>

            <div className="w-full sm:w-8/12 md:w-8/12 bg-danger mb-5">
                <label htmlFor="productname">Product name:</label>
                <input onChange={handleChange} type="text" name="productname" placeholder="Enter product name" className={inputfieldclasses} />
            </div>
            
            <div className="w-full sm:w-8/12 md:w-8/12 bg-danger mb-5">
                <label htmlFor="shortdescription">Short Description:</label>
                <textarea   name="shortdescription" placeholder="Enter product short description" className={inputfieldclasses} />
            </div>
            
            <div className="w-full sm:w-8/12 md:w-8/12 bg-danger mb-5">
                <label htmlFor="sizeandfit">Size & Fit:</label>
                <textarea name="sizeandfit" placeholder="Enter size and fit of product" className={inputfieldclasses} />
            </div>
            
            <div className="w-full sm:w-8/12 md:w-8/12 bg-danger mb-5">
                <label htmlFor="materialandcare">Material & Care:</label>
                <textarea name="materialandcare" placeholder="Enter material and care of product" className={inputfieldclasses} />
            </div>
            
            <div className="w-full sm:w-8/12 md:w-8/12 bg-danger mb-5">
                <label htmlFor="spacification">Spacification:</label>
                <textarea name="spacification" placeholder="Enter spacification of product" className={inputfieldclasses} />
            </div>

            <div className="w-full sm:w-8/12 md:w-8/12 bg-danger mb-5">
                <label htmlFor="productcolor">Product color:</label>
                <input type="text" name="productcolor" placeholder="Enter product color" className={inputfieldclasses} />
            </div>

            <div className="w-full sm:w-8/12 md:w-8/12 bg-danger mb-5">
                <label htmlFor="price">Price:</label>
                <input type="number" name="price" placeholder="Enter product price" className={inputfieldclasses} />
            </div>

            <div className="w-full sm:w-8/12 md:w-8/12 bg-danger mb-5">
                <label htmlFor="category">Category:</label>
                <input type="text" name="category" placeholder="Enter product category" className={inputfieldclasses} />
            </div>

            <div className="w-full sm:w-8/12 md:w-8/12 bg-danger mb-5">
                <label htmlFor="stock">Stock:</label>
                <input type="number" name="stock" placeholder="Enter product stock" className={inputfieldclasses} />
            </div>

            <div className="w-full sm:w-8/12 md:w-8/12 bg-danger mb-5">
                <label htmlFor="minorderquantity">Min order quantity:</label>
                <input type="number" name="minorderquantity" placeholder="Enter min order quantity of product" className={inputfieldclasses} />
            </div>

            <div className="w-full sm:w-8/12 md:w-8/12 bg-danger mb-5">
                <label htmlFor="productimage">Product Image:</label>
                <input type="file" name="productimage" className={inputfieldclasses} />
            </div>

            <div className="w-full sm:w-8/12 md:w-8/12 bg-danger mb-5">
                <label htmlFor="productgalleryimage">Product Gallery Image:</label>
                <input type="file" name="productgalleryimage" multiple className={inputfieldclasses} />
            </div>
            
            <button onClick={formsubmit} className="bg-gray-800 px-5 py-1 rounded-2xl flex items-center">Upload Product <FaArrowRight className="mx-2"/></button>
        </>
        
    ) 
}

export default addproducts;