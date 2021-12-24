import Head from 'next/head'
import Image from 'next/image'
import MainLayout from '../src/components/layouts/MainLayout'
import Footer from '../src/components/shared/Footer'
import Navbar from '../src/components/shared/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Create Next App</title>
      </Head>

     
       <h1> Home Page</h1>
       </MainLayout>
   

   
  )
}
