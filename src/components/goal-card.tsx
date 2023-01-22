import React from 'react'

interface GoalCardProps {
  children: JSX.Element
  title: string
}

const GoalCard = ({ children, title }: GoalCardProps) => {
  return (
    <div className="flex flex-col justify-center p-6 bg-white/30 border border-gray-100 rounded-lg shadow-lg">
    <h5 className="mb-2 text-2xl tracking-tight text-gray-600">{title}</h5>
    <div className="flex items-center">
      {children}
    </div>
  </div>
  )
}

export default GoalCard