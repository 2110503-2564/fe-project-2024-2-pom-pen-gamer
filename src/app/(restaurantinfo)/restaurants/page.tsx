import ResCard from "@/components/ResCard";
import { RestaurantItem } from "../../../../interface";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";


export default function Restuarant() {
  return (
    <main>
   
<div className='font-serif text-black text-4xl text-center m-7 text-yellow-900 ' >
 We have  Restaurant, For you to choose.
</div>
  

  
<div className="flex flex-row">
<ResCard ResName={"Mystic Masala"} imgSrc={'/img/cover4.jpg'} />
<ResCard ResName={"Zen & Zushi"} imgSrc={'/img/cover3.jpg'} />
<ResCard ResName={"Zen & Zushi"} imgSrc={'/img/cover3.jpg'} />

</div>

<div className="flex flex-row my-7" >
<ResCard ResName={"Zen & Zushi"} imgSrc={'/img/cover3.jpg'}/>
<ResCard ResName={"Zen & Zushi"} imgSrc={'/img/cover3.jpg'} />
<ResCard ResName={"Zen & Zushi"} imgSrc={'/img/cover3.jpg'} />
</div>


<div className="flex flex-row my-7" >
<ResCard ResName={"Zen & Zushi"} imgSrc={'/img/cover3.jpg'} />
<ResCard ResName={"Zen & Zushi"} imgSrc={'/img/cover3.jpg'} />
<ResCard ResName={"Zen & Zushi"} imgSrc={'/img/cover3.jpg'}/>
</div>

    </main>
  );
}
