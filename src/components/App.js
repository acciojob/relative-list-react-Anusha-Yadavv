import React from 'react'

const App = () => {
  const relatives=['aravind','anu','ram','jay','vamsi']
  return (
    <div id="main">
      <ol key="relativeList">
        {
          relatives.map((relative,index)=>{

            <li key={`relativeListItem+${index+1}`}>{relative}</li>

          })
        }
       
      </ol>
      
    </div>
  )
}

export default App
