import{
    NavLink,
    Link
} from "react-router-dom";

import{
    PawPrint,
    House,
    Compass,
    PlusSquare,
    Bell,
    Bookmark,
    User
} from "lucide-react";

function AppSidebar({
    onCreate
}){
    return(
        <>
        <aside className="app-sidebar">
            <Link
                to="/"
                className="sidebar-logo"
            >
                <span className="logo-bubble">
                    <PawPrint
                        size={22}
                    />
                </span>
                <span>
                    Petify
                </span>
            </Link>

            <nav className="sidebar-nav">
                <NavLink to="/feed">
                    <House size={20}/>
                    <span>Home</span>
                </NavLink>

                <NavLink to="/explore">
                    <Compass size={20}/>
                    <span>Explore</span>
                </NavLink>

                <NavLink to="/animals">
                    <PawPrint size={20}/>
                    <span>Animals</span>
                </NavLink>

                <button onClick={onCreate}>
                    <PlusSquare size={20}/>
                    <span>Create</span>
                </button>

                <NavLink to="/notifications">
                    <Bell size={20}/>
                    <span>Notifications</span>
                </NavLink>

                <NavLink to="/saved">
                    <Bookmark size={20}/>
                    <span>Saved</span>
                </NavLink>

                <NavLink to="/profile/me">
                    <User size={20}/>
                    <span>Profile</span>
                </NavLink>
            </nav>
        </aside>

        <nav className="mobile-bottom-nav">
            <NavLink to="/feed">
                <House size={22}/>
                <span>Home</span>
            </NavLink>
            <NavLink to="/explore">
                <Compass size={22}/>
                <span>Explore</span>
            </NavLink>
            <button onClick={onCreate}>
                <PlusSquare size={22}/>
                <span>Create</span>
            </button>
            <NavLink to="/notifications">
                <Bell size={22}/>
                <span>Notifs</span>
            </NavLink>
            <NavLink to="/profile/me">
                <User size={22}/>
                <span>Profile</span>
            </NavLink>
        </nav>
        </>
    );
}

export default AppSidebar;