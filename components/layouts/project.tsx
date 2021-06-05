import Head from 'next/head';
import dynamic from 'next/dynamic';
import Link from 'next/link';

// Dynamic component without SSR (Sever-side rendering)
const Doodle = dynamic(
    () => import('../doodle-project'),
    { ssr: false }
);

const Project = ({ children, props }: any) => {
    return (
        <>
            <Head>
                <title>{props.title}</title>

                <meta name="og:title" content={props.title} />
                <meta name="og:site_name" content={props.title} />
                <meta name="og:image" content="https://izarooni.com/favicon.ico" />

                <meta name="og:description" content={props.description} />
                <meta name="description" content={props.description} />

                <meta name="robots" content="nofollow, noindex" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta charSet="UTF-8" />

                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossOrigin="anonymous"></link>
            </Head>

            <header>
                <Link href="/">
                    <a><i className="ml-5 is-size-1 fas fa-home"></i></a>
                </Link>

                <Doodle></Doodle>
                <section className="hero section">
                    <h1 className="title">{props.header}</h1>
                    <h4 className="subtitle">{props.subtitle}</h4>
                </section>
            </header>

            <main>
                <div className="container">
                    {children}
                </div>
            </main>
        </>
    );
}

export default Project;