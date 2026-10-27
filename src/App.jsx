import {
    Routes,
    Route
} from "react-router-dom";

import Landing from "./pages/Landing.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import Feed from "./pages/Feed.jsx";
import Explore from "./pages/Explore.jsx";
import Animals from "./pages/Animals.jsx";
import Rescue from "./pages/Rescue.jsx";
import Profile from "./pages/Profile.jsx";
import Saved from "./pages/Saved.jsx";
import Notifications from "./pages/Notifications.jsx";


function App() {

    return (

        <Routes>

            <Route
                path="/"
                element={<Landing />}
            />

            <Route
                path="/signup"
                element={<Signup />}
            />

            <Route
                path="/login"
                element={<Login />}
            />

            <Route
                path="/forgot-password"
                element={<ForgotPassword />}
            />

            <Route
                path="/feed"
                element={<Feed />}
            />

            <Route
                path="/explore"
                element={<Explore />}
            />

            <Route
                path="/animals"
                element={<Animals />}
            />

            <Route
                path="/rescue"
                element={<Rescue />}
            />

            <Route
                path="/profile/:username"
                element={<Profile />}
            />

            <Route
                path="/saved"
                element={<Saved />}
            />

            <Route
                path="/notifications"
                element={<Notifications />}
            />

        </Routes>

    );

}


export default App;