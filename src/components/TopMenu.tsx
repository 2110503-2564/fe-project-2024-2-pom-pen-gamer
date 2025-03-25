import styles from './topmenu.module.css';
import Image from 'next/image';
import TopMenuItem from './TopMenuItem';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import { Link } from '@mui/material';

export default async function TopMenu(){

     const session = await getServerSession(authOptions);
   
    return (

        
        <div className={styles.menucontainer}>

{<Image src={'/img/pg1.png'} className={styles.logoimg} alt='logo' width={0} height={0} sizes='100vh' /> }
            <div className={styles.itemcontainer}>
           <TopMenuItem  title='Reservation' pageRef='/booking' />
           </div>
          <div className='ml-auto'>
                     {
 session ? <Link href="/api/auth/signout"> <div className='flex items-center h-full px-2 text-sm text-white'> Sign-Out of {session.user.name}</div> </Link> : 
 <Link href="/api/auth/signin"> <div className='flex items-center h-full px-2 mx-2 text-sm text-white '> Sign-In </div></Link>
         }
            </div>
      



        </div>
       
    );
}