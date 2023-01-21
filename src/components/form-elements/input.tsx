import React from 'react'
import { FormLabel, Input as ChakraInput } from '@chakra-ui/react'

interface InputProps {
  id: string
  name: string
  label?: string
  placeholder?: string
  type?: string
  onChange:  (e: any) => void
}

const Input = ({
  id,
  name,
  label,
  placeholder,
  type,
  onChange,
}: InputProps) => {
  return (
    <div>
      <FormLabel 
        htmlFor={id} 
        className="text-gray-700 dark:text-white" style={{marginRight: 0}}>
          {label}
      </FormLabel>
      <ChakraInput
        id={id}
        name={name}
        onChange={onChange}
        variant="outline" 
        className="mt-0 text-gray-700 dark:text-white"
        focusBorderColor="#008dff" 
        placeholder={placeholder}
        type={type}
      />
    </div>
  )
}

export default Input

Input.defaultProps = {
  label: '',
  placeholder: '',
  type: 'text',
  onchange: () => {}
}