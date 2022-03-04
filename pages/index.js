import Head from 'next/head'
import Image from 'next/image'
import Footer from '../compos/footer'
import Navbar from '../compos/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <> 
    <Head>
      <title> Satoripop | Home</title>
      <meta name="keywords" content="ninjas"/>
    </Head>
   <div >
    <h1 className={styles.title}> HomePage</h1>
    <p className={styles.text}> We design and develop responsive, high-performing, scalable web applications, sites, and portals for startups and enterprises in different industry verticals. 

Whether you are looking to launch a new e-commerce business or web application from scratch or upgrade an existing one, our team will help you implement your project ideas using the best technical standards.</p>

   <Link href={"/ninjas/test"}>
      <a className={styles.btn}>See Contact Linkes</a>
     </Link> 
   </div>
   </>
  ) 
}
