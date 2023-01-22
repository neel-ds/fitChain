import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Title from '@/components/title'
import Input from '../components/form-elements/input'
import Select from '../components/form-elements/select'
import Button from '../components/form-elements/button'
import Layout from '@/components/layout'
import { useToast } from '@chakra-ui/react'
import { usePrepareContractWrite, useContractWrite, useWaitForTransaction } from 'wagmi'
import ABI from '../contracts/ABI.json'
import { CONTRACT_ADDRESS } from '@/utils/contractAddress'

const Profile = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  
  const genderOptions = [
    { name: 'Male', value: 'male' },
    { name: 'Female', value: 'female' }
  ]

  const toast = useToast();

  const { config } = usePrepareContractWrite({
    address: CONTRACT_ADDRESS,
    abi: ABI,
    functionName: "setUserDetails",
    args: [
      name, parseInt(age), height, weight, gender
    ],
  });

  const { data, write } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });
  
  useEffect(() => {
    if(isSuccess) {
      toast({
        title: "User registered",
        description: "User has been registered successfully",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
  }, [isSuccess]);

  return (
    <>
      <Head>
        <title>Profile</title>
        <meta name="description" content="LogChain - Profile" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <>
          <Title title="Profile" />
          <div className="px-5">
            <form>
              <div className="flex flex-col md:flex-row md:space-x-5">
                <div className="w-full md:w-1/2 space-y-4">
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
                    onChange={(e) => setGender(e.target.selectedIndex - 1)}
                  />

                </div>
                <div className="w-full md:w-1/2 space-y-4 mt-5 md:mt-0">
                  <Input
                    id="height"
                    name="height"
                    label="Height"
                    placeholder="Height (in cm)"
                    type="number"
                    onChange={(e) => setHeight(e.target.value)}
                  />
                  <Input
                    id="weight"
                    name="weight"
                    label="Weight"
                    placeholder="Weight (in Kg)"
                    type="number"
                    onChange={(e) => setWeight(e.target.value)}
                  />
                </div>
              </div>
              <div className="max-w-[200px] flex m-auto mt-10">
                <Button label="Register" onClick={() => { write?.() }} />
              </div>
            </form>
          </div>
        </>
      </Layout>
    </>
  )
}

export default Profile