import { AiFillGithub} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className=" w-full p-4 sm:p-6 sm:px-4 bg-blue-500 opacity-75">
      <div className="mx-auto max-w-[1080px]">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-md text-gray-50 sm:text-center">© {new Date().getFullYear()} <a href="" className="hover:underline">FitChain</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a href="https://github.com/neel-ds/fitChain" target="_blank" className="text-gray-50 hover:text-gray-300" rel="noreferrer">
              <AiFillGithub size={25} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
