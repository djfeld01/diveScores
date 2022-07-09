import React,{useState} from 'react'

import {GetData} from '@/components/DegreeOfDifficulty'
import Dives from '@/components/Dives'

export default function dd() {

  const [numDives, setNumDives]=useState(5)
  const [numJudges, setNumJudges]=useState(5)
  const [dropHighLow, setDropHighLow]=useState(true)
  const [defaultScore, setDefaultScore]=useState(5.5)

  const dives=GetData();
  if (!dives){
    return (<pre>Loading...</pre>)
  }






  return (<>
    
    <Dives 
      dives={dives} 
      numJudges={numJudges}
      defaultScore={defaultScore}
    />
    
    <Dives 
      dives={dives} 
      numJudges={numJudges}
      defaultScore={defaultScore}
    />
  </>)
}
