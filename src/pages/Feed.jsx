import {
    useState
} from "react";


import AppSidebar
    from "../components/AppSidebar";

import StoryBar
    from "../components/StoryBar";

import PostCard
    from "../components/PostCard";

import SuggestedPets
    from "../components/SuggestedPets";

import CreatePostModal
    from "../components/CreatePostModal";

import Topbar
    from "../components/Topbar";


import {
    posts
} from "../data/posts";


function Feed() {

    const [
        createOpen,
        setCreateOpen
    ] = useState(false);


    const [
        query,
        setQuery
    ] = useState("");


    const filteredPosts =
        posts.filter(

            post =>

                (
                    post.petName +
                    " " +
                    post.username +
                    " " +
                    post.caption +
                    " " +
                    post.tag
                )

                    .toLowerCase()

                    .includes(
                        query.toLowerCase()
                    )

        );


    return (

        <div className="app-shell">


            <AppSidebar

                onCreate={() =>
                    setCreateOpen(true)
                }

            />


            <main className="feed-column">


                <div className="feed-welcome">

                    <div>

                        <span>
                            GOOD MORNING 🐾
                        </span>

                        <h1>
                            What's happening
                            in their world?
                        </h1>

                    </div>


                    <div className="feed-paw">
                        🐶
                    </div>

                </div>


                <Topbar
                    query={query}
                    setQuery={setQuery}
                />


                <StoryBar />


                <div className="post-list">


                    {
                        filteredPosts.map(

                            post => (

                                <PostCard
                                    key={post.id}
                                    post={post}
                                />

                            )

                        )
                    }


                </div>


            </main>


            <SuggestedPets />


            <CreatePostModal

                open={createOpen}

                onClose={() =>
                    setCreateOpen(false)
                }

            />


        </div>

    );

}


export default Feed;