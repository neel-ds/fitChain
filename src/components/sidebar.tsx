import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GiDigitalTrace } from 'react-icons/gi'
import { BiUserCircle } from 'react-icons/bi'

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
        <span className="hidden md:flex md:ml-3">{name}</span>
      </Link>
    </li>
  )
}

const Sidebar = () => {
  const navItemObj = [
    {link: "/dashboard", icon:<GiDigitalTrace size={25} />, name: "Dashboard"},
    {link: "/habbits", icon:<GiDigitalTrace size={25} />, name: "Habbits"},
    {link: "/wellness", icon:<GiDigitalTrace size={25} />, name: "Wellness"}
  ]
  return (
    <aside className="min-h-[calc(100vh-5rem)] h-[inherit] md:w-64 rounded-[8px] bg-gray-50">
      <div className="min-h-[calc(100vh-5rem)] md:px-3 py-4 overflow-y-auto h-full flex flex-col justify-between">
        <div>
          <Link href="/" className="flex justify-center sm:justify-start items-center mb-5">
            <Image src="/fitchain.png" width="50" height="100" className="h-8 md:mr-3 sm:h-10" alt="Fit Chain" />
            <span className="hidden md:flex self-center text-xl font-semibold whitespace-nowrap">FitChain</span>
          </Link>
          <ul className="space-y-2">
            {
              navItemObj.map(item => <NavItem key={item.link} link={item.link} icon={item.icon} name={item.name} />)
            }
          </ul>
        </div>
      <Link href="/profile" className="relative b-0 flex items-center justify-center mb-3">
        <BiUserCircle className="md:hidden" size={25} />
        <span className="hidden md:flex self-center text-xl font-semibold whitespace-nowrap">Profile</span>
      </Link>
      </div>
    </aside>
  )
}

export default Sidebar