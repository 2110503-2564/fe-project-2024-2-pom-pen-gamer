"use client";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";

const ReservationDetails = () => {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    const name = decodeURIComponent(searchParams.get("name") || "");

    const {data:session} =useSession()
    const user_id = session?.user._id
    console.log(user_id)
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Reservation Details</h1>
            <div className="mt-4 border p-4 rounded-lg shadow">
                <p><strong>Restaurant Name:</strong> {name}</p>
            </div>
        </div>
    );
};

export default ReservationDetails;
