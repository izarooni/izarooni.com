import Image from 'next/image';
import Project from '../../components/layouts/project';

export default function render() {
    return (
        <Project props={{
            title: 'Epiphany | Ian Conyers | izarooni',
            header: 'Epiphany',
            subtitle: 'My first website using Laravel — created in 2018',
            description: 'Epiphany is the first website I created using Laravel, a PHP framework in 2015'
        }}>
            <section className="section">
                <h1 className="title">Design</h1>
                <div className="columns is-vcentered">
                    <div className="column">
                        <figure>
                            <Image src="/projects/epiphany/thumbnail.jpg" alt="Screenshot of the design" width={1020} height={1000}></Image>
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
                            <Image src="/projects/epiphany/product.jpg" alt="Screenshot of the website in production" width={1230} height={976}></Image>
                            <figcaption className="is-italic">Screenshot of the website in production</figcaption>
                        </figure>
                    </div>
                </div>
            </section>
        </Project>
    );
};