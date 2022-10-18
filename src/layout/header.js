import React from "react";
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <>
            <div class="bg-[#a8d0a6] p-5">
                <div class="flex justify-between items-center">
                    <div>
                      <NavLink to="/home">  <img class="w-24" src="./logo.png" alt="logo"/></NavLink>
                    </div>
                    <div class="flex">
                        <div class="py-5">
                            <select class="p-2  border-r-2">
                                <option>All</option>
                                <option>Men's Fashion</option>
                                <option>Women's Fashion</option>
                                <option>Kid's Fashion</option>
                            </select>
                        </div>
                        <div class="py-5 w-80">
                            <input class="p-2 w-80 " type="text" placeholder="I'm looking for..." ></input>
                        </div>
                        <div class="py-5">
                            <button class="p-2 bg-black text-white hover:bg-red-600">Search</button>
                        </div>

                    </div>
                    <div class="flex gap-4">
                        <div>
                            <img class="w-10" src="./wish.png" alt="wish"/>
                        </div>
                        <div>
                            <img class="w-10" src="./cart.png" alt="cart"/>
                        </div>
                        <div class="flex">
                            <img class="w-10" src="./acc.png" alt="acc"/>
                            <div class="px-2">
                                <p class="cursor-pointer">Login</p>
                                <p class="cursor-pointer">Register</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
        </>
    )
}

export default Header;