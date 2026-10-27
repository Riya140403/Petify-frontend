import {
    Link
} from "react-router-dom";


import {
    ArrowRight,
    PawPrint,
    Heart,
    Sparkles,
    HeartHandshake,
    ShieldCheck,
    Camera,
    Globe2
} from "lucide-react";


function Landing() {

    return (

        <div className="landing-page">


            <header className="landing-nav">


                <Link
                    to="/"
                    className="brand"
                >

                    <span className="logo-bubble">

                        <PawPrint
                            size={22}
                        />

                    </span>

                    Petify

                </Link>


                <nav>

                    <a href="#features">
                        Features
                    </a>

                    <a href="#rescue">
                        Rescue
                    </a>

                    <a href="#mission">
                        Mission
                    </a>

                    <Link to="/animals">
                        Wildlife
                    </Link>

                </nav>


                <div className="landing-actions">

                    <Link
                        to="/login"
                        className="text-link"
                    >

                        Login

                    </Link>


                    <Link
                        to="/signup"
                        className="nav-cta"
                    >

                        Join Petify

                    </Link>

                </div>

            </header>



            <main>


                <section className="landing-hero">


                    <div className="hero-copy">


                        <span className="eyebrow">

                            <Sparkles
                                size={16}
                            />

                            THE INTERNET'S ANIMAL WORLD

                        </span>


                        <h1>

                            Every Paw

                            <em>
                                Has A Story.
                            </em>

                        </h1>


                        <p>

                            Petify is a social world
                            where pets become personalities,
                            everyday memories become stories,
                            and animals that need help
                            get a voice.

                        </p>


                        <div className="hero-buttons">


                            <Link
                                to="/signup"
                                className="primary-btn hero-main-btn"
                            >

                                Enter Petify

                                <ArrowRight
                                    size={18}
                                />

                            </Link>


                            <Link
                                to="/feed"
                                className="secondary-btn"
                            >

                                Explore the Feed

                            </Link>

                        </div>


                        <div className="hero-proof">


                            <div className="proof-icons">

                                🐶 🐱 🐰 🐾

                            </div>


                            <div>

                                <strong>
                                    A world built for them.
                                </strong>

                                <span>
                                    Pets • Wildlife • Rescue
                                </span>

                            </div>


                        </div>

                    </div>



                    <div className="hero-visual">


                        <div className="hero-art-card">


                            <div className="hero-photo-shell">

                                <img
                                    src="/images/pets/hero.jpg"
                                    alt="Happy pet on Petify"
                                />

                            </div>


                            <div className="hero-photo-gradient"></div>


                            <div className="hero-photo-caption">

                                <span>
                                    TODAY ON PETIFY
                                </span>

                                <h3>
                                    Bruno found his
                                    new favourite park.
                                </h3>

                            </div>


                            <div className="floating-heart">

                                <Heart
                                    size={20}
                                    fill="currentColor"
                                />

                                <span>
                                    2.8K
                                </span>

                            </div>


                            <div className="floating-paw-card">

                                🐾

                                <div>

                                    <strong>
                                        8K+ stories
                                    </strong>

                                    <span>
                                        and counting
                                    </span>

                                </div>

                            </div>

                        </div>


                        <div className="hero-orbit orbit-one">
                            🐱
                        </div>

                        <div className="hero-orbit orbit-two">
                            🐰
                        </div>

                    </div>


                </section>



                <section
                    className="feature-section"
                    id="features"
                >


                    <div className="section-heading">

                        <span>
                            PETIFY IS DIFFERENT
                        </span>

                        <h2>

                            More than another
                            social network.

                        </h2>

                        <p>

                            One platform connecting
                            everyday pet life,
                            animal discovery
                            and meaningful awareness.

                        </p>

                    </div>


                    <div className="feature-grid">


                        <article className="feature-card feature-orange">

                            <div className="feature-icon">

                                <Camera />

                            </div>

                            <span>
                                01
                            </span>

                            <h3>
                                Their Daily World
                            </h3>

                            <p>

                                Create pet profiles,
                                share their moments,
                                build stories and
                                celebrate their personality.

                            </p>

                        </article>


                        <article className="feature-card feature-green">

                            <div className="feature-icon">

                                <Globe2 />

                            </div>

                            <span>
                                02
                            </span>

                            <h3>
                                Discover Animals
                            </h3>

                            <p>

                                Explore wildlife,
                                understand habitats
                                and discover species
                                beyond your everyday world.

                            </p>

                        </article>


                        <article className="feature-card feature-pink">

                            <div className="feature-icon">

                                <HeartHandshake />

                            </div>

                            <span>
                                03
                            </span>

                            <h3>
                                Give Them A Voice
                            </h3>

                            <p>

                                Share rescue stories
                                and bring attention
                                to animals that need
                                care, adoption and protection.

                            </p>

                        </article>


                    </div>


                </section>



                <section
                    className="social-showcase"
                >


                    <div className="social-showcase-copy">


                        <span className="section-kicker">

                            THE SOCIAL SIDE

                        </span>


                        <h2>

                            Instagram energy.

                            <em>
                                Petify soul.
                            </em>

                        </h2>


                        <p>

                            Stories, likes, comments,
                            profiles and discovery —
                            redesigned around animals
                            instead of people.

                        </p>


                        <Link
                            to="/feed"
                            className="dark-btn"
                        >

                            Open Pet Feed

                            <ArrowRight
                                size={18}
                            />

                        </Link>

                    </div>



                    <div className="mock-feed-card">


                        <div className="mock-feed-header">


                            <img
                                src="/images/pets/bruno.jpg"
                                alt="Bruno"
                            />


                            <div>

                                <strong>
                                    Bruno
                                </strong>

                                <span>
                                    @bruno.goodboy
                                </span>

                            </div>


                            <span className="mock-dots">
                                •••
                            </span>

                        </div>


                        <img
                            src="/images/pets/bruno.jpg"
                            alt="Bruno social post"
                            className="mock-main-photo"
                        />


                        <div className="mock-actions">

                            <div>

                                <Heart
                                    fill="currentColor"
                                />

                                <span>
                                    2,846
                                </span>

                            </div>

                            <span>
                                💬 126
                            </span>

                            <span>
                                🔖
                            </span>

                        </div>


                        <p className="mock-caption">

                            <b>
                                Bruno
                            </b>

                            {" "}

                            Today I discovered
                            the best park ever! 🌿🐾

                        </p>


                    </div>


                </section>



                <section
                    className="rescue-section"
                    id="rescue"
                >


                    <div className="rescue-image-column">


                        <div className="rescue-photo-frame">


                            <img
                                src="/images/rescue/rescue-dogs.jpg"
                                alt="Rescued dogs"
                            />


                            <div className="rescue-photo-overlay"></div>


                            <div className="rescue-photo-label">

                                <HeartHandshake />

                                <div>

                                    <span>
                                        PETIFY RESCUE
                                    </span>

                                    <strong>
                                        Every life matters.
                                    </strong>

                                </div>

                            </div>

                        </div>


                        <div className="rescue-stat-card">

                            <strong>
                                ❤️
                            </strong>

                            <div>

                                <b>
                                    Another chance
                                </b>

                                <span>
                                    can change an entire life.
                                </span>

                            </div>

                        </div>


                    </div>



                    <div className="rescue-content">


                        <span className="section-kicker">

                            RESCUE • CARE • ADOPTION

                        </span>


                        <h2>

                            Not every story
                            starts with a happy home.

                        </h2>


                        <p>

                            Petify gives rescue and
                            shelter animals space
                            alongside everyday pet stories.

                            Their journeys deserve
                            attention too.

                        </p>


                        <div className="rescue-points">


                            <div>

                                <span>
                                    01
                                </span>

                                <p>
                                    Share rescue stories
                                    and recovery journeys.
                                </p>

                            </div>


                            <div>

                                <span>
                                    02
                                </span>

                                <p>
                                    Encourage responsible
                                    adoption and animal care.
                                </p>

                            </div>


                            <div>

                                <span>
                                    03
                                </span>

                                <p>
                                    Help important stories
                                    reach animal lovers.
                                </p>

                            </div>


                        </div>


                        <Link
                            to="/rescue"
                            className="primary-btn"
                        >

                            Explore Rescue

                            <ArrowRight
                                size={18}
                            />

                        </Link>


                    </div>


                </section>



                <section
                    className="wildlife-showcase"
                >


                    <div className="wildlife-heading">


                        <span>
                            BEYOND OUR HOMES
                        </span>


                        <h2>

                            Their world is
                            bigger than ours.

                        </h2>


                        <p>

                            Discover wildlife,
                            understand their threats
                            and learn why protection
                            matters.

                        </p>

                    </div>


                    <div className="wildlife-preview-grid">


                        <Link
                            to="/animals"
                            className="wild-preview"
                        >

                            <img
                                src="/images/wildlife/tiger.jpg"
                                alt="Bengal Tiger"
                            />

                            <div>

                                <span>
                                    ENDANGERED
                                </span>

                                <h3>
                                    Bengal Tiger
                                </h3>

                            </div>

                        </Link>


                        <Link
                            to="/animals"
                            className="wild-preview"
                        >

                            <img
                                src="/images/wildlife/elephant.jpg"
                                alt="Asian Elephant"
                            />

                            <div>

                                <span>
                                    ENDANGERED
                                </span>

                                <h3>
                                    Asian Elephant
                                </h3>

                            </div>

                        </Link>


                        <Link
                            to="/animals"
                            className="wild-preview"
                        >

                            <img
                                src="/images/wildlife/rhino.jpg"
                                alt="Indian Rhino"
                            />

                            <div>

                                <span>
                                    VULNERABLE
                                </span>

                                <h3>
                                    Indian Rhino
                                </h3>

                            </div>

                        </Link>


                        <Link
                            to="/animals"
                            className="wild-preview"
                        >

                            <img
                                src="/images/wildlife/turtle.jpg"
                                alt="Sea Turtle"
                            />

                            <div>

                                <span>
                                    THREATENED
                                </span>

                                <h3>
                                    Sea Turtle
                                </h3>

                            </div>

                        </Link>


                    </div>


                </section>



                <section
                    className="mission-section"
                    id="mission"
                >


                    <PawPrint
                        size={44}
                    />


                    <span>
                        OUR MISSION
                    </span>


                    <h2>

                        A digital world
                        where every animal matters.

                    </h2>


                    <p>

                        From a puppy's first walk
                        to the conservation of
                        an endangered tiger,
                        Petify connects people
                        through the stories
                        animals cannot tell themselves.

                    </p>


                    <Link
                        to="/signup"
                        className="mission-button"
                    >

                        Create Your Petify

                        <ArrowRight
                            size={18}
                        />

                    </Link>


                </section>


            </main>



            <footer className="premium-footer">


                <div className="footer-brand">

                    <span className="logo-bubble">

                        <PawPrint
                            size={22}
                        />

                    </span>


                    <div>

                        <strong>
                            Petify
                        </strong>

                        <span>
                            Every paw has a story.
                        </span>

                    </div>

                </div>


                <div className="footer-links">

                    <Link to="/feed">
                        Feed
                    </Link>

                    <Link to="/animals">
                        Wildlife
                    </Link>

                    <Link to="/rescue">
                        Rescue
                    </Link>

                    <Link to="/signup">
                        Join
                    </Link>

                </div>


                <p>

                    © 2026 Petify.
                    Built for animals
                    and the people who love them.

                </p>


            </footer>
            <p className="developer-credit">
                Designed & Developed by Rittwika Samanta
            </p>


        </div>

    );

}


export default Landing;