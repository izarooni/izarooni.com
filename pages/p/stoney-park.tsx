import Image from 'next/image';
import Project from '../../components/layouts/project';

export default function render() {
    return (
        <Project props={{
            title: 'Stoney Park | Ian Conyers | izarooni',
            header: 'Stoney Park Campgrounds',
            subtitle: 'Business Website - created in 2021',
            description: 'For making payments for online reservations at a campground.'
        }}>

            <div className="section">
                <p className="has-text-centered">Visit <a href="https://stoneycampgrounds.com" target="_blank" className="has-text-link">Stoney Campgrounds</a> to see this website in production!</p>

                <h1 className="title">Initial Design</h1>
                <div className="columns">
                    <div className="column content">
                        <p>
                            A typical box-model page layout has three sections: header, content and footer. To keep it simple, I'll call it top, middle and bottom.
                        </p>
                        <p>
                            Our top section will contain eye-catching and important content such as the hero, navbar and login form.
                            <br />
                            Large renders can be optional on some pages (i.e., hero) but content fillers are needed so we'll include it on all pages.
                        </p>
                        <p>
                            It's common for websites to put their logo on the far left of their navbar and login on the far right.
                            Stoney won't have user accounts (aside from web-admins) allowing us to omit the login from the navbar.
                            <br />
                            Instead, web-admins can access login via hyperlink inside the footer.
                            <br />
                            Where the login button was removed, I decided to put the Contact Us link.
                            It's purpose is different from the other pages and I think it's good to have it visible everywhere.
                        </p>
                        <p>
                            Thanks to the templates system, our file structure is much cleaner as pages, components and sub-components can import each other creating a more readable and efficient work flow.
                        </p>
                    </div>
                    <div className="column">
                        <figure>
                            <Image src="/projects/stoney-park/layout.webp" alt="Screenshot of the first design" width={896} height={882} layout="responsive" objectFit="contain"></Image>
                            <figcaption className="is-italic">Screenshot of the design layout</figcaption>
                        </figure>
                    </div>
                </div>
            </div>

            <h1 className="title">Issues</h1>
            <div className="columns">
                <div className="column">
                    <figure>
                        <Image src="/projects/stoney-park/rev2.webp" width={1153} height={1153} layout="responsive" objectFit="contain" />
                        <figcaption className="is-italic">Screenshot of design revision 2</figcaption>
                    </figure>

                    <div className='column content mt-6'>
                        <p>
                            After a year of being in production, a few features have been modified, deprecated and added.
                            <br />
                            <ul>
                                <li>A new button in the far right of the navbar was added. It toggles the website theme between dark and light mode.</li>
                                <li>The CSS framework switched from Bootstrap to Tailwind making transitions, animations and styling so much easier.</li>
                                <li>Rules page had a redesign making it easier to find the content you want using groups, icons and headers.</li>
                                <li><span className='has-text-link'>/campsites</span> now redirects to <span className='has-text-link'>/map</span> to stay consistent with back-end naming schemes.</li>
                                <li>Various layout changes were made to lessen the amount of space wasted on unncessary elements.</li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div className="column content">
                    <p>
                        Each page has too much blank space, not enough words and not enough UI.
                        <br />
                        The easy approach is to create a giant image element that can display text with a decent looking font.
                        <br />
                        <br />
                        There wasn't many processed photos or videos forcing the majority of content for each page to be text or icons.
                        <br />
                        Fortuntely after a few days, I received a video of the campgrounds recorded via their drone. It pans left to right on the horizon, slowly and steadily. This slow pan helps grab the user's attention, and having it smooth makes it satisfying to watch.
                    </p>
                    <p>
                        Other pages needing to display details for rules, amenities and services were filled with as much text as possible.
                        Increased padding and margins helped greatly with spacing paragraphs along with Font Awesome icons to help comprehend blocks of text with just a few quick glances.
                    </p>

                    <figure className='mt-6'>
                        <Image src="/projects/stoney-park/rev3.webp" width={1277} height={1277} layout="responsive" objectFit="contain" />
                        <figcaption className="is-italic">Screenshot of design revision 3 (latest)</figcaption>
                    </figure>
                </div>
            </div>

            <div className="section">
                <h1 className="title">Development</h1>
                <div className="columns is-vcentered">
                    <div className="column content">
                        <h5 className="title">Stripe Integration</h5>
                        <p>
                            Payments are processed via third party api, Stripe. They made it easy to create a "cart" then checkout. The API is straightforward and easy to understand and code examples helped understand the purpose of certain functions.
                            <br />
                            <br />
                            One annoying thing is the checkout system. You can't redirect to Stripe's checkout page on the server side, you have to do it via JavaScript on the client side using their function. This could be avoided using AJAX requests but the checkout system has to be created in PHP due to the framework.
                        </p>
                        <p className='my-6'>
                            <span className='has-text-weight-bold'>Stripe Integration Update 2022</span>
                            <br/>
                            The checkout system has been reworked to use the fetch API. The server creates a Stripe checkout session and forwards the ID via JSON response.
                            <br/>
                            Releated code had to be changed, especially with the updated UI but it was worth it in the end.
                            <br/>
                            Previously, UX required the user to process two pages. The checkout button redirects to a blank page which redirects to Stripe's payment page.
                            <br/>
                            Now the checkout button redirects to Stripe's payment page directly!
                        </p>
                        <h5 className="title">Reservations</h5>
                        <p>
                            My first concern was UX/UI. I mean, how would you display over 300 selectable campsites? Do they have pictures? Do they have variable information? How do I structure this with so little information?
                            <br />
                            <br />
                            At the very least I got started with creating a system for toggling the availability of identifiable campsites via user reservations. The way this system works is if given 2 date inputs, find user reservations that intersect with each date. User reservations contain the selected campsite so results found are essentially campsites that are unavailable for the selected date.
                        </p>
                        <div className="columns">
                            <div className="column">
                                <figure>
                                    <Image src="/projects/stoney-park/tables.webp" width={595} height={230} />
                                    <figcaption>
                                        <code>reservations.campground_id</code> is a string concatenation of <code>campgrounds.section</code> and <code>campgrounds.number</code>.
                                    </figcaption>
                                </figure>
                                <figure>
                                    <Image src="/projects/stoney-park/reservation_production.webp" width={710} height={489} />
                                    <figcaption>
                                        Screenshot of campsite availability in production.
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="column content">
                                <p>Finding unavailable reservations means finding other reservations conflicting with the user's choice of dates. If the <b>requested</b> date of arrival (in) intersects with the departure (out) date of <b>other</b> reservations, the campsites from <b>existing</b> reservations are declared as unavailable. This is also the case for the requested date of departure conflicting with arrival dates of existing reservations.</p>
                                <code className="is-block is-full">
                                    if other_departure &gt; this_arrival
                                    <br />
                                    if other_arrival &lt; this_departure
                                </code>
                                <p>
                                    To visualize this, imagine a table that contains reservations for certain dates.
                                    <br />
                                    There is 2 <b>existing</b> reservations represented by red boxes, and a <b>requested</b> reservation represented by the outline box that intersects both red boxes.
                                </p>
                                <div className="columns">
                                    <div className="column has-text-centered">
                                        <Image src="/projects/stoney-park/reservation_visualized.webp" width={128} height={158} />
                                    </div>
                                    <div className="column content">
                                        The requested arrival date is January 3, which conflicts with the first reservation's departure date (January 3). And at the same time, the requested departure date (January 6) conflicts with the second reservation's arrival date.
                                    </div>
                                </div>
                                <p>
                                    Using this data, we can get the existing reservations selected campsites and declare them unavailable to the requested reservation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </Project >
    );
}