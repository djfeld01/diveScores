import clsx from 'clsx'
import React, { useEffect, useState } from 'react'



function DiveSelector({dives, setDegreeOfDifficulty}) {
  //light/dark mode if I get around to it
const [mode,setMode]=useState('light')

const positions=['Straight', 'Pike', 'Tuck', 'Free']

const groups=dives.reduce((previousValue, currentValue)=>{
  if (!previousValue.includes(currentValue.Group)){
    return previousValue=[...previousValue,currentValue.Group]
  }

  return previousValue;
}, [])

const [group , setGroup]=useState (groups[0])
const [filteredDives, setFilteredDives]= useState([])
const [dive, setDive]=useState(dives[0])
const [position, setPosition]=useState('Straight')

//initialize the first dive
useEffect(()=>{
  updateDives(group)
},[])

 //update Dives after changing group or dive
  const updateDives=(newGroup)=>{
    setGroup(newGroup)
    const newFilteredDives=dives.filter(dive=>dive.Group===newGroup)
    setDive(newFilteredDives[0])
    setDegreeOfDifficulty(Number(newFilteredDives[0][position]))
    setFilteredDives(newFilteredDives)
  }


  //set selected dive
  const diveSelector=(dive)=>{
    const selectedDive=dives.filter(nextDive=> nextDive.Dive===dive)
    setDive(selectedDive[0])
    const newPosition=selectedDive[0][position]

    const newPositionNumber=newPosition=='---' ? 0 : Number(newPosition)
    setDegreeOfDifficulty(newPositionNumber)
  }


  const positionSelector=(position)=>{
    setPosition(position)
    const newPosition=dive[position]
    const newPositionNumber=newPosition=='---' ? 0 : Number(newPosition)
    setDegreeOfDifficulty(newPositionNumber)

  }
  return (
    <>
    <select
    name='group'
    id='group'
    value={group}
    className={clsx(
                  'max-w-xs rounded m-3',
                  mode === 'dark'
                    ? 'border border-gray-600 bg-dark'
                    : 'border-gray-300 bg-white',
                  'focus:border-primary-400 focus:outline-none focus:ring focus:ring-primary-400'
                )}
                onChange={(e) => updateDives(e.target.value)}
              >
                {groups.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
  </select>

  <select
    name='dive'
    id='dive'
    value={dive.Dive}
    className={clsx(
                  'max-w-xs rounded m-3',
                  mode === 'dark'
                    ? 'border border-gray-600 bg-dark'
                    : 'border-gray-300 bg-white',
                  'focus:border-primary-400 focus:outline-none focus:ring focus:ring-primary-400'
                )}
                onChange={(e) => diveSelector(e.target.value)}
              >
                {filteredDives.map((c) => (
                  <option key={c.Dive} value={c.Dive}>
                    {c.Description}
                  </option>
                ))}
  </select>

  <select
    name='positions'
    id='positions'
    value={position}
    className={clsx(
                  'max-w-xs rounded m-3',
                  mode === 'dark'
                    ? 'border border-gray-600 bg-dark'
                    : 'border-gray-300 bg-white',
                  'focus:border-primary-400 focus:outline-none focus:ring focus:ring-primary-400'
                )}
                onChange={(e) => positionSelector(e.target.value)}
              >
                {positions.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
  </select>
  </>
  )
}

export default DiveSelector