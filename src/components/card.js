import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';

const Card = () => {

    const [datas, setDatas] = useState([]);
    const getDatas = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        setDatas(await response.json());

    }
    useEffect(() => {
        getDatas();
    }, []);

    
    return (

        datas.map((currElem) => {
            return (
                <div class="bg-white">

                    <div class=" border-gray-400 text-base capitalize w-28 bg-[#f76c6c] flex justify-center text-white" >
                        <p >{currElem.category}</p>
                    </div>

                    <div class="flex-row text-center p-3">

                        <div class="flex justify-center p-3 ">
                            <NavLink to="/product"><img class="w-42 h-32 hover:scale-105 cursor-pointer" src={currElem.image} alt="shirt" /></NavLink>
                        </div>


                        <p class="font-medium truncate text-[#1f2833] cursor-pointer">{currElem.title}</p>

                        <div class="flex justify-center mt-4">
                            <p class="w-20 bg-[#f8e9a1] p-1 rounded-2xl hover:bg-[#a8d0a6] cursor-pointer">{currElem.price}</p>
                        </div>

                    </div>
                </div>)
        })

    )
}

export default Card;
