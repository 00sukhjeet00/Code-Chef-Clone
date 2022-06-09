import React from 'react'
import ContestComponenet from './component/Contest'

export default function ContestScreen() {
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
    <ContestComponenet data={data}/>
  )
}
