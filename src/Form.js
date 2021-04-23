import React from "react";


export default function Form(props) {
    const { values, change, submit } = props

    const toChange = (evt) => {
        const { name, value } = evt.target
        change(name, value)
    }

    const toSubmit = (evt) => {
        evt.preventDefault()
        submit()
    }


    return(
        <>
            <img 
                src='https://images.unsplash.com/photo-1561350111-7daa4f284bc6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                alt='pizza in oven'
            />
            <h2>Build Your Own Pizza</h2>
            <form id='pizza-form' onSubmit={toSubmit}>
                <div className='form-container'>
                    <label> Name:
                        <input
                            type='text'
                            name='name'
                            value={values.name}
                            onChange={toChange}
                            placeholder='Enter Name'
                        />
                    </label>

                    <label> Size:
                        <select name='size' value={values.size} onChange={toChange}>
                            <option value=''>-- Select a size --</option>
                            <option value='small'>Small</option>
                            <option value='medium'>Medium</option>
                            <option value='large'>Large</option>
                        </select>
                    </label>

                    <label> 
                        <input 
                            type='checkbox'
                            name='pepperoni'
                            value={values.pepperoni}
                            onChange={toChange}    
                        />
                        Pepperoni
                    </label>
                    <label> 
                        <input 
                            type='checkbox'
                            name='bacon'
                            value={values.bacon}
                            onChange={toChange}    
                        />
                        Bacon
                    </label>
                    <label> 
                        <input 
                            type='checkbox'
                            name='mushrooms'
                            value={values.mushrooms}
                            onChange={toChange}    
                        />
                        Mushrooms
                    </label>
                    <label> 
                        <input 
                            type='checkbox'
                            name='pineapple'
                            value={values.pineapple}
                            onChange={toChange}    
                        />
                        Pineapple
                    </label>

                    <label> Special Instructions:
                        <input
                            type='text'
                            name='instructions'
                            value={values.instructions}
                            onChange={toChange}
                            placeholder='Enter Name'
                        />
                    </label>
                    <button>Submit Order</button>
                </div>
            </form>
        </>
    );
}