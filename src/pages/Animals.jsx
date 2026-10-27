import AppSidebar
    from "../components/AppSidebar";


import {
    animals
} from "../data/animals";


function Animals() {

    return (

        <div className="app-shell compact-shell">


            <AppSidebar />


            <main className="wide-page wildlife-page">


                <div className="page-heading animal-heading">

                    <span>
                        WILD PETIFY
                    </span>

                    <h1>
                        Meet the animals
                        beyond our homes.
                    </h1>

                    <p>

                        Explore species,
                        understand their habitats,
                        and learn about the challenges
                        they face in the wild.

                    </p>

                </div>


                <div className="animal-grid">


                    {
                        animals.map(

                            animal => (

                                <article
                                    className="animal-info-card"
                                    key={animal.id}
                                >


                                    <div className="animal-image-wrap">


                                        <img
                                            src={animal.image}
                                            alt={animal.name}
                                            className="animal-photo"
                                        />


                                        <span className="animal-emoji">

                                            {animal.emoji}

                                        </span>


                                        <span className="status-pill">

                                            {animal.status}

                                        </span>


                                    </div>


                                    <div className="animal-body">


                                        <span className="animal-number">

                                            0{animal.id}

                                        </span>


                                        <h2>
                                            {animal.name}
                                        </h2>


                                        <i>
                                            {animal.scientificName}
                                        </i>


                                        <div className="animal-facts">


                                            <p>

                                                <b>
                                                    Habitat
                                                </b>

                                                <span>
                                                    {animal.habitat}
                                                </span>

                                            </p>


                                            <p>

                                                <b>
                                                    Main threat
                                                </b>

                                                <span>
                                                    {animal.threat}
                                                </span>

                                            </p>


                                        </div>


                                        <button>
                                            Discover their story →
                                        </button>


                                    </div>


                                </article>

                            )

                        )
                    }


                </div>


            </main>


        </div>

    );

}


export default Animals;