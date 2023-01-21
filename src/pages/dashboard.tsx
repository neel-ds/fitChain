import React, { useState } from 'react'
import Head from 'next/head'
import Sidebar from '@/components/sidebar'
import Header from '@/components/header'
import Input from '../components/form-elements/input'
import Select from '../components/form-elements/select'
import Button from '../components/form-elements/button'

const Dashboard = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  
  const genderOptions = [
    { name: 'Male', value: 'male' },
    { name: 'Female', value: 'female' }
  ]

  return (
    <>
    <Head>
      <title>Dashboard</title>
      <meta name="description" content="LogChain - Dashboard" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className="px-4 md:px-0 mx-auto max-w-full min-h-[calc(100vh-2rem)]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col text-center w-full">
          <div className="w-full overflow-x-hidden overflow-y-auto md:inset-0 justify-center flex md:h-full">
            <div className="relative w-full h-full md:h-auto">
              <div className="relative rounded-lg shadow-lg backdrop-blur-lg bg-white/60">
                <div className="flex px-6 py-6 min-h-[calc(100vh-2rem)] flex-cols space-x-5">
                  <Sidebar />
                  <div className="w-full min-h-[calc(100vh-5rem)]">
                    <div className="bg-white/60 w-full rounded-[10px] min-h-[calc(100vh-5rem)]">
                      <Header heading="Profile" />
                      <div className="px-5">
                        <form>
                          <div className="flex space-x-5">
                            <div className="w-1/2 space-y-4">
                              <Input
                                id="name"
                                name="name"
                                label="Name"
                                placeholder="Name"
                                onChange={(e) => setName(e.target.value)}
                              />
                              
                              <Input
                                id="age"
                                name="age"
                                label="Age"
                                placeholder="Age"
                                type="number"
                                onChange={(e) => setAge(e.target.value)}
                              />
                              <Select
                                id="gender"
                                name="gender"
                                label="Gender"
                                placeholder="Select gender"
                                options={genderOptions}
                                onChange={(event) => { setGender(event.target.selectedIndex-1) }}
                              />
                            
                            </div>
                            <div className="w-1/2  space-y-4">
                              <Input
                                id="height"
                                name="height"
                                label="Height (in cm)"
                                placeholder="Height"
                                type="number"
                                onChange={(e) => setHeight(e.target.value)}
                              />
                              <Input
                                id="weight"
                                name="weight"
                                label="Weight (in Kg)"
                                placeholder="Weight"
                                type="number"
                                onChange={(e) => setWeight(e.target.value)}
                              />
                            </div>
                          </div>
                        <div className="max-w-[200px] flex m-auto mt-10">
                          <Button label="Update Profile" onClick={() => {}} />
                        </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </>
  )
}

export default Dashboard