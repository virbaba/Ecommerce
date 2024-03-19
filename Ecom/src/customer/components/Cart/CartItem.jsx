import React from "react";
import { Button } from "@mui/material";
import { IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

function CartItem() {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] ">
          <img
            className="w-full h-full object-cover object-top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzUTV0u8or53kL0BLfu3GFGhA3T_Fu-YGX7A&usqp=CAU"
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">RRR</p>
          <p className="opacity-70">Size: XL Yellow</p>
          <p className="opacity-70 mt-2">Seller: ZARA</p>
          <div className="flex space-x-2 items-center pt-3">
            <p className="opacity-50 line-through">₹ 500</p>
            <p className="font-semibold text-lg">₹ 300</p>
            <p className="text-green-600 font-semibold">60% off</p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2 ">
          <IconButton
            disabled="false"
            sx={{ color: "#9155fd" }}
            aria-label="add an alarm"
          >
            <RemoveCircleOutlineIcon />
          </IconButton>

          <span className="py-1 px-7 border rounded-sm">1</span>
          <IconButton sx={{ color: "#9155fd" }} aria-label="add an alarm">
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div className="flex text-sm lg:text-base mt-5 lg:mt-0">
          <Button variant="text" sx={{ color: "#9155fd" }}>
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CartItem