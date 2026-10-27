import AppSidebar from "../components/AppSidebar";

import{
    posts
}from"../data/posts";

import{
    Settings,
    Grid3X3
}from "lucide-react";

function Profile(){
    return (
        <div className= " app-shell compact-shell">
            <AppSidebar/>
            <main className="wide-page">
                <section className="profile-head">
                    <div className="profile-avatar">
                         🐾
                    </div>
                <div className="profile-info">
                    <div className="profile-title-row">
                        <div>
                            <h1>
                                My Petify
                            </h1>
                            <p>
                                @petify.user
                            </p>
                        </div>
                        <button>
                            <settings 
                                size={18}
                            />
                            Edit Profile
                        </button>
                    </div>
                    <div className="profile-stats">
                        <span>
                            <b>
                                24
                            </b>
                            posts
                        </span>
                        <span>
                            <b>
                                4.2k
                            </b>
                            followers
                        </span>
                        <span>
                            <b>
                                381
                            </b>
                            following
                        </span>
                    </div>
                    <p className="profile-bio">
                        🐾 Animal lover,
                        Sharing their world
                        one story at a time.
                    </p>
                </div>
                </section>
                <div className="profile-tab">
                    <Grid3X3
                    size={18}
                    />
                    Posts

                </div>
                <div className="profile-grid">
                    {
                        posts.map(
                            post => (
                                <div className="profile-post"
                                key={post.id}
                                >
                                <img
                                    src={post.image}
                                    alt={post.petName}
                                />
                                <div>
                                   ❤️ {post.like}
                                </div>
                            </div>
                            )
                        )
                    }

                </div>
            </main>
        </div>
    );

}

export default Profile;