import Link from "next/link";
import ResCard from "./ResCard";
import { RestaurantItem,RestaurantJson } from "../../interface";

export default async function RestaurantCatalog({restaurantsJson}:{restaurantsJson:RestaurantJson}){
    const restaurantJsonReady = await restaurantsJson
    return(
        <>
        Explore {restaurantJsonReady.count} restaurants in our catalog
        <div style={{margin:"20px" ,display:"flex",
        flexDirection:"row" ,alignContent:"space-around",
        justifyContent:"space-around",flexWrap:"wrap",padding:"10px"}}>
            {
                restaurantJsonReady.data.map((restaurantItem:RestaurantItem)=>(
                    <Link href={`/restaurants/${restaurantItem._id}`}className="w-1/5">
                        <ResCard ResName={restaurantItem.name} imgSrc={restaurantItem.picture}/>
                    </Link>
                ))
            }
        </div>
        </>
    )
}