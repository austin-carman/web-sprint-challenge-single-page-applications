import * as yup from 'yup'

export default yup.object().shape({
    name: yup
        .string()
        .required('Name is required for your order')
        .min(2, 'name must be at least 2 characters'),
    size: yup
        .string()
        .oneOf(['small', 'medium', 'large'], 'Please select a size for you pizza'),
    pepperoni: yup.boolean(),
    bacon: yup.boolean(),
    mushrooms: yup.boolean(),
    pineapple: yup.boolean(),
    instructions: yup
        .string(),

})