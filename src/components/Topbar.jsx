import {
    Search,
    Bell
} from "lucide-react";


import {
    Link
} from "react-router-dom";


function Topbar({
    query,
    setQuery
}) {

    return (

        <div className="topbar">

            <div className="top-search">

                <Search
                    size={18}
                />

                <input

                    value={query}

                    onChange={
                        event =>
                            setQuery(
                                event.target.value
                            )
                    }

                    placeholder="Search paws, stories and animals..."

                />

            </div>


            <Link
                to="/notifications"
                className="round-icon"
            >

                <Bell
                    size={20}
                />

            </Link>

        </div>

    );

}


export default Topbar;