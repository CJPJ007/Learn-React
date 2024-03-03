import React from "react";
import "./../index.css";
import "./home.css";
import Product from "./product";

function Home() {
        return (
        <div className="">
            <div className="">
                <img className="" src="https://www.x-cart.com/img/16591/ecommerce.webp" alt="" />
            </div>
            <div className="bg-gray-200 shadow-md shadow-gray-200">
                <div className="flex justify-center">
                    <Product 
                    id="1234"
                    title="Happilo 100% Natural Premium Whole Cashews, 200 g (Pack of 1)"
                    price="$5"
                    rating={5}
                    imgLink="https://m.media-amazon.com/images/I/71tYPz++3+L._AC_SY240_.jpg"/>
                    <Product id="2345"
                    title="Fur Jaden 55 LTR Rucksack Travel Backpack Bag for Trekking, Hiking with Shoe Compartment"
                    price="$5"
                    rating={4}
                    imgLink="https://m.media-amazon.com/images/I/71o0wxf30cL._SX679_.jpg"/>
                </div>
                <div className="flex">
                    <Product 
                    id="3456"
                    title="iQOO Z7 Pro 5G (Blue Lagoon, 8GB RAM, 256GB Storage) | 3D Curved AMOLED Display | 4nm MediaTek Dimesity 7200 5G Processor | 64MP Aura Light OIS Camera | Segment's Slimmest & Lightest Smartphone"
                    price="$5"
                    rating={3}
                    imgLink="https://m.media-amazon.com/images/I/61Id6WJDWqL._SX679_.jpg"/>
                    <Product 
                    id="4567"
                    title="Imagimake Mapology India with State Capitals | Educational Toy for Boys and Girls | India Map Puzzle | Jigsaw Puzzle, 25 Pieces |Gift for Kids Age 5,6,7,8,9"
                    price="$5"
                    rating={2}
                    imgLink="https://m.media-amazon.com/images/I/41ZNfT1BWuL._SX300_SY300_QL70_FMwebp_.jpg"/>
                    <Product id="5678"
                    title="LOUIS STITCH Men's Italian Leather Shoes Handmade Formal Lace Up Derbies for Men (RXPL)"
                    price="$5"
                    rating={4}
                    imgLink="https://m.media-amazon.com/images/I/51JvRantIwL._SY695_.jpg"/>
                </div>
                <div className="flex w-full">
                    <Product id="7890"
                    title="Bella Vita Luxury CEO MAN Eau De Parfum Perfume for Men with Lemon, Lavender, Tonka & Agarwood|Woody & Spicy Long Lasting EDP Fragrance Scent, 100 Ml"
                    price="$5"
                    rating={1}
                    imgLink="https://m.media-amazon.com/images/I/51nnZFs5mOL._SX679_.jpg"/>
                </div>
            </div>
      </div>);    
}

export default Home;