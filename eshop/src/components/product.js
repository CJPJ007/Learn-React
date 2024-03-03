import React from "react";

function Product({id,title,price,rating,imgLink}){
    
    return (
        <div className="bg-white m-4 w-full space-y-4 p-4">
            <div>
                <p>{title}</p>
                <p>{price}</p>
                <div className="flex">
                {
                    Array(rating).fill().map(()=>
                    (<p>⭐️</p>))
                }
                </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
            <img src={imgLink} className="w-20" alt="" />
            <button className="rounded-md bg-orange-400 p-2 text-white">Add to cart</button>
            </div>
        </div>
    );
}

export default Product;