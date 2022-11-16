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
                        <p> A page typical layout has three sections to display a full page: header, content and footer. To keep it simple, I'll call it top, middle and bottom.</p>
                        <p>
                            The top section will contain our initial content such as the navbar, hero, etc.
                            <br />
                            It could also be optional on some pages but to help take space, we'll include it on all.
                            <br />
                            Most websites I've seen display their website logo on the far left of their navbar and put auth on the right.
                        </p>
                        <p>
                            The bottom section is optional and mostly for footers. You can display various hyperlinks here such as business and contact information, sitemaps, account links, social media, etc.
                        </p>
                        <p>
                            Because Stoney won't have user accounts (aside from web-admins), we can ignore the auth and display our logo next to our hyperlink menu.
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

            <div className="columns">
                <div className="column">
                    <figure>
                        <Image src="/projects/stoney-park/rev2.webp" width={1152} height={1728} layout="responsive" objectFit="contain" />
                        <figcaption className="is-italic">Screenshot of the latest design in a debug environment</figcaption>
                    </figure>
                </div>
                <div className="column content">
                    <p>
                        Instead of putting auth in the far right corner of the navbar, I decided to put the Contact Us link.
                        It's purpose is different from the other pages and I think it's good to have it visible everywhere.
                    </p>
                    <p>
                        Initially creating each page, something needed to take space as there was very limited information given to me at the time of inital creation.
                        <br />
                        There was too much blank space, not enough words and not enough UI.
                        <br />
                        <br />
                        The easy approach is to stick a giant image that can display text and has a decent aesthetic.
                        <br />
                        There wasn't any necessarily bad, but none of them are eye-catching.
                        <br/>
                        I added a video taken by their drone that scans the horizon, horizontally and most importantly, steadily.
                        <br/>
                        The animation makes it eye-catching, the smooth pan over the horizon makes it aesthetic.
                        <br/>
                        Unfortunately I haven't figured out why mobile users (iOS users from my experience) aren't able to see it.
                    </p>
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