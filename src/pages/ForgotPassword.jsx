import {
    useState
} from "react";


import {
    Link
} from "react-router-dom";


import {
    PawPrint,
    Mail
} from "lucide-react";


function ForgotPassword() {

    const [
        email,
        setEmail
    ] = useState("");


    function submit(
        event
    ) {

        event.preventDefault();

        alert(
            "Frontend demo: OTP would be sent to " +
            email
        );

    }


    return (

        <div className="simple-auth-page">


            <div className="forgot-card">


                <div className="forgot-icon">

                    <PawPrint />

                </div>


                <span className="forgot-kicker">

                    ACCOUNT RECOVERY

                </span>


                <h1>
                    Lost your password?
                </h1>


                <p>

                    Enter your email address.
                    The real OTP system will be
                    connected when we build
                    the backend.

                </p>


                <form
                    onSubmit={submit}
                >


                    <label>

                        Email address

                        <div className="email-input">

                            <Mail
                                size={18}
                            />

                            <input
                                type="email"
                                value={email}
                                onChange={
                                    event =>
                                        setEmail(
                                            event.target.value
                                        )
                                }
                                placeholder="you@example.com"
                                required
                            />

                        </div>

                    </label>


                    <button
                        className="auth-submit"
                    >

                        Send verification code

                    </button>


                </form>


                <Link
                    to="/login"
                    className="back-login"
                >

                    ← Back to login

                </Link>


            </div>


        </div>

    );

}


export default ForgotPassword;