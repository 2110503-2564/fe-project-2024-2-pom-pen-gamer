"use client"
import LocationDateReserve from "@/components/LocationDateReserve";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { ReservationItem } from "../../../interfaces";
import { addReservation } from "@/redux/features/cartSlice";

export default function Reservation () {

    const urlParams = useSearchParams()
    const cid = urlParams.get('id')
    const model = urlParams.get('model')

    const dispatch = useDispatch<AppDispatch>()

    const makeReservation = () => {
        if(cid && model && pickupDate && returnDate) {
            const item:ReservationItem = {
                carId: cid,
                carModel: model,
                numOfDays: returnDate.diff(pickupDate, 'day'),
                pickupDate: dayjs(pickupDate).format("YYYY/MM/DD"),
                pickupLocation: pickupLocation,
                returnDate: dayjs(returnDate).format("YYYY/MM/DD"),
                returnLocation: returnLocation
            }
            dispatch(addReservation(item))
        }
    }

    const [pickupDate, setPickupDate] = useState<Dayjs|null>(null)
    const [pickupLocation, setPickupLocation] = useState<string>("BKK")
    const [returnDate, setReturnDate] = useState<Dayjs|null>(null)
    const [returnLocation, setReturnLocation] = useState<string>("BKK")

    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <div className="text-xl font-medium">Make a reservation</div>
            

            <div className="w-fit space-y-2">
                <div className="text-md text-left text-gray-600 ">Select Date and Restaurant</div>
                <LocationDateReserve onDateChange={(value:Dayjs)=>{setPickupDate(value)}}
                onLocationChange={(value:string)=>{setPickupLocation(value)}}/>
       
            </div>

            <button className="block rounded-md bg-red-800 hover:bg-red-600 px-10 py-2
            text-white shadow-small" onClick={makeReservation}>
                Reserve this Restaurant
            </button> 
            
        </main>

    );
}
