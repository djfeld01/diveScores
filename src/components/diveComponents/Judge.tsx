import clsx from 'clsx'
import React from 'react'

function Judge({ judge, onChange}) {
  return (
    <input
      className={clsx("rounded-lg w-20 h-20 m-3 font-extrabold text-center", judge.max ? "line-through bg-blue-600" :"", judge.min ? "line-through bg-red-400":"")}
      type="Number" 
      step="0.5"
      max="10"
      min="0"
      value={judge.score}
      onChange={(e)=>{onChange(judge.id, e.target.value)}}
      />
  )
}

export default Judge