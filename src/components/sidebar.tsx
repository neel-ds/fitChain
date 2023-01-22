import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MdOutlineDashboardCustomize } from 'react-icons/md'
import { IoFitness } from 'react-icons/io5'
import { GiLotus } from 'react-icons/gi'
import { CgProfile } from 'react-icons/cg'
import { ConnectKitButton } from 'connectkit'

interface NavItemProps {
  link: string
  icon: any
  name: string
}

const NavItem = ({ link, icon, name }: NavItemProps) => {
  return (
    <li>
      <Link href={link} className="flex justify-center sm:justify-start items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100">
        {icon}
        <span className="hidden md:flex md:ml-3 text-lg text-gray-600">{name}</span>
      </Link>
    </li>
  )
}

const Sidebar = () => {
  const navItemObj = [
    {link: "/profile", icon:<CgProfile className="text-[#4ce0d9]" size={25} />, name: "Profile"},
    {link: "/dashboard", icon:<MdOutlineDashboardCustomize className="text-[#4ce0d9]" size={25} />, name: "Dashboard"},
    {link: "/fitness", icon:<IoFitness className="text-[#4ce0d9]" size={25} />, name: "Fitness"},
    {link: "/wellness", icon:<GiLotus className="text-[#4ce0d9]" size={25} />, name: "Wellness"},
  ]
  return (
    <aside className="min-h-[calc(100vh-5rem)] h-[inherit] md:w-64 rounded-[8px] bg-gray-50">
      <div className="min-h-[calc(100vh-5rem)] md:px-3 py-4 overflow-y-auto h-full flex flex-col justify-between">
        <div>
          <Link href="/" className="flex justify-center sm:justify-start items-center mb-5">
            <Image src="/fitchain.png" width="50" height="50" className="h-8 md:mr-3 sm:h-10" alt="Fit Chain" />
            <span className="hidden md:flex self-center text-2xl font-bold whitespace-nowrap text-[#008dff]">FitChain</span>
          </Link>
          <ul className="space-y-2">
            {
              navItemObj.map(item => <NavItem key={item.link} link={item.link} icon={item.icon} name={item.name} />)
            }
          </ul>
        </div>
      <div className="relative b-0 flex items-center justify-center mb-3">
      <ConnectKitButton />
      </div>
      </div>
    </aside>
  )
}

export default Sidebar