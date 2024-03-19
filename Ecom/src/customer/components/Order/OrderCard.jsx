import { Box, Grid, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import AdjustIcon from "@mui/icons-material/Adjust";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
  const navigate = useNavigate();

  return (
    <Box onClick={(e)=> navigate(`/account/order/${4}`)} className="p-5 shadow-lg hover:shadow-2xl border ">
      <Grid spacing={2} container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzUTV0u8or53kL0BLfu3GFGhA3T_Fu-YGX7A&usqp=CAU"
              alt=""
            />
            <div className="ml-5">
              <p className="mb-2">
                T-Shirt
                <p className="opacity-50 text-xs font-semibold space-x-5">
                  <span>ZARA</span>
                </p>
              </p>

              <p className="opacity-50 text-xs font-semibold space-x-5">
                <span>Size: XL</span>
                <span>Color: Yellow</span>
              </p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>₹ 500</p>
        </Grid>
        <Grid item xs={4}>
          <p className="space-y-2 font-semibold">
            <>
              <FiberManualRecordIcon
                sx={{ width: "15px", height: "15px" }}
                className="text-green-600 p-0 mr-2 text-sm"
              />
              <span>Delivered On Mar 03</span>
            </>

            <>
              <AdjustIcon
                sx={{ width: "15px", height: "15px" }}
                className="text-green-600 p-0 mr-2 text-sm"
              />
              <span>Expected Delivery On Mar 03</span>
            </>
          </p>
          <p className="text-xs">Your Item Has Been Delivered</p>
          <div className="flex items-center text-blue-600 cursor-pointer">
            <StarIcon sx={{ fontSize: "2rem" }} className="px-2 text-5xl" />
            <span>Rate & Review Product</span>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OrderCard;
