import React from 'react'
import Sidebar from '@/components/sidebar'

interface LayoutProps {
  children: JSX.Element
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="px-4 md:px-0 mx-auto max-w-full min-h-[calc(100vh-2rem)]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col text-center w-full">
          <div className="w-full overflow-x-hidden overflow-y-auto md:inset-0 justify-center flex md:h-full">
            <div className="relative w-full h-full md:h-auto">
              <div className="relative rounded-lg shadow-lg backdrop-blur-lg bg-white/60">
                <div className="flex px-6 py-6 min-h-[calc(100vh-2rem)] flex-cols space-x-5">
                  <Sidebar />
                  <div className="w-full min-h-[calc(100vh-5rem)]">
                    <div className="bg-white/60 w-full rounded-[10px] min-h-[calc(100vh-5rem)] p-10">
                    {children}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Layout