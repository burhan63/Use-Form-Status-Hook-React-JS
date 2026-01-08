import { useFormStatus } from "react-dom";

function UserJSX() {

    const HandleSubmit = async () => {
        await new Promise(res => setTimeout(res, 2000));
        console.log("Form Submitted..!!");
    }

    function CustomForm() {
        const { pending } = useFormStatus();
        return (
            <div>
                    <input type="text" placeholder="Enter Username" />
                    <br /><br />
                    <input type="text" placeholder="Enter Password" />
                    <br /><br />
                    <button disabled={pending}>{pending ? 'Submitting..!!' : 'Submit'}</button>
            </div>
        )
    }

    return (
        <div>
            <h1>
                Use Form Status Hook - React JS
            </h1>
            <form action={HandleSubmit}>
                <CustomForm />
            </form>
        </div>
    )
}

export default UserJSX;