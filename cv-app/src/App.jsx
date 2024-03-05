import { useState } from "react";
import "./App.css";
import GenericForm from "./components/GenericForm/GenericForm.jsx";
import Header from "./components/Header/Header.jsx";
import fields from "./formFields.js";
import ResumeDisplay from "./components/resumeDisplay.jsx";

function App() {
    const [isVisible, setVisibility] = useState(false);
    const [visibilityText, setVisibilityText] = useState("Show");
    const [resumeDisplayed, setResumeDisplay] = useState(false);
    const [resumeData, setResumeData] = useState({});

    const handleSubmit = (formData) => {
        console.log("Form data: ", formData);
        setResumeData({ ...resumeData, ...formData });
        return resumeData;
    };

    const changeVisibility = () => {
        setVisibility(!isVisible);
        setVisibilityText(isVisible ? "Show" : "Hide");
    };

    const toogleResume = () => {
        setResumeDisplay(!resumeDisplayed);
        changeVisibility();
    };

    return (
        <>
            <h2>Resume Builder</h2>
            <div className={"formDiv"}>
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
            <button onClick={toogleResume}>{visibilityText} Resume</button>
            {resumeDisplayed && <ResumeDisplay resume={resumeData}></ResumeDisplay>}
        </>
    );
}

export default App;
