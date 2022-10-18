import React from "react";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
const Header1 = () => {
    return (
        <>
            <div class=" bg-gray-400 px-5 py-2">
                <div class="flex justify-between items-center">
                    <div class="flex gap-5 items-center font-bold">
                        <img class="w-10" src="./menu.png" alt="menu" />
                        <p>Shop by Department</p>
                    </div>
                    <div class="flex gap-12">
                        <div>
                            <p class="cursor-pointer">Home <ArrowDropDownIcon/></p>
                        </div>
                        <div>
                            <p class="cursor-pointer">Shop <ArrowDropDownIcon/></p>
                        </div>
                        <div>
                            <p class="cursor-pointer">Pages <ArrowDropDownIcon/></p>
                        </div>
                        <div>
                            <p class="cursor-pointer">Blogs <ArrowDropDownIcon/></p>
                        </div>
                    </div>

                    <div class="p-2 border-l-2 border-r-2">
                        <p>Track your order</p>
                    </div>
                </div>
            </div>
            <hr/>
        </>
    )
}

export default Header1;