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


function Signup() {

    const navigate =
        useNavigate();


    const [
        showPassword,
        setShowPassword
    ] = useState(false);


    const [
        form,
        setForm
    ] = useState({

        name: "",

        email: "",

        username: "",

        password: "",

        confirmPassword: ""

    });



    function change(
        event
    ) {

        setForm({

            ...form,

            [event.target.name]:
                event.target.value

        });

    }



    function submit(
        event
    ) {

        event.preventDefault();


        if (
            form.password !==
            form.confirmPassword
        ) {

            alert(
                "Passwords do not match."
            );

            return;

        }


        localStorage.setItem(

            "petifyUser",

            JSON.stringify({

                name:
                    form.name,

                email:
                    form.email,

                username:
                    form.username

            })

        );


        navigate("/feed");

    }



    return (

        <div className="auth-page">


            <div className="auth-card">


                <div className="auth-visual">


                    <img
                        src="/images/pets/signup.jpg"
                        alt="Petify signup"
                    />


                    <div className="auth-gradient"></div>


                    <div className="auth-overlay">


                        <div className="auth-paw-icon">

                            <PawPrint
                                size={34}
                            />

                        </div>


                        <span>
                            JOIN THEIR WORLD
                        </span>


                        <h1>
                            Every paw deserves a profile.
                        </h1>


                        <p>

                            Create their little
                            corner of Petify
                            and start sharing
                            their world.

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
                        Create your account
                    </h2>


                    <p className="muted">

                        One account.
                        A whole world of paws.

                    </p>


                    <form
                        onSubmit={submit}
                    >


                        <label>

                            Full name

                            <input
                                name="name"
                                value={form.name}
                                onChange={change}
                                placeholder="Your full name"
                                required
                            />

                        </label>


                        <label>

                            Email

                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={change}
                                placeholder="you@example.com"
                                required
                            />

                        </label>


                        <label>

                            Username

                            <input
                                name="username"
                                value={form.username}
                                onChange={change}
                                placeholder="@yourusername"
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
                                    name="password"
                                    value={form.password}
                                    onChange={change}
                                    placeholder="Create password"
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


                        <label>

                            Confirm password

                            <input
                                type="password"
                                name="confirmPassword"
                                value={
                                    form.confirmPassword
                                }
                                onChange={change}
                                placeholder="Repeat password"
                                required
                            />

                        </label>


                        <button
                            className="auth-submit"
                        >

                            Enter Petify 🐾

                        </button>


                    </form>


                    <p className="auth-switch">

                        Already part of Petify?

                        {" "}

                        <Link to="/login">

                            Login

                        </Link>

                    </p>


                </div>


            </div>


        </div>

    );

}


export default Signup;