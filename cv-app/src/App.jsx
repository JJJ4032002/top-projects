import { useState } from "react";
import "./App.css";
import GenericForm from "./components/GenericForm/GenericForm.jsx";
import Header from "./components/Header/Header.jsx";

function App() {
    const fields = [
        { name: "firstName", label: "First Name", type: "text" },
        { name: "lastName", label: "Last Name", type: "text" },
        { name: "myLink", label: "Relevant web link", type: "text" },
        { name: "myEmail", label: "Email", type: "email" },
        {name: "mySchool", label: "School", type: "text"},
        {name: "myDegree", label: "Degree Type", type: "text"},
        {name: "myGradDate", label: "Graduation date", type: "date"},
    ];

    const handleSubmit = (formData) => {
        console.log("Form data: ", formData);
    };

    return (
        <div>
            <Header fields={fields.slice(0,4)} onSubmit={handleSubmit}></Header>
            <GenericForm fields={fields.slice(4)} onSubmit={handleSubmit}></GenericForm>
        </div>
    );
}

export default App;
