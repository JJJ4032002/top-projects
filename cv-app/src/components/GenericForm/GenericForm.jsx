import { useState } from "react";
import "./GenericForm.css";

function GenericForm({ fields, onSubmit, title = '' }) {
    const [form, setForm] = useState({});

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form: ", form);
        onSubmit(form);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h3>{title}</h3>
                {fields.map((field) => (
                    <div className={"wrapperDiv"} key={field.name}>
                        <label htmlFor={field.name}>{field.label}</label>
                        <input
                            type={field.type}
                            name={field.name}
                            value={form[field.name] || ""}
                            onChange={handleChange}
                        />
                    </div>
                ))}
                <button type="submit">Submit section</button>
            </form>
        </>
    );
}

export default GenericForm;
