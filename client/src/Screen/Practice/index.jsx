import React from 'react'
import PracticeComponent from './component/Practice'

export default function PracticeScreen() {
  const data={
    header:[
      'status',
      'name',
      'start',
      'duration',
    ],
    body:[
      {
        status:"-",
        name:"statusChef Starters 34 (Rated for Div 2, 3 & 4)",
        start:"13 Apr 202 220:00:00",
        duration:"3 hours",
        startin:"19 hours 33 minutes"
      },
      {
        status:"-",
        name:"statusChef Starters 34 (Rated for Div 2, 3 & 4)",
        start:"13 Apr 202 220:00:00",
        duration:"3 hours",
      },{
        status:"x",
        name:"statusChef Starters 34 (Rated for Div 2, 3 & 4)",
        start:"13 Apr 202 220:00:00",
        duration:"3 hours",
      }
    ]
  }
  return (
    <PracticeComponent data={data}/>
  )
}
