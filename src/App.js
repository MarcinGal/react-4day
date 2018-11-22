import React from 'react'
import Counter from './Counter'
import Form from './Form'
import SecondForm from './SecondForm'
import Users from './Users'
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
    </div>
)

export default App
