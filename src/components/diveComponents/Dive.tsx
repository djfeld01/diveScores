import React, { useEffect,useState } from 'react'

import DiveSelector from '@/components/diveComponents/DiveSelector'
import Judge from '@/components/diveComponents/Judge'

function Dive({dives}) {


  
  
  
  
  
 
  const [scores, setScores]= useState([
    {id: 1, score:0, max: false, min: true},
    {id: 2, score:0, max: false, min: false},
    {id: 3, score:0, max: false, min: false},
    {id: 4, score:0, max: false, min: false},
    {id: 5, score:0, max: true, min: false},
  ])
  const [diveScore,setDiveScore]=useState()
  const [degreeOfDifficulty, setDegreeOfDifficulty]=useState()
  const [rawScore, setRawScore]=useState(0)
  
  useEffect(()=>{
    setDiveScore(rawScore*degreeOfDifficulty)
  }, [rawScore, degreeOfDifficulty])


 



  //update score when changed
  const updateScores=(id, newScore)=>{
    const newScores=[...scores]
    const judge=newScores.find((judge)=> judge.id===id)
    judge.score=Number(newScore)
    const max=newScores.reduce((prev, curr)=>{
      return (prev.score>curr.score)?prev:curr
    })
    
    newScores.forEach((score)=>{
      score.min=false
      score.max=false
    })
    max.min=false
    max.max=true

    const min=newScores.reduce((prev, curr)=>{
      return (prev.score<curr.score)?prev:curr
    })
    setScores(newScores)

    min.min=true
    min.max=false
    
    //in case of bingo set the first score to min
    if (max===min){
      newScores[0].max=true;

    }
    setRawScore(scores.reduce((total, score)=>{
      return !score.max && !score.min ? total+score.score : total
    },0))

    //setDiveScore(rawScore * degreeOfDifficulty)
  }

  // update everything when position is changed

  return (
    <div className="border-8 bg-black">
    

    
    <DiveSelector dives={dives} setDegreeOfDifficulty={setDegreeOfDifficulty} />
    <div className="text-white">{degreeOfDifficulty>0 ? degreeOfDifficulty : 'Not a valid position for this dive'}</div>
    {scores.map((judge)=>{
      return <Judge judge={judge} key={judge.id} onChange={updateScores}/>
    })

    }

    <div className="font-extrabold text-2xl text-white">Dive Score: {Math.round(diveScore*100)/100}</div>
    </div>
  )
}

export default Dive