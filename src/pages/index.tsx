import Image from "next/image"; 
import { Titillium_Web } from "next/font/google";
import localFont from "next/font/local"
import Head from "next/head";
import HomePage from "../../components/Pages/Homepage"; 

const titillium = Titillium_Web({weight:'400', subsets: ["latin"] });
const centuryGoth = localFont({
  src: [{
    path:'../../public/fonts/CenturyGothic.ttf',
    weight:'400'
  }],
  variable:'--century-gothic'
})

export default function Home() {
  return (
    <>
      <Head>
        <title>TaxClear | Home</title>
      </Head>

      <main
        className={`flex min-h-screen flex-col items-center justify-between ${centuryGoth.variable}   `}
      >
        <HomePage />
      </main>
    </>
  );
}
