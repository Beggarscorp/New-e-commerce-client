'use client'
import React from 'react'
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function addcategory(){

    const [FormData, setFormData] = useState({
        categoryname: "",
        slug:"",
        parentcategoryname: "",
        status: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...FormData, [name]: value });
    };
    
    const formsubmit = async () => {
        console.log("Form submitted",FormData);
    }

    const inputfieldclasses = "focus:outline-0 outline-0 w-full border-2 border-gray-300 rounded p-2 mt-2";

    return (
        <>
        <div className="text-2xl mb-5">Add category</div>

        <div className="w-full sm:w-8/12 md:w-8/12 bg-danger mb-5">
            <label htmlFor="categoryname">Category Name:</label>
            <input onChange={handleChange} type="text" name="categoryname" placeholder="Enter category name" className={inputfieldclasses} />
        </div>

        <div className="w-full sm:w-8/12 md:w-8/12 bg-danger mb-5">
            <label htmlFor="parentcategoryname">Parent Category Name:</label>
            <input onChange={handleChange} type="text" name="parentcategoryname" placeholder="Enter parent category name" className={inputfieldclasses} />
        </div>

        <div className="w-full sm:w-8/12 md:w-8/12 bg-danger mb-5">
            <label htmlFor="status">Status:</label>
            <select name="status" onChange={handleChange} className={inputfieldclasses} >
                <option value="">Select status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option> 
            </select>
        </div>

        <button onClick={formsubmit} className="bg-gray-800 px-5 py-1 rounded-2xl flex items-center">Upload Category <FaArrowRight className="mx-2"/></button>
        </>
    )
}