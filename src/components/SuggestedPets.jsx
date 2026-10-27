import {
    useState
} from "react";


const pets = [

    {
        id: 1,
        emoji: "🐶",
        name: "Charlie",
        username:
            "charlie.paws"
    },

    {
        id: 2,
        emoji: "🐱",
        name: "Simba",
        username:
            "simba.cat"
    },

    {
        id: 3,
        emoji: "🐰",
        name: "Snowy",
        username:
            "snowy.bunny"
    }

];


function SuggestedPet({
    pet
}) {

    const [
        following,
        setFollowing
    ] = useState(false);


    return (

        <div className="suggestion-item">

            <div className="suggestion-avatar">
                {pet.emoji}
            </div>

            <div className="suggestion-info">

                <strong>
                    {pet.name}
                </strong>

                <span>
                    @{pet.username}
                </span>

            </div>

            <button
                className="follow-button"

                onClick={() =>
                    setFollowing(
                        !following
                    )
                }
            >

                {
                    following
                        ? "Following"
                        : "Follow"
                }

            </button>

        </div>

    );

}


function SuggestedPets() {

    return (

        <aside className="suggestions">

            <h3>
                Suggested for you
            </h3>

            {
                pets.map(
                    pet => (

                        <SuggestedPet
                            key={pet.id}
                            pet={pet}
                        />

                    )
                )
            }

        </aside>

    );

}


export default SuggestedPets;

