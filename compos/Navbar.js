import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
    return ( 
        <nav >
           <div className="logo">
               <Image src="/sat.png" width={100} height={90} />
               </div> 
               <Link href={"/"}><a>HOME</a></Link>
               <Link href={"/aboutt"}><a>ABOUT</a></Link>
               <Link href={"/ninjas/test"}><a>CLIENTS</a></Link>    
               
        </nav>
     );
}
 
export default Navbar;
