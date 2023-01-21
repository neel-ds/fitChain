import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GiDigitalTrace } from 'react-icons/gi'
import { BiUserCircle } from 'react-icons/bi'
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
        <span className="hidden md:flex md:ml-3 text-gray-500">{name}</span>
      </Link>
    </li>
  )
}

const Sidebar = () => {
  const navItemObj = [
    {link: "/dashboard", icon:<GiDigitalTrace className="text-blue-300" size={25} />, name: "Dashboard"},
    {link: "/fitness", icon:<GiDigitalTrace className="text-blue-300" size={25} />, name: "Fitness"},
    {link: "/wellness", icon:<GiDigitalTrace className="text-blue-300" size={25} />, name: "Wellness"},
    {link: "/profile", icon:<BiUserCircle className="text-blue-300" size={25} />, name: "Profile"},
  ]
  return (
    <aside className="min-h-[calc(100vh-5rem)] h-[inherit] md:w-64 rounded-[8px] bg-gray-50">
      <div className="min-h-[calc(100vh-5rem)] md:px-3 py-4 overflow-y-auto h-full flex flex-col justify-between">
        <div>
          <Link href="/" className="flex justify-center sm:justify-start items-center mb-5">
            <Image src="/fitchain.png" width="35" height="50" className="h-8 md:mr-3 sm:h-10" alt="Fit Chain" />
            <span className="hidden md:flex self-center text-xl font-semibold whitespace-nowrap text-[#008dff]">FitChain</span>
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