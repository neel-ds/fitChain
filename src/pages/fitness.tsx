import React from 'react'
import Head from 'next/head'
import Title from '@/components/title'
import Layout from '@/components/layout'

const Fitness = () => {
  return (
    <>
    <Head>
      <title>Fitness</title>
      <meta name="description" content="LogChain - Fitness" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <>
        <Title title="Fitness" />
        <div className="px-5">
        </div>
      </>
    </Layout>
  </>
  )
}

export default Fitness