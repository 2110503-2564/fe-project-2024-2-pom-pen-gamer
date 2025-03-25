"use client"

import { AppDispatch, useAppSelector } from "@/redux/store";
import { BookingItem } from "../../interface";
import { useDispatch} from "react-redux";
import { removeBooking } from "@/redux/features/bookSlice";

export default function BookingList(){
   
    //เอา element in array มาใส่ในนี้
     const venueItem = useAppSelector((state) => state.bookSlice.bookItems);
    const dispatch = useDispatch<AppDispatch>()
   
   
    return(
  <>
  {
     venueItem.length == 0 ? (<div className="text-red-700 text-2xl font-bold flex items-center justify-center py-8"> No Venue Booking</div> ): (
    <>
     { venueItem.map((Vitem : BookingItem) =>(
      
        <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2">
<div hidden>key ={Vitem.tel} </div>
<div className="text-sm text-black"> Name-Lastname : {Vitem.nameLastname} </div>
<div className="text-sm text-black"> Tel : {Vitem.tel} </div>
<div className="text-sm text-black"> Venue : {Vitem.venue} </div>
<div className="text-sm text-black"> BookDate : {Vitem.bookDate} </div>
<button className="text-white shadow-sm text-md px-3 my-3 bg-blue-700 rounded-lg" onClick={()=> dispatch(removeBooking(Vitem))}> Cancel this Booking </button>
        </div>
    ))}
   
 </>
 
  )
  }

  </>
    );
}