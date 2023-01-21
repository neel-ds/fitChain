import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { GiDigitalTrace } from 'react-icons/gi'
import { SiTrustpilot } from 'react-icons/si'
import { MdSecurity } from 'react-icons/md'

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
      <main className="h-full px-4 md:px-0 mx-auto max-w-[1080px]">
        <div className="md:text-left h-[calc(100vh-60px)] flex justify-center flex-row">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline text-gray-700">Welcome to</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00bdff] to-[#a13bf7] pb-4">
              FitChain
              </span>
              <span className="block text-[#008dff] font-medium text-2xl">
              Lorem Ipsum is simply dummy
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Lorem Ipsum is simply dummy text of the printing
            </p>
            <div className="mt-5 sm:mt-8 sm:flex lg:justify-start md:flex-col lg:flex-row">
              <div>
                <Link href="/dashboard" className="w-full md:w-[70%] lg:w-full flex items-center justify-center px-8 py-3 border-0 border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-[#00bdff] via-[#008dff] to-[#a13bf7] hover:drop-shadow-[0_3px_5px_#7d7d7d] md:py-2 md:text-lg md:px-8"
                  >Connect Wallet</Link>
              </div>
            </div>
          </div>
          <div className="md:flex hidden my-auto w-[30%] md:w-[60%] items-end">
            <Image src="/banner.png" width="600" height="500" alt="Banner" />
          </div>
        </div>
      </main>
    </>
  )
}
