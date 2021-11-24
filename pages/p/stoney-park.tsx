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
                <div className="columns is-vcentered">
                    <div className="column content">
                        Following the layout of any basic website, the design starts with a navigation bar at the top.
                        <br />
                        I decided immediately after the navigation bar should be an eye-catching header. For example a slide show or banner representing current events.
                        <br />
                        The contents of the remaining area depends on what page the user on.
                    </div>
                    <div className="column">
                        <figure>
                            <Image src="/projects/stoney-park/rev1.webp" alt="Screenshot of the first design" width="auto" height="auto" layout="responsive" objectFit="contain"></Image>
                            <figcaption className="is-italic">Screenshot of the first design</figcaption>
                        </figure>
                    </div>
                </div>
            </div>

            <div className="section">
                <h1 className="title">Design Changes</h1>
                <div className="columns is-vcentered">
                    <div className="column">
                        <figure>
                            <Image src="/projects/stoney-park/rev2.webp" width="auto" height="auto" layout="responsive" objectFit="contain" />
                            <figcaption className="is-italic">Screenshot of the latest design in a debug environment</figcaption>
                        </figure>
                    </div>
                    <div className="column content">
                        You'll notice that most websites have a logo on the very left of their main navigation bar. We followed this idea and had a logo created that can also be used as profile avatars on social media.
                        <br />
                        <br />
                        The slide show has been replaced with a video of a drone capturing the surrounding area. If a picture can tell a thousand words, imagine what a video could say!
                        <br />
                        <br />
                        Additional pages were created to help customers see what campsites are like instead of having to rely on words and glorified pictures on social media. This was also due to insufficient resources, time and information.
                    </div>
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
                                <p>Finding unavailable reservations means finding other reservations conflicting with the user's choice of dates. If the <b>requested</b> date of arrival (in) intersects with the departure (out) date of <b>other</b> reservations, the selected campsite from the <b>existing</b> reservations are declared as unavailable. This is also the case for the requested date of departure conflicting with arrival dates of existing reservations.</p>
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
                                        The requested arrival date is January 3 which conflicts with the first reservation's departure date, January 3 and the requested departure date is January 6 which conflicts with the second reservation's arrival date.
                                    </div>
                                </div>
                                <p>
                                    Using this data, we can get the selected campsites of the existing reservations (aka the red boxes) and declare them unavailable to the requested reservation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </Project >
    );
}