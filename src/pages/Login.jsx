import {
    useState
} from "react";


import {
    Link,
    useNavigate
} from "react-router-dom";


import {
    Eye,
    EyeOff,
    PawPrint
} from "lucide-react";


function Login() {

    const navigate =
        useNavigate();


    const [
        showPassword,
        setShowPassword
    ] = useState(false);


    const [
        username,
        setUsername
    ] = useState("");


    const [
        password,
        setPassword
    ] = useState("");



    function login(
        event
    ) {

        event.preventDefault();

        localStorage.setItem(
            "petifyLoggedIn",
            "true"
        );

        navigate("/feed");

    }



    return (

        <div className="auth-page">


            <div className="auth-card">


                <div className="auth-visual">


                    <img
                        src="/images/pets/login.jpg"
                        alt="Petify login"
                    />


                    <div className="auth-gradient"></div>


                    <div className="auth-overlay">


                        <div className="auth-paw-icon">

                            <PawPrint
                                size={34}
                            />

                        </div>


                        <span>
                            WELCOME HOME
                        </span>


                        <h1>
                            Their stories continued while you were away.
                        </h1>


                        <p>

                            Come back to the paws,
                            personalities and stories
                            you love.

                        </p>


                    </div>


                </div>



                <div className="auth-content">


                    <Link
                        to="/"
                        className="back-link"
                    >

                        ← Back to Petify

                    </Link>


                    <div className="auth-brand">

                        <PawPrint />

                        Petify

                    </div>


                    <h2>
                        Welcome back
                    </h2>


                    <p className="muted">

                        The paws have been waiting.

                    </p>


                    <form
                        onSubmit={login}
                    >


                        <label>

                            Username or email

                            <input
                                value={username}
                                onChange={
                                    event =>
                                        setUsername(
                                            event.target.value
                                        )
                                }
                                placeholder="@username or email"
                                required
                            />

                        </label>


                        <label>

                            Password

                            <div className="password-box">

                                <input
                                    type={
                                        showPassword
                                            ? "text"
                                            : "password"
                                    }
                                    value={password}
                                    onChange={
                                        event =>
                                            setPassword(
                                                event.target.value
                                            )
                                    }
                                    placeholder="Your password"
                                    required
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowPassword(
                                            !showPassword
                                        )
                                    }
                                >

                                    {
                                        showPassword
                                            ?
                                            <EyeOff
                                                size={18}
                                            />
                                            :
                                            <Eye
                                                size={18}
                                            />
                                    }

                                </button>

                            </div>

                        </label>


                        <div className="forgot-row">

                            <Link to="/forgot-password">

                                Forgot password?

                            </Link>

                        </div>


                        <button
                            className="auth-submit"
                        >

                            Enter Petify 🐾

                        </button>


                    </form>


                    <p className="auth-switch">

                        New here?

                        {" "}

                        <Link to="/signup">

                            Create account

                        </Link>

                    </p>


                </div>


            </div>


        </div>

    );

}


export default Login;