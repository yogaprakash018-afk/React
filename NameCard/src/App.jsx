import image from './assets/image.png';

function Info() {
    return (
        <section className="info">
            <img className="profile-photo" src={image} alt="personal-image" />
            <h3 className="name">Yogaprakash</h3>
            <h4 className="title">Full Stack Developer Trainee</h4>
            <div className="actions">
                <button className="btn btn-email">
                    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="m22 7-10 5L2 7" />
                    </svg>
                    Email
                </button>
                <button className="btn btn-linkedin">
                    <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 9.5H5.67V18.5H8.34V9.5ZM7.01 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM18.5 13.3c0-2.3-1.2-3.4-2.9-3.4-1.3 0-1.9.7-2.3 1.2v-1h-2.6v8.4h2.6V13.6c0-.5.1-1 .6-1.3.3-.2.6-.3 1-.3.9 0 1.2.6 1.2 1.6v4.9h2.6v-5.2Z" />
                    </svg>
                    LinkedIn
                </button>
            </div>
        </section>
    );
}

function About() {
    return (
        <section className="section about">
            <h3 className="section-heading">About</h3>
            <p className="section-text">
                I am Yogaprakash learning full stack development, with in-depth understanding of
                Express-based servers, authentication using Passport and sessions, and good
                knowledge of TypeScript. Currently learning React.
            </p>
        </section>
    );
}

function Interests() {
    return (
        <section className="section interests">
            <h3 className="section-heading">Interests</h3>
            <p className="section-text">
                Always liked learning embedded systems and game development, but can't do much
                there yet, not confident with C++. I create models in Blender, and enjoy drawing
                and animation.
            </p>
        </section>
    );
}

function Footer() {
    return (
        <footer className="footer">
            <em className="copyright">&copy; Yogaprakash 2026</em>
            <div className="social-links">
                <a className="social-icon" href="https://github.com/yogaprakash018-afk" aria-label="Github">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.1-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-4.9 0-1.1.4-2 1-2.6-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.7 1a9.3 9.3 0 0 1 4.9 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6.6.6 1 1.5 1 2.6 0 3.8-2.3 4.6-4.6 4.9.4.3.7.9.7 1.8v2.6c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" />
                    </svg>
                </a>
            </div>
        </footer>
    );
}

export default function Page() {
    return (
        <div className="card">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    );
}