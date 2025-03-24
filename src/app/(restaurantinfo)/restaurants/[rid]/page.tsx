import getRestaurant from "@/libs/getRestaurant";
import Image from "next/image";
// import getVenue from "@/libs/getVenue";
import Link from "next/link";


export default async  function RestaurantDetailPage({params} : {params :{rid :string} }){
   

const restaurantdetail = await getRestaurant(params.rid)
   
    /**
     * Mock Data for Demonstration Only
     */
   /* 
    const Mockvenurepo = new Map();
    Mockvenurepo.set("001", {Name : "The Bloom Pavilion", image : "/img/bloom.jpg"})
    Mockvenurepo.set("002", {Name : "Spark Space", image : "/img/sparkspace.jpg"})
    Mockvenurepo.set("003", {Name : "The Grand Table", image : "/img/grandtable.jpg" })
    */

    return(
 <main className="text-center p-5">
{/* <h1 className="text-lg font-medium text-black">
  {restaurantdetail.data.name}
</h1> */}

<div className=" flex flex-row  my-5" >
  <Image src={restaurantdetail.data.picture} alt = "Venue Image" width={0} height={0} sizes="100vw" className="rounded-lg w-[30%]"/>
  <div className="text-left"> 
  <div className="text-md mx-5  text-black ">
Name : {restaurantdetail.data.name}
 </div>
<div className="text-md mx-5  text-black  ">
Address : {restaurantdetail.data.address}

</div>

<div className="text-md mx-5  text-black">
District : {restaurantdetail.data.district}
</div>

<div className="text-md mx-5  text-black">
Province : {restaurantdetail.data.province}
</div>

<div className="text-md mx-5  text-black">
Tel : {restaurantdetail.data.tel}
</div>

<div className="text-md mx-5  text-black">
Postal Code : {restaurantdetail.data.postalcode}
</div>

<div className="text-md mx-5  text-black">
Daily Rate : {restaurantdetail.data.dailyrate}
</div>
<Link href={`/booking?id=${params.rid}&name=${restaurantdetail.data.name}`}> 
  <button
  
    className="bg-red-800 border-2 border-red-800 text-white font-semibold py-3 px-4 text-md rounded-full hover:bg-yellow-600 hover:text-white hover:border-yellow-600 transition-all duration-300 ease-in-out font-serif shadow-xl mx-3 my-2" 
>
    Make a reservation
</button>
  </Link>
</div>

 


</div>

 </main>
    );
}



/*export async function generateStaticParams() {
    return [{cid:"001"},{cid:"002"},{cid:"003"}]
}*/