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
  goals: string[]
}

const Card = ({ title, desc, img, goals }: CardProps) => {
  return (
    <div className="w-1/3 bg-white rounded overflow-hidden shadow-lg">
      <div className="flex mx-auto justify-center pt-5 w-28">
        <Image className=" w-full rounded-full h-96 md:h-auto object-cover md:w-48" src={img} width="200" height="200" alt="Icon" />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{desc}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {
          goals.map(goal => <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" key={goal}>{goal}</span>)
        }
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
            <div className="space-x-2 flex">
              <Card title="Card title" desc="Lorem Ipsum is simply dummy text of the printing" img="/heart.jpg" goals={["a", "b", "c"]} />
              <Card title="Card title" desc="Lorem Ipsum is simply dummy text of the printing" img="/heart.jpg" goals={["a", "b", "c"]} />
              <Card title="Card title" desc="Lorem Ipsum is simply dummy text of the printing" img="/heart.jpg" goals={["a", "b", "c"]} />
            </div>
            <div className="space-x-2 flex">
              <Card title="Card title" desc="Lorem Ipsum is simply dummy text of the printing" img="/heart.jpg" goals={["a", "b", "c"]} />
              <Card title="Card title" desc="Lorem Ipsum is simply dummy text of the printing" img="/heart.jpg" goals={["a", "b", "c"]} />
              <Card title="Card title" desc="Lorem Ipsum is simply dummy text of the printing" img="/heart.jpg" goals={["a", "b", "c"]} />
            </div>
          </div>
        </>
      </Layout>
    </>
  )
}

export default Dashboard