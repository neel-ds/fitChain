import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { FiEdit, FiCheck } from 'react-icons/fi'
import Title from '@/components/title'
import Layout from '@/components/layout'
import Input from '../components/form-elements/input'
import SubTitle from '@/components/sub-title'
import Button from '../components/form-elements/button'
import GoalCard from '@/components/goal-card'
import { useToast } from '@chakra-ui/react'
import { usePrepareContractWrite, useContractWrite, useWaitForTransaction, useAccount, useSigner } from 'wagmi'
import ABI from '../contracts/ABI.json'
import { CONTRACT_ADDRESS } from '@/utils/contractAddress'
import { useContract, useMintNFT } from '@thirdweb-dev/react'
import { ThirdwebSDK } from '@thirdweb-dev/sdk'

const Fitness = () => {
  const [isStepsReadOnly, setIsStepsReadOnly] = useState(true)
  const [stepsGoal, setStepsGoal] = useState(0)
  const [steps, setSteps] = useState(0)
  const [cardio, setCardio] = useState(0)
  const [isCardioReadOnly, setIsCardioReadOnly] = useState(true)
  const [cardioGoal, setCardioGoal] = useState(0)
  const { address } = useAccount();

  const toast = useToast()

  const sdk = ThirdwebSDK.fromPrivateKey("1b8d3dbbe1ea389f306d8dc591f18c13dbb59e91496caa15a60353f137efbfa4", "mumbai")
  const contract = sdk.getContract("0x66936086cA1b1ad06C3f4f6445df3BC29392472b", "nft-collection")

  const stepsMetadata = {
    name: "Goal Achieved",
    description: "Achieved Steps Goal",
    image: 'https://bafybeif45shw6focbxwwvhs7qspb6pzzc3teivtfpxyq7u2zpndto4xnyy.ipfs.w3s.link/NFT.gif',
  }

  const { config: cardioConfig } = usePrepareContractWrite({
    address: CONTRACT_ADDRESS,
    abi: ABI,
    functionName: "setCardioGoal",
    args: [
      cardioGoal
    ],
  });

  const { data, write: CardioWrite } = useContractWrite(cardioConfig);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });
  
  useEffect(() => {
    if(isSuccess) {
      toast({
        title: "Cardio Updated",
        description: "Cardio has been updated successfully",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
  }, [isSuccess]);

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
                <GoalCard title="Weekly Steps Goal">
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
                        <FiEdit className="text-blue-300" size={15} onClick={() => {setIsStepsReadOnly(false)}} /> :
                        <FiCheck className="text-blue-300" size={20} onClick={() => {
                          setIsStepsReadOnly(true)
                          CardioWrite?.()
                        }} />
                    }
                  </>
                </GoalCard>
                <Input
                  id="steps"
                  name="steps"
                  label="Daily Steps"
                  placeholder="Today's step count"
                  type="number"
                  onChange={(e) => setSteps(parseInt(e.target.value))}
                />
              </div>
              <div className="w-full md:w-1/2 space-y-4 mt-5 md:mt-0">
                <SubTitle title='Cardio' />
                <GoalCard title="Weekly Cardio Goal">
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
                    <p className="text-gray-600 px-4">Hours</p>
                    {
                      isCardioReadOnly ?
                        <FiEdit className="text-blue-300" size={20} onClick={() => setIsCardioReadOnly(false)} /> :
                        <FiCheck className="text-blue-300" size={20} onClick={() => setIsCardioReadOnly(true)} />
                    }
                  </>
                </GoalCard>
                <Input
                  id="cardio"
                  name="cardio"
                  label="Daily Cardio"
                  placeholder="Today's cardio (in mins)"
                  type="number"
                  onChange={(e) => setCardio(parseInt(e.target.value))}
                />
              </div>
            </div>
            <div className="max-w-[200px] flex m-auto mt-10">
              <Button label="Update" onClick={async () => { 
                const tx = (await contract).mintTo(address as any, stepsMetadata)
          }} />
            </div>
          </div>
        </>
      </Layout>
    </>
  )
}

export default Fitness