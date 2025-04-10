// pages/_app.js
import Navbar from '../components/Navbar'
//import NavBar from '../components/NavBar';
//import { Inconsolata} from "next/font/google";
import { Inconsolata, Roboto } from "next/font/google";
//import NavBar from '../components/NavBar';
//import NavBar from '../components/NavBar';
//import Hero from '../components/Hero';
import Footer from '../components/Footer';
import '../styles/globals.css';
import Head from 'next/head'

//import NavBar from '../components/NavBar';

import type { AppProps } from "next/app";
//import ProgressBar from "@/components/ProgressBar";
import Script from "next/script"; // Ensure this import is correct
const inconsolata = Inconsolata({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-inconsolata" });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-body" });

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div className={`${inconsolata.variable} ${roboto.variable} min-h-screen flex flex-col`}>
      {/* Load Google Maps API script */}
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyC6XMgnqoiUK0e-981NgdMaM_y_18NLnPg&libraries=places`}
        strategy="beforeInteractive"
      />
  <Navbar />

      <Head>
        <link rel="icon" href="/images/logo.png" />
      </Head>
     
      
      <Component {...pageProps} />
      <Footer />
      </div>
    </div>
  );
}

export default MyApp;
