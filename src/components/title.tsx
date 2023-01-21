import React from 'react'

interface TitleProps {
  title: string
}

const Title = ({ title }: TitleProps) => {
  return (
    <div className="flex flex-col text-center w-full">
      <h1 className="text-3xl mb-10 font-bold title-font mb-4 text-[#008dff]">
        {title}
      </h1>
    </div>
  )
}

export default Title

Title.defaultProps = {
  title: '',
}