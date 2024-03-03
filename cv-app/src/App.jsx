import { useState } from "react";
import "./App.css";
import GenericForm from "./components/GenericForm/GenericForm.jsx";
import Header from "./components/Header/Header.jsx";
import fields from "./formFields.js";

function App() {

    const handleSubmit = (formData) => {
        console.log("Form data: ", formData);
    };

    return (
        <div>
            <Header fields={fields.slice(0,4)} onSubmit={handleSubmit} ></Header>
            <GenericForm fields={fields.slice(4)} onSubmit={handleSubmit} title={'Education'}></GenericForm>
        </div>
    );
}

export default App;
