import React from 'react'

import {GetData} from '@/components/DegreeOfDifficulty'
import Dive from '@/components/diveComponents/Dive';


export default function dd2() {
const dives=GetData();
if (!dives){
  return (<pre>Loading...</pre>)
}

return(
  <>
  {/* <Menu /> */}
  {/* <TotalScore /> */}
  <Dive dives={dives}/>
  <Dive dives={dives}/>
  <Dive dives={dives}/>
  <Dive dives={dives}/>
  <Dive dives={dives}/>

  </>
)
}