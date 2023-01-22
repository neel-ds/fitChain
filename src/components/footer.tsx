import { AiFillGithub} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className=" w-full p-3 sm:px-4 bg-[#83eeea] bg-opacity-30">
      <div className="mx-auto max-w-[1080px]">
        <div className="flex items-center justify-between">
          <span className="text-md text-gray-600 sm:text-center">© {new Date().getFullYear()} <a href="" className="hover:text-gray-800">FitChain</a>. All Rights Reserved.
          </span>
          <div className="flex space-x-6 justify-center">
            <a href="https://github.com/neel-ds/fitChain" target="_blank" className="text-gray-600 hover:text-gray-800" rel="noreferrer">
              <AiFillGithub size={25} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
