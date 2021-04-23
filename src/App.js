import React, { useState } from "react";
import { Link, Switch, Route } from 'react-router-dom'
import Home from './Home'
import Form from './Form'
import Confirmation from './Confirmation'
import * as yup from 'yup'
import schema from './validation/formSchema'
import axios from 'axios'



const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false,
  bacon: false,
  mushrooms: false,
  pineapple: false,
  instructions: '',
}

const initialOrders = [];

const initialFormErrors = {
  name: '',
  size: '',
  instructions: '',
}



export default function App() {
  const [formErrors, setFormErrors ] = useState(initialFormErrors)
  const [ orders, setOrders ]  = useState(initialOrders)
  const [ formValues, setFormValues ] = useState(initialFormValues);

  const change = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({...formErrors, [name]: ''})
      })
      .catch((err) => {
        setFormErrors({...formErrors, [name]: err.errors[0]})
      })
      
      setFormValues({...formValues, [name]: value})
  }

  const submitForm = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      pepperoni: formValues.pepperoni,
      bacon: formValues.bacon,
      mushrooms: formValues.mushrooms,
      pineapple: formValues.pineapple,
      // toppings: ['pepperoni', 'bacon', 'mushrooms', 'pineapple'].filter(topping => formValues[topping]),
      instructions: formValues.instructions.trim(),
    }
    postOrder(newOrder);
  }

  const postOrder = (newOrder) => {
    axios.post('https://reqres.in/api/orders', newOrder)
      .then((res) => {
        setOrders([...orders, res.data])
        setFormValues(initialFormValues)
      })
      .catch((err) => {
        console.log('error:', err);
      })
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
          <Form values={formValues} change={change} submit={submitForm} errors={formErrors} />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>

    </>
  );
}
