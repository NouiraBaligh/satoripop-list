import Head from "next/head";
import Link from "next/link";
import styles from '../../styles/Ninjas.module.css'
export const getStaticProps = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data =await res.json();

      return {
       props: { ninjas: data }
      }
}
const Test = ({ ninjas  }) => {  
    return  (
   <>             
      <Head> 
      <title> Satoripop | Clients</title>
      <meta name="keywords" content="ninjas"/>
      </Head>
           <div>       
               <h1> Satoripop Clients</h1>
               {ninjas.map(ninja => (
                  <Link href={'/ninjas/' + ninja.id} key={ninja.id}>
                        <a className={styles.single}>
                              <h3>{ ninja.username  }</h3>
                        </a>
                  </Link>
               ))}
            </div>
            </>
     );
}
 
export default Test ;