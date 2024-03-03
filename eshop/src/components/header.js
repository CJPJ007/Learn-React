import React from "react";
import "./../index.css";
import StoreIcon from '@mui/icons-material/Store';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';


function Header() {
        return (
        <div className="flex z-1 items-center bg-black text-white space-x-4 justify-center p-2 w-full">
        <div className="flex items-center space-x-2">
          <StoreIcon fontSize="small"/>
          <h2 className="font-bold">eShop</h2>
        </div>
        <div className="flex items-center w-3/4 justify-center">
        <input type="text" className="w-full h-6" />
        <div className="bg-orange-400 h-6 flex p-1 items-center justify-center text-black">
        <SearchIcon fontSize="small" />
        </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex flex-col">
            <span className="text-[0.5rem]">Hello Guest</span>
            <span className="text-xs font-bold">Sign In</span>
          </div>

          <div className="flex flex-col">
            <span className="text-[0.5rem]">Your</span>
            <span className="text-xs font-bold">Shop</span>
          </div>

          <div className="space-x-3 flex items-center">
            <ShoppingBasketIcon fontSize="small"/>
            <span className="text-xs font-bold">0</span>
          </div>
        </div>
      </div>);    
}

export default Header;