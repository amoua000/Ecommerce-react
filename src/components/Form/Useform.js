import { useState } from 'react'

const Useform = validate => {
          const [values, setValues] = useState({
                    firstName: '',
                    email: '',
                    comments: ''

          });
          const [errors, setErrors] = useState({

          })

          const handleChange = e => {
                    const { name, value} = e.target
                    setValues({
                              ...values,
                              [name] : value
                    });
          };

          const handleSubmit = e =>{
                    e.preventDefault();

                    setErrors(validate(values));

          }; 

          return {handleChange, values, handleSubmit, errors };
};

export default Useform 