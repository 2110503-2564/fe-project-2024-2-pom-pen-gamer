// import {VenueItem,VenueJson} from "../../interface"
import Link from "next/link";
import Card from "./AdsCardLeft";

export default async function RestaurantCatalog({venuesJson} : {venuesJson :Promise<VenueJson>}) {
   
  const venueJsonReady = await venuesJson

    return (
<>
<div className="text-yellow-700"> Explore {venueJsonReady.count} venues in our catalog</div>

<div style={{margin : "20px", display:"flex", flexDirection : "row",flexWrap:"wrap"
             ,justifyContent: "space-around",alignContent:"space-around" }}>

{
 venueJsonReady.data.map((resTaurantItem:RestaurantItem,) =>(
    <Link href={`/venue/${venueItem.id}`} key={venueItem.id} className="w-1/5">
    <ResCard  venueName={venueItem.name} imgSrc={venueItem.picture}   />
    </Link>
  ))
}

              </div>


</>

    );
}