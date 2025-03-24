'use client'

import Card from "./AdsCardLeft";
import Link from "next/link";
import { useReducer } from "react";

export default function CardPanel(){

const RatingReducer = (ratinglist :Map<string,number> ,action : {type:string,venueName:string,rating? : number})=>{
   
    switch(action.type){
   
   
   case 'Rates':{
    const newratings = new Map(ratinglist)
   if(action.rating !== undefined){
  
  newratings.set(action.venueName, action.rating)}
     return  newratings
   }
   case  'remove' :{
  
    const newratings = new Map(ratinglist)
 newratings.delete(action.venueName);
return  newratings;
} 

    default:{
return ratinglist;
    }
}
}


   const initialRatings = new Map([['The Bloom Pavilion',0],  ['The Grand Table', 0],
     ['Spark Space', 0],] );





const [venueList,dispatchRating] = useReducer(RatingReducer, initialRatings )

/**
 * Mock Data for Demonstration Only
 */
const Mockvenurepo = [
  {vid : "001", Name : "The Bloom Pavilion", image : "/img/bloom.jpg"},
  {vid : "002", Name : "Spark Space", image : "/img/sparkspace.jpg" },
  {vid : "003", Name : "The Grand Table", image : "/img/grandtable.jpg" }
]

    return(
        <div> 
          <div style={{margin : "20px", display:"flex", flexDirection : "row",flexWrap:"wrap"
             ,justifyContent: "space-around",alignContent:"space-around" }}>

{
  Mockvenurepo.map((venueItem) =>(
    <Link href={`/venue/${venueItem.vid}`} key={venueItem.vid} className="w-1/5">
    <Card  venueName={venueItem.Name} imgSrc={venueItem.image} Ratings={(rating : number)=> dispatchRating({type : 'Rates',venueName : venueItem.Name ,rating})} currentR={venueList.get(venueItem.Name) || 0} />
    </Link>
  ))
}

              </div>

<div className="w-full text-xl font-medium text-black"> Venue List with Ratings : {venueList.size }</div>
{Array.from(venueList).map(([venue,rating]) => (
        <div
          key = {venue}
          className="text-black"
          data-testid = {venue}
         onClick={() => dispatchRating({type : 'remove', venueName : venue})}
        
>
          {venue} : {rating } 
        </div>
))}
    </div>
    );
}