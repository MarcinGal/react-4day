import React from 'react'
import Counter from './Counter'
import Form from './Form'
import SecondForm from './SecondForm'
import Users from './Users'
import Users2 from './Users2'
const App = (props) => (
    <div>
        <Counter
            startValue={5}
            // min={-10}
            // max={10}
        />
         <Form
         />

         <SecondForm
         />
         <Users/>
         <Users2/>
    </div>
)

export default App
