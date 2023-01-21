import React from 'react'
import Head from 'next/head'
import Title from '@/components/title'
import Layout from '@/components/layout'
import SubTitle from '@/components/sub-title'
import Image from 'next/image'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

interface CardProps {
  title: string
  desc: string
  img: string
}

const Card = ({title, desc, img}: CardProps) => {
  return (
    <div className="flex justify-center">
    <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
      <Image className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={img} width="500" height="500" alt="Icon" />
      <div className="p-6 flex flex-col justify-start">
        <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
        <p className="text-gray-700 text-base mb-4">
          {desc}
        </p>
      </div>
    </div>
  </div>
  )
}

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  datasets: [
    {
      label: '',
      data: [12, 19],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const Dashboard = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="LogChain - Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <>
          <Title title="Dashboard" />
          <div className="flex justify-center max-h-[200px]">
            <Doughnut data={data} />
          </div>
          <SubTitle title='Achievements' />
          <div className="space-y-2">
            <Card title="Card title" desc="Lorem Ipsum is simply dummy text of the printing" img="/heart.jpg" />
            <Card title="Card title" desc="Lorem Ipsum is simply dummy text of the printing" img="/heart.jpg" />
          </div>
        </>
      </Layout>
    </>
  )
}

export default Dashboard