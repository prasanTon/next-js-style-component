import Head from 'next/head'
import Image from 'next/image'
import MainLayout from '../src/components/layouts/MainLayout'
import Footer from '../src/components/shared/Footer'
import Navbar from '../src/components/shared/Navbar'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <MainLayout>
      <Head>
        <title>about</title>
      </Head>

     
       <h1> About Page</h1>
       </MainLayout>
   

   
  )
}
