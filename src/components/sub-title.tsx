import React from 'react'

interface SubTitleProps {
  title: string
}

const SubTitle = ({ title }: SubTitleProps) => {
  return (
    <div className="flex flex-col text-center w-full">
      <h2 className="text-2xl my-10 font-bold title-font mb-4 text-[#008dff]">
        {title}
      </h2>
    </div>
  )
}

export default SubTitle

SubTitle.defaultProps = {
  title: '',
}