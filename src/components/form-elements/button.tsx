import React from 'react'
import { Button as ChakraButton } from '@chakra-ui/react'

interface ButtonProps {
  label?: string
  onClick:  () => void
}

const Button = ({
  label,
  onClick,
}: ButtonProps) => {
  return (
    <ChakraButton
      colorScheme=""
      onClick={onClick}
      className="w-full text-white bg-[#00bdff] focus:ring-1 focus:outline-none focus:ring-[#4ce0d9] font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:drop-shadow-xl"
    >
      {label}
    </ChakraButton>
  )
}

export default Button

Button.defaultProps = {
  label: '',
  onClick: () => {}
}