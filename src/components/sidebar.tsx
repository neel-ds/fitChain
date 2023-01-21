import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GiDigitalTrace } from 'react-icons/gi'

interface NavItemProps {
  link: string
  icon: any
  name: string
}

const NavItem = ({ link, icon, name }: NavItemProps) => {
  return (
    <li>
      <Link href={link} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100">
        {icon}
        <span className="ml-3">{name}</span>
      </Link>
    </li>
  )
}

const Sidebar = () => {
  const navItemObj = [
    {link: "/", icon:<GiDigitalTrace size={25} />, name: "dashboard"},
    {link: "/habbits", icon:<GiDigitalTrace size={25} />, name: "habbits"},
    {link: "/wellness", icon:<GiDigitalTrace size={25} />, name: "wellness"}
  ]
  return (
    <aside className="min-h-[calc(100vh-5rem)] w-64 rounded-[8px]">
      <div className=" min-h-[calc(100vh-5rem)] px-3 py-4 overflow-y-auto rounded bg-gray-50">
          <Link href="/" className="flex items-center pl-2.5 mb-5">
            <Image src="/fitchain.png" width="50" height="100" className="h-6 mr-3 sm:h-10" alt="Fit Chain" />
            <span className="self-center text-xl font-semibold whitespace-nowrap">FitChain</span>
          </Link>
          <ul className="space-y-2">
            {
              navItemObj.map(item => <NavItem key={item.link} link={item.link} icon={item.icon} name={item.name} />)
            }
          </ul>
      </div>
    </aside>
  )
}

export default Sidebar