import styles from './topmenu.module.css';
import Image from 'next/image';
import TopMenuItem from './TopMenuItem';

import { Link } from '@mui/material';

export default async function TopMenu(){

    // const session = await getServerSession(authOptions);
   
    return (

        
        <div className={styles.menucontainer}>

           
           <TopMenuItem  title='Booking' pageRef='/booking'/>
            {/* <Image src={'/img/logo.png'} className={styles.logoimg} alt='logo' width={0} height={0} sizes='100vh' /> */}
            
          {/* <div>  
                     {
 session ? <Link href="/api/auth/signout"> <div className='flex items-center h-full px-2 text-sm text-white'> Sign-Out of {session.user.name}</div> </Link> : 
 <Link href="/api/auth/signin"> <div className='flex items-center h-full px-2 mx-2 text-sm text-white '> Sign-In </div></Link>
         }
            </div>
       */}



        </div>
       
    );
}