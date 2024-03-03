import GenericForm from "../GenericForm/GenericForm.jsx";

function Header({fields, onSubmit}) {

    return (
        <>
            <GenericForm fields={fields} onSubmit={onSubmit} title={'Personal information'}></GenericForm>
        </>
    );
}

export default Header;