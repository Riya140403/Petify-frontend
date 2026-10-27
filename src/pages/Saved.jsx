import AppSidebar from "../components/AppSidebar";

import{
    Bookmark
}from "lucide-react";

function Saved() {
    return(
        <div className= "app-shell compact-shell">
            <AppSidebar/>
            <main className= "wide-page">
                <div className="page-heading">
                    <span>
                        Your COLLECTION
                    </span>
                    <h1>
                        Saved Stories
                    </h1>
                    <p>
                        The posts you want
                        to come back to.
                    </p>
                </div>
                <div className="empty-state">
                    <div>
                        <Bookmark size={36} />
                    </div>
                    <h2>
                        Nothimg saved yet.
                    </h2>
                    <p>
                        Tap the Bookmark
                        on a petufy postsand you'll 
                        find it here.
                    </p>
                </div>
            </main>
        </div>
    );
}

export default Saved;