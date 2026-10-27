import AppSidebar
    from "../components/AppSidebar";


import {
    HeartHandshake,
    Home,
    Megaphone,
    Heart
} from "lucide-react";


function Rescue() {

    return (

        <div className="app-shell compact-shell">


            <AppSidebar />


            <main className="wide-page rescue-page">


                <section className="rescue-page-hero">


                    <div>


                        <span>
                            PETIFY RESCUE
                        </span>


                        <h1>

                            Every animal deserves
                            another beginning.

                        </h1>


                        <p>

                            Rescue is not only about
                            saving an animal.

                            It is about helping them
                            trust, recover and find
                            a place where they belong.

                        </p>


                    </div>


                    <div className="rescue-page-photo">


                        <img
                            src="/images/rescue/rescue-dogs.jpg"
                            alt="Rescue animals"
                        />


                        <div className="rescue-big-heart">

                            <Heart
                                fill="currentColor"
                            />

                        </div>


                    </div>


                </section>



                <section className="rescue-actions-grid">


                    <article>

                        <HeartHandshake />

                        <h3>
                            Rescue Stories
                        </h3>

                        <p>

                            Give rescued animals
                            a place where their
                            recovery journeys
                            can be shared.

                        </p>

                    </article>


                    <article>

                        <Home />

                        <h3>
                            Adoption Awareness
                        </h3>

                        <p>

                            Help people understand
                            responsible adoption
                            and lifelong care.

                        </p>

                    </article>


                    <article>

                        <Megaphone />

                        <h3>
                            Give Them Reach
                        </h3>

                        <p>

                            Bring visibility
                            to animals and
                            organizations that
                            need attention.

                        </p>

                    </article>


                </section>



                <section className="rescue-quote">

                    <span>
                        🐾
                    </span>

                    <blockquote>

                        "Sometimes a second chance
                        is all it takes
                        to create a forever story."

                    </blockquote>

                    <p>
                        — The idea behind Petify Rescue
                    </p>

                </section>


            </main>


        </div>

    );

}


export default Rescue;