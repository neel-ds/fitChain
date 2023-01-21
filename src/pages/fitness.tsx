import React, { useState } from 'react'
import Head from 'next/head'
import { FiEdit, FiCheck } from 'react-icons/fi'
import Title from '@/components/title'
import Layout from '@/components/layout'
import Input from '../components/form-elements/input'
import SubTitle from '@/components/sub-title'
import Button from '../components/form-elements/button'

interface GoalsCardProps {
  children: JSX.Element
  title: string
}

const GoalsCard = ({ children, title }: GoalsCardProps) => {
  return (
    <div className="flex flex-col justify-center p-6 bg-white/60 border border-gray-100 rounded-lg shadow-md">
    <h5 className="mb-2 text-2xl tracking-tight text-gray-600">{title}</h5>
    <div className="flex items-center">
      {children}
    </div>
  </div>
  )
}

const Fitness = () => {
  const [isStepsReadOnly, setIsStepsReadOnly] = useState(true)
  const [stepsGoal, setStepsGoal] = useState(0)
  const [isCardioReadOnly, setIsCardioReadOnly] = useState(true)
  const [cardioGoal, setCardioGoal] = useState(0)

  const handleChange = () => {}

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
            <div className="flex flex-col md:flex-row md:space-x-5">
              <div className="w-full md:w-1/2 space-y-4">
                <SubTitle title='Steps' />
                <GoalsCard title="Weekly Steps Goals">
                  <>
                  <input
                    className={`appearance-none text-center border rounded w-full py-2 px-3 text-gray-600 leading-tight bg-transparent focus:outline-none focus:shadow-outline ${isStepsReadOnly ? 'border-none' : 'border'}`}
                    id="steps-goal"
                    type="number"
                    name="steps-goal"
                    value={stepsGoal}
                    onChange={(e) => setStepsGoal(parseInt(e.target.value))}
                    readOnly={isStepsReadOnly}
                  />
                    {
                      isStepsReadOnly ?
                        <FiEdit className="text-blue-300" size={15} onClick={() => setIsStepsReadOnly(false)} /> :
                        <FiCheck className="text-blue-300" size={20} onClick={() => setIsStepsReadOnly(true)} />
                    }
                  </>
                </GoalsCard>
                <Input
                  id="steps"
                  name="steps"
                  label="Weekly Steps"
                  placeholder="Weekly Steps"
                  type="number"
                  onChange={handleChange}
                />
              </div>
              <div className="w-full md:w-1/2 space-y-4 mt-5 md:mt-0">
                <SubTitle title='Cardio' />
                <GoalsCard title="Weekly Cardio Goal">
                  <>
                  <input
                    className={`appearance-none text-center border rounded w-full py-2 px-3 text-gray-600 leading-tight bg-transparent focus:outline-none focus:shadow-outline ${isCardioReadOnly ? 'border-none' : 'border'}`}
                    id="cardio-goal"
                    type="number"
                    name="cardio-goal"
                    value={cardioGoal}
                    onChange={(e) => setCardioGoal(parseInt(e.target.value))}
                    readOnly={isCardioReadOnly}
                  />
                  <p className="text-gray-600 px-4">Minutes</p>
                  {
                    isCardioReadOnly ?
                      <FiEdit className="text-blue-300" size={20} onClick={() => setIsCardioReadOnly(false)} /> :
                      <FiCheck className="text-blue-300" size={20} onClick={() => setIsCardioReadOnly(true)} />
                  }
                  </>
                </GoalsCard>
                <Input
                  id="cardio"
                  name="cardio"
                  label="Weekly Cardio"
                  placeholder="Weekly Cardio"
                  type="number"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="max-w-[200px] flex m-auto mt-10">
              <Button label="Update" onClick={() => { }} />
            </div>
          </div>
        </>
      </Layout>
    </>
  )
}

export default Fitness