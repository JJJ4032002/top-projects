import GenericForm from "../GenericForm/GenericForm.jsx";

function Header({fields, onSubmit}) {

    return (
        <>
            <GenericForm fields={fields} onSubmit={onSubmit}></GenericForm>
        </>
    );
}

export default Header;