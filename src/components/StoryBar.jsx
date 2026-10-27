const stories =[
    {
        name: "Bruno",
        image:
            "/images/pets/bruno.jpg"
    },

    {
        name: "Milo",
        image:
            "/images/pets/milo.jpg"
    },

    {
        name: "Cookie",
        images:
            "/images/pets/cookies.jpg"
    },

    {
        name: "Luna",
        images:
            "/images/pets/luna.jpg"
    }
];

function StoryBar(){
    return(
        <section className="story-bar">
            {
                stories.map(
                    (story) => (
                        <button
                            className= "story"
                            key={story.name}
                        >
                            <div className= "story-ring">
                                <img
                                    src={story.image}
                                    alt={story.name}
                                />
                            </div>
                            <span>
                                {story.name}
                            </span>
                        </button>
                    )
                )
            }
        </section>
    );
}

export default StoryBar;