import React, { useState } from 'react'
import Head from 'next/head'
import { FiEdit, FiCheck } from 'react-icons/fi'
import Title from '@/components/title'
import Layout from '@/components/layout'
import Input from '../components/form-elements/input'
import SubTitle from '@/components/sub-title'
import Button from '../components/form-elements/button'
import GoalCard from '@/components/goal-card'

const Wellness = () => {
  const [isSleepReadOnly, setIsSleepReadOnly] = useState(true)
  const [sleepGoal, setSleepGoal] = useState(0)
  const [isWellnessReadOnly, setIsWellnessReadOnly] = useState(true)
  const [wellnessGoal, setWellnessGoal] = useState(0)

  const handleChange = () => {}

  return (
    <>
      <Head>
        <title>Wellness</title>
        <meta name="description" content="LogChain - Wellness" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <>
          <Title title="Wellness" />
          <div className="px-0 lg:px-5">
            <div className="flex flex-col md:flex-row md:space-x-5">
              <div className="w-full md:w-1/2 space-y-4">
                <SubTitle title='Sleep' />
                <GoalCard title="Weekly Sleep Goal">
                  <>
                    <input
                      className={`appearance-none text-center border rounded w-full py-2 px-3 text-gray-600 leading-tight bg-transparent focus:outline-none focus:shadow-outline ${isSleepReadOnly ? 'border-none' : 'border'}`}
                      id="sleep-goal"
                      type="number"
                      name="sleep-goal"
                      value={sleepGoal}
                      onChange={(e) => setSleepGoal(parseInt(e.target.value))}
                      readOnly={isSleepReadOnly}
                    />
                    <p className="text-gray-600 px-4">Hours</p>
                    {
                      isSleepReadOnly ?
                        <FiEdit className="text-blue-300" size={20} onClick={() => setIsSleepReadOnly(false)} /> :
                        <FiCheck className="text-blue-300" size={20} onClick={() => setIsSleepReadOnly(true)} />
                    }
                  </>
                </GoalCard>
                <Input
                  id="sleep"
                  name="sleep"
                  label="Hours Sleept"
                  placeholder="Daily Sleep (in hours)"
                  type="number"
                  onChange={handleChange}
                />
              </div>
              <div className="w-full md:w-1/2 space-y-4 mt-5 md:mt-0">
                <SubTitle title='Wellness' />
                <GoalCard title="Weekly Wellness Goal">
                  <>
                    <input
                      className={`appearance-none text-center border rounded w-full py-2 px-3 text-gray-600 leading-tight bg-transparent focus:outline-none focus:shadow-outline ${isWellnessReadOnly ? 'border-none' : 'border'}`}
                      id="wellness-goal"
                      type="number"
                      name="wellness-goal"
                      value={wellnessGoal}
                      onChange={(e) => setWellnessGoal(parseInt(e.target.value))}
                      readOnly={isWellnessReadOnly}
                    />
                    <p className="text-gray-600 px-4">Hours</p>
                    {
                      isWellnessReadOnly ?
                        <FiEdit className="text-blue-300" size={20} onClick={() => setIsWellnessReadOnly(false)} /> :
                        <FiCheck className="text-blue-300" size={20} onClick={() => setIsWellnessReadOnly(true)} />
                    }
                  </>
                </GoalCard>
                <div className="flex space-x-2">
                  <div className="w-1/2 sm:w-2/3">
                    <Input
                      id="wellness"
                      name="wellness"
                      label="Activity"
                      placeholder="Eg. Yoga, Meditation"
                      type="number"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="w-1/2 sm:w-1/3">
                    <Input
                      id="wellness"
                      name="wellness"
                      label="Duration"
                      placeholder="Duration (Min)"
                      type="number"
                      onChange={handleChange}
                    />
                  </div>
                </div>
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

export default Wellness