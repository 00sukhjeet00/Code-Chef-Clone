import React from 'react'
import PracticeComponent from './component/Practice'

export default function PracticeScreen() {
  const data={
    header:[
      'code',
      'name',
      'start',
      'duration',
      'startin'
    ],
    body:[
      {
        code:"START34",
        name:"CodeChef Starters 34 (Rated for Div 2, 3 & 4)",
        start:"13 Apr 202 220:00:00",
        duration:"3 hours",
        startin:"19 hours 33 minutes"
      },
      {
        code:"START34",
        name:"CodeChef Starters 34 (Rated for Div 2, 3 & 4)",
        start:"13 Apr 202 220:00:00",
        duration:"3 hours",
        startin:"19 hours 33 minutes"
      },{
        code:"START34",
        name:"CodeChef Starters 34 (Rated for Div 2, 3 & 4)",
        start:"13 Apr 202 220:00:00",
        duration:"3 hours",
        startin:"19 hours 33 minutes"
      }
    ]
  }
  return (
    <PracticeComponent data={data}/>
  )
}
