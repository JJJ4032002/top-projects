import { useState } from 'react';
import './App.css';
import GenericForm from "./components/GenericForm/GenericForm.jsx";

function App() {

    const fields = [
        {name: 'firstName', label:'First Name', type: 'text'},
        {name: 'lastName', label: 'Last Name', type: 'text'},
        {name: 'myEmail', label: 'Email', type: 'email'},
    ]

    const handleSubmit = (formData) => {
        console.log('Form data: ', formData);
    }

  return (
   <>
   <GenericForm fields={fields} onSubmit={handleSubmit}></GenericForm>
   </>
  )
}

export default App
