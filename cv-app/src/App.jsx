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
        <>
            <h2>Resume Builder</h2>
            <div className={'formDiv'}>
                <Header fields={fields.slice(0, 4)} onSubmit={handleSubmit}></Header>
                <GenericForm fields={fields.slice(4, 7)} onSubmit={handleSubmit} title={"Education"}></GenericForm>
                <GenericForm
                    fields={fields.slice(7, 12)}
                    onSubmit={handleSubmit}
                    title={"Most Recent Work XP"}
                ></GenericForm>
                <GenericForm
                    fields={fields.slice(12)}
                    onSubmit={handleSubmit}
                    title={"Most Recent Work XP"}
                ></GenericForm>
            </div>
        </>
    );
}

export default App;
