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
        <aside className="app-sidebar">
            <Link
                to ="/"
                className="side-logo"
            >
                <span className= "logo-bubble">
                    <PawPrint
                        size={22}
                    />
                </span>
                <span>
                    Petify
                </span>
            </Link>

            <nav className="siderbar-nav">
                <NavLink to= "/feed">
                <House/>
                <span>
                    Home
                </span>
                </NavLink>

                <NavLink to="/explore">
                <Compass/>
                <span>
                    Explore
                </span>
                </NavLink>

                <NavLink to= "/animals">
                <PawPrint/>
                <span>
                    Animals
                </span>
                </NavLink>

                <button
                    onClick={onCreate}
                >
                    <PlusSquare/>
                    <span>
                        Create
                    </span>
                </button>

                <NavLink to= "/notifications">
                <Bell/>
                <span>
                    Notifications
                </span>
                </NavLink>

                <NavLink to="/saved">
                <Bookmark/>
                <span>
                    Saved
                </span>
                </NavLink>

                <NavLink to="/profile/me">
                <User/>
                <span>
                    Profile
                </span>
                </NavLink>
                </nav>
                </aside>

    );
}

export default AppSidebar;