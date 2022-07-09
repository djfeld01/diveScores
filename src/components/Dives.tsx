import React , {useEffect, useState} from 'react'



function Dives({dives, numJudges, defaultScore}) {

  const [degreeOfDifficulty, setDegreeOfDifficulty]= useState ()
  const [selectedDive, setSelectedDive]=useState(101)
  const [selectedPosition, setSelectedPosition]= useState('Tuck')
  const [group, setGroup]= useState('Front')
  const [scores, setScores]= useState([
    {name: "Judge1", score: defaultScore},
    {name: "Judge2", score: defaultScore},
    {name: "Judge3", score: defaultScore},
    {name: "Judge4", score: defaultScore},
    {name: "Judge5", score: defaultScore}
  ])
  const [totalDiveScore, SetTotalDiveScore]=useState();

  useEffect(()=>{
    const selectedDD=dives.filter((dive)=>dive.Dive==selectedDive)
    setDegreeOfDifficulty(selectedDD[0][selectedPosition])
    setGroup(selectedDD[0].Group)
    calculateScores();
  },[selectedDive, selectedPosition,dives, scores])


  const dropDownList=dives.map(dive=>{
    return <option value={dive.Dive} key={dive.Dive}>{dive.Description}</option>
  })
  const positionDropDownList=[
    <option value='Tuck' key='C'>Tuck</option>,
    <option value='Pike' key='B'>Pike</option>,
    <option value='Straight' key='A'>Straight</option>,
    <option value='Free' key='D'>Free</option>
  ]

  const calculateScores=()=>{
    let max=0;
    let min=11;
    console.log(scores);
    let tempScore= scores.reduce((previousValue,currentValue)=>{
      if (currentValue.score>max){
        max=currentValue.score
      }
      if (currentValue.score<min){
        min=currentValue.score
      }
      return currentValue.score+ previousValue
    },0)
    tempScore=(tempScore-max-min)*degreeOfDifficulty;
    console.log(degreeOfDifficulty)
    SetTotalDiveScore(tempScore);
  }
  const handleScoreChange=(name, value)=>{
    setScores(scores.map(judge=>{
      if (judge.name===name){
        return {name, score:Number(value)}
      } else{
        return judge;
      }
    }))
    console.log('inside handlescorechange ', scores)
  }

  return (<>
    <div className="text-lg">Degree of Difficulty: {degreeOfDifficulty}</div>
    <div className="text-lg">Group: {group}</div>
    <div className="text-lg">Dive: {selectedDive}</div>
    <div className="text-lg">Position: {selectedPosition}</div>
    <div className="text-lg">Total Dive Score: {totalDiveScore}</div>
  <div className="flex flex-row">
    <select onChange= {(e)=>setSelectedDive(e.target.value)}>{dropDownList}</select>
    <select onChange={(e)=>setSelectedPosition(e.target.value)}>{positionDropDownList}</select>
    <input type="number" className="flex-initial w-1/6" defaultValue={defaultScore} key="Judge1" onChange={(e)=>handleScoreChange(e.target.name, e.target.value)}/>    
    <input type="number" className="flex-initial w-1/6" defaultValue={defaultScore} name="Judge2" onChange={(e)=>handleScoreChange(e.target.name, e.target.value)}/> 
    <input type="number" className="flex-initial w-1/6" defaultValue={defaultScore} name="Judge3" onChange={(e)=>handleScoreChange(e.target.name, e.target.value)}/>    
    <input type="number" className="flex-initial w-1/6" defaultValue={defaultScore} name="Judge4" onChange={(e)=>handleScoreChange(e.target.name, e.target.value)}/> 
    <input type="number" className="flex-initial w-1/6" defaultValue={defaultScore} name="Judge5" onChange={(e)=>handleScoreChange(e.target.name, e.target.value)}/>    
  </div>
  
  </>)

}

export default Dives