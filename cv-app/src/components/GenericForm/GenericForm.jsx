import { useState } from "react";
import './GenericForm.css'

function GenericForm({ fields, onSubmit }) {
    const [form, setForm] = useState({});

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        console.log("Form: ", form)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(form);
    };

    return (
        <form onSubmit={handleSubmit}>
            {fields.map((field) => (
                <div className={'wrapperDiv'} key={field.name}>
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
    );
}

export default GenericForm;