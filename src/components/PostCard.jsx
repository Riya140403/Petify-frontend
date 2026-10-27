import {
    useState
} from "react";


import {
    Heart,
    MessageCircle,
    Send,
    Bookmark,
    MoreHorizontal
} from "lucide-react";


function PostCard({
    post
}) {

    const [
        liked,
        setLiked
    ] = useState(false);


    const [
        saved,
        setSaved
    ] = useState(false);


    const [
        comment,
        setComment
    ] = useState("");


    const [
        comments,
        setComments
    ] = useState([]);



    function addComment(event) {

        event.preventDefault();

        if (
            comment.trim() === ""
        ) {

            return;

        }

        setComments([
            ...comments,
            comment
        ]);

        setComment("");

    }



    return (

        <article className="post-card">


            <div className="post-header">


                <div className="post-user">


                    <img
                        src={post.avatar}
                        alt={post.petName}
                        className="post-avatar"
                    />


                    <div>

                        <strong>
                            {post.petName}
                        </strong>

                        <span>
                            @{post.username}
                        </span>

                        <small>
                            {post.location}
                        </small>

                    </div>

                </div>


                <MoreHorizontal
                    size={22}
                />

            </div>



            <img
                src={post.image}
                alt={post.petName}
                className="post-photo"
            />



            <div className="post-actions">


                <div>


                    <button

                        className={
                            liked
                                ? "liked"
                                : ""
                        }

                        onClick={() =>
                            setLiked(
                                !liked
                            )
                        }
                    >

                        <Heart

                            size={27}

                            fill={
                                liked
                                    ? "currentColor"
                                    : "none"
                            }

                        />

                    </button>


                    <button>

                        <MessageCircle
                            size={26}
                        />

                    </button>


                    <button>

                        <Send
                            size={25}
                        />

                    </button>

                </div>


                <button

                    className={
                        saved
                            ? "saved"
                            : ""
                    }

                    onClick={() =>
                        setSaved(
                            !saved
                        )
                    }
                >

                    <Bookmark

                        size={26}

                        fill={
                            saved
                                ? "currentColor"
                                : "none"
                        }

                    />

                </button>

            </div>



            <div className="post-content">


                <strong>

                    {
                        post.likes +
                        (liked ? 1 : 0)
                    }

                    {" "}
                    likes

                </strong>


                <p>

                    <b>
                        {post.petName}
                    </b>

                    {" "}

                    {post.caption}

                </p>


                {
                    comments.map(
                        (
                            item,
                            index
                        ) => (

                            <p
                                key={index}
                                className="user-comment"
                            >

                                <b>
                                    you
                                </b>

                                {" "}

                                {item}

                            </p>

                        )
                    )
                }


                <form
                    className="comment-form"
                    onSubmit={addComment}
                >

                    <input

                        type="text"

                        value={comment}

                        onChange={
                            event =>
                                setComment(
                                    event.target.value
                                )
                        }

                        placeholder="Add a comment..."

                    />


                    <button>
                        Post
                    </button>

                </form>


            </div>

        </article>

    );

}


export default PostCard;