import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

interface FeatureCardProps {
  title: string
  desc: string
  icon: any
}

const FeatureCard = ({title, desc, icon}: FeatureCardProps) => {
  return (
    <div className="relative backdrop-blur-lg bg-white/40 p-5 rounded-lg">
      <dt className="flex flex-col items-center md:items-start">
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#008dff] text-white">
          {icon}
        </div>
        <p className="pt-5 text-lg leading-6 font-medium text-[#008dff]">
          {title}
        </p>
      </dt>
      <dd className="mt-2 text-base text-gray-500 text-center md:text-left">
        {desc}
      </dd>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>FitChain</title>
        <meta name="description" content="FitChain" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Navbar />
        <main className="px-4 lg:px-0 mx-auto max-w-[1080px]">
          <div className="md:text-left h-[calc(100vh-49px)] w-full flex justify-between sm:flex-row flex-col">
            <div className="flex flex-col justify-center  mt-[70px]">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl lg:text-7xl">
                <span className="block xl:inline text-gray-700">Welcome to</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00bdff] to-[#a13bf7] pb-4">
                  FitChain
                </span>
                <span className="block text-[#008dff] font-medium text-2xl lg:text-3xl">
                  Decentralized Fitness Platform
                </span>
              </h1>
              <p className="mt-1 text-base text-gray-600 lg:mt-5 md:text-xl">
                Incentivize your weekly wellness goals with us!
              </p>
              <div className="max-w-[200px] mt-5 sm:mt-8 sm:flex lg:justify-start md:flex-col lg:flex-row">
                <div>
                  <Link href="/dashboard" className="w-full md:w-[70%] lg:w-full flex items-center justify-center px-8 py-2 border-0 border-transparent text-base font-medium rounded-3xl text-white bg-gradient-to-r from-[#00bdff] to-[#008dff] hover:drop-shadow-[0_3px_5px_#7d7d7d] md:text-lg md:px-8"
                  >Explore</Link>
                </div>
              </div>
            </div>
            <div className="overflow-y-hidden flex w-[60%] md:w-[50%] mx-auto items-center justify-center md:justify-end md:mr-0 md:mt-[70px]">
              <Image src="/fitVector.png" width="600" height="500" alt="Banner" />
            </div>
          </div>
        </main>
        <Footer />
      </>
    </>
  )
}
