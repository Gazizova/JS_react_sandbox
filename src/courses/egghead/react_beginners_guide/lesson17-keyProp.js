import React from 'react'

export default class Lesson17 extends React.Component{
static allItems = [
    {id: 'a', value: 'apple'},
    {id: 'o', value: 'orange'},
    {id: 'g', value: 'grape'},
    {id: 'p', value: 'pear'},
  ]
  render(){
      return(
          <div className="lesson">
              <h3> Lesson 17:</h3>
              {Lesson17.allItems.map(i => (
                  <div key={i.id}>{i.value}</div>
              ))}
          </div>
      )
  }
}