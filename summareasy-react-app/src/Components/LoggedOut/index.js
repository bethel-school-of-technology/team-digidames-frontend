import babydinowaving from "../../images/babydinowaving.jpg";
import Footer from "../Footer";

const LoggedOut = () => {





    return (
        <>
        <div>
            <h1>Successfully Signed Out!</h1>
            <h1>See you next time. Bye!</h1>
            <h1>Thank you!</h1>
            <img
                alt=""
                src={babydinowaving}
                width="600"
                style={{ padding: "10px" }}
            ></img>
        </div>
        <Footer />

        </>
    );

}

export default LoggedOut;