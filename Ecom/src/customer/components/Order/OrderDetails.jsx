import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import OrderTraker from "./OrderTracker";
import AddressCard from "../AddressCard/AddressCard";

import { deepPurple } from "@mui/material/colors";

const OrderDetails = () => {
  return (
    <>
      <div className=" px-2 lg:px-36 space-y-7 ">
        <Grid container className="p-3 shadow-lg">
          <Grid xs={12}>
            <p className="font-bold text-lg py-2">Delivery Address</p>
          </Grid>
          <Grid item xs={6}>
            <AddressCard
              address={{
                firstName: "Virender",
                lastName: "Singh",
                streetAddress: "Opp. BOI Bank Mittal Dharma Kanta",
                city: "Tapukara",
                state: "Rajasthan",
                zipCode: "301707",
                mobile: "8955891038",
              }}
            />
          </Grid>
        </Grid>
        <Box className="p-5 shadow-lg border rounded-md">
          <Grid
            container
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Grid item xs={9}>
              <OrderTraker  />
            </Grid>
            <Grid item>
              <Button sx={{ color: "" }} color="error" variant="text">
                RETURN
              </Button>

              <Button sx={{ color: deepPurple[500] }} variant="text">
                cancel order
              </Button>
            </Grid>
          </Grid>
        </Box>

        <Grid container className="space-y-5">
          <Grid
            container
            item
            className="shadow-xl rounded-md p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              {" "}
              <div className="flex  items-center ">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzUTV0u8or53kL0BLfu3GFGhA3T_Fu-YGX7A&usqp=CAU"
                  alt=""
                />
                <div className="ml-5 space-y-2">
                  <p className="">T-Shirt</p>
                  <p className="opacity-50 text-xs font-semibold space-x-5">
                    <span>Color: Yellow</span> <span>Size: XL</span>
                  </p>
                  <p>Seller: ZARA</p>
                  <p>₹ 500 </p>
                </div>
              </div>
            </Grid>
            <Grid item>
              {
                <Box
                  sx={{ color: deepPurple[500] }}
                  className="flex items-center cursor-pointer"
                >
                  <StarIcon
                    sx={{ fontSize: "2rem" }}
                    className="px-2 text-5xl"
                  />
                  <span>Rate & Review Product</span>
                </Box>
              }
            </Grid>
          </Grid>
        </Grid>
      </div>
      {/*  <BackdropComponent open={order.loading} /> */}
    </>
  );
};
// sx={{width:"10px",height:"10px"}}
export default OrderDetails;
