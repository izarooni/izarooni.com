import Image from 'next/image';
import Project from '../../components/layouts/project';

export default function render() {
    return (
        <Project props={{
            title: 'Epiphany | Ian Conyers | izarooni',
            header: 'Epiphany',
            subtitle: 'My first website using Laravel — created in 2018',
            description: 'Epiphany is the first website I created in 2015 using the PHP framework, Laravel.'
        }}>
            <section className="section">
                <h1 className="title">Design</h1>
                <div className="columns">
                    <div className="column">
                        <figure>
                            <Image src="/projects/epiphany/thumbnail.webp" alt="Screenshot of the design" width={1020} height={1000}></Image>
                            <figcaption className="is-italic">Screenshot of the design</figcaption>
                        </figure>
                    </div>
                    <div className="column content">
                        <p>
                            Ignoring the footer, the design is now split in two sections.
                            <br />
                            The top section will be our banner, displaying the website name and navbar underneath.
                        </p>
                        <p>
                            The phonograph in the top-left with tiny media buttons is to automatically play and control music.
                            I suggested to remove it as users typically never want to hear sounds played without permission.
                            <br />
                            Browsers have the ability to configure this now, I'm not sure if it would matter.
                        </p>
                        <p>
                            For content, the center column showed a <code>updates & news</code>  log, each contained a title and timestamp of when it was created.
                            Notices can be created, modified and deleted by moderators via control panel accessible only to web-admins.
                        </p>
                        <p>
                            This is the design as shown in the PSD given, layers were extracted and I attempted by best to re-created it.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <h1 className="title">Development</h1>
                <div className="columns">
                    <div className="column content">
                        Using Laravel, no longer did I have to use GET methods to parse URLs.
                        Laravel has a built-in Routing API which allowed me to create prettier links.

                        <ul className="my-3">
                            <li>http://example.com/logout</li>
                            <li>http://example.com/register</li>
                            <li>http://example.com/download</li>
                        </ul>

                        There's tools you can easily access and use to run sql, emails, redirecting, validation, hide exceptions and errors, directives for aesthetic code formatting,
                        database models, migration, not to mention it's PHP so you can basically burn the world. The list can just keep going on!
                        <br />
                        <br />
                        There's also a really neat templating tool which allowed for page design inheritance, content yielding and components... So many things.<br />
                        <br />
                        You can apply something called a middleware to certain pages to process information before the page renders.
                        For example, you don't need to boilerplate code for each page that needs authentication.
                        Instead, you list out the pages you want to apply the middleware via the routing system and it will handle it.
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