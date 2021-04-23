import React, { useState } from "react";
import { Link, Switch, Route } from 'react-router-dom'
import Home from './Home'
import Form from './Form'
import Confirmation from './Confirmation'



const initialFormValues = {
  name: '',
  size: '',
  pepperoni: '',
  bacon: '',
  mushrooms: '',
  pineapple: '',
  instructions: '',
}

const initialCustomerList = [];

export default function App() {
  const [ CustomerList, setCustomerList ]  = useState(initialCustomerList)
  const [ formValues, setFormValues ] = useState(initialFormValues);

  const change = (name, value) => {
    setFormValues({...formValues, [name]: value})
  }

  const submit = () => {
    const newCustomer = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      pepperoni: formValues.pepperoni.trim(),
      bacon: formValues.bacon.trim(),
      mushrooms: formValues.mushrooms.trim(),
      pineapple: formValues.pineapple.trim(),
      instructions: formValues.instructions.trim()
    }

    setCustomerList([...CustomerList, newCustomer])
    setFormValues(initialFormValues)

  }



  return (
    <>
      <nav>
        <h1>Lambda Eats</h1>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/pizza'>Order Now</Link>
        </div>
      </nav>

      <Switch>
        <Route path='/confirmation/:id'>
          <Confirmation />
        </Route>
        <Route path='/pizza'>
          <Form values={formValues} change={change} submit={submit} />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>

    </>
  );
}
