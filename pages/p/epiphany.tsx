import Head from 'next/head';
import dynamic from 'next/dynamic';
import Link from 'next/link';

// Dynamic component without SSR (Sever-side rendering)
const Doodle = dynamic(
    () => import('../../components/doodle-project'),
    { ssr: false }
);


export default function render() {
    return (
        <>
            <Head>
                <title>Epiphany</title>
                <meta name="description" content="Epiphany is the first website I made using Laravel in 2018." />

                <meta name="robots" content="noindex" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta charSet="UTF-8" />

                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossOrigin="anonymous"></link>
            </Head>

            <header>
                <Link href="/">
                    <a><i className="is-size-1 fas fa-home"></i></a>
                </Link>

                <Doodle></Doodle>
                <section className="hero section">
                    <h1 className="title">Epiphany</h1>
                    <h4 className="subtitle">My first website using Laravel — created in 2018</h4>
                </section>
            </header>

            <main>
                <div className="container-fluid">
                    <section className="section">
                        <h1 className="title">Design</h1>
                        <div className="columns is-vcentered">
                            <div className="column">
                                <figure>
                                    <img className="image mx-auto" src="/projects/epiphany/thumbnail.jpg" alt="Screenshot of the design" />
                                    <figcaption className="is-italic">Screenshot of the design</figcaption>
                                </figure>
                            </div>
                            <div className="column content">
                                The phonograph in the top-left with tiny media buttons is to automatically play music. I suggested to remove it as users typically never want to hear sounds played without consent.<br />
                                <br />
                                The center column showed a news log, each contained a title and timestamp of when it was created. Notices can be created, modified and deleted by moderators via control panel accessible only to web-admins.
                            </div>
                        </div>
                    </section>

                    <section className="section">
                        <h1 className="title">Development</h1>
                        <div className="columns is-vcentered">
                            <div className="column content">
                                No longer did I have to use GET methods to parse URLs. Laravel has a built-in Routing API which allowed me to create prettier links.

                                   <ul className="my-3">
                                    <li>http://example.com/logout</li>
                                    <li>http://example.com/register</li>
                                    <li>http://example.com/download</li>
                                </ul>

                                    You can easily establish database connections, create requests without causing exceptions and errors aren't displayed to users.<br />
                                    There's also a really neat templating tool called Blade which allowed for page design inheritance, content yielding, components, PHP code shortcuts and so much more.<br />
                                <br />
                                    You can apply something called a middleware to certain pages to prevent access. For example, instead of boilerplating code for checking account authentication on certain pages, they go through a middleware. Should the user not be logged-in, they are seamlessly redirected to the home page, or login page before continuing.
                            </div>
                            <div className="column">
                                <figure>
                                    <img className="image mx-auto" src="/projects/epiphany/product.jpg" alt="Screenshot of the website in production" />
                                    <figcaption className="is-italic">Screenshot of the website in production</figcaption>
                                </figure>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
};