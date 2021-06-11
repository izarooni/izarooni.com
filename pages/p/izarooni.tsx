import Image from 'next/image';
import Project from '../../components/layouts/project';

export default function render() {
    return (
        <Project props={{
            title: 'My Website | Ian Conyers | izarooni',
            header: 'My Website',
            subtitle: 'A place to show off',
            description: 'izarooni.com (my portfolio website) is a place for me to show off projects'
        }}>


            <div className="section">
                <h1 className="title">Design</h1>
                <div className="columns is-vcentered">
                    <div className="column is-three-quarters">
                        izarooni.com has gone through 3 design revisions. Coming up with a unique design that matches your personality while showcasing your skills and projects is no easy feat. I'm not an experienced front-end developer, I prefer the back-end, it's where I started to learn programming. I don't remember how long it took for the design to evolve from the first revision, all I can say is it has been at least 4 years (as of writing this in June, 2021).
                    </div>
                </div>
            </div>

            <div className="section">
                <h1 className="title">Revision #1</h1>
                <div className="columns is-vcentered">
                    <div className="column">
                        <figure>
                            <Image src="/projects/izarooni/rev1.jpg" alt="Screenshot of the first design" width={1284} height={721}></Image>
                            <figcaption className="is-italic">Screenshot of the first design, cropped to show more content</figcaption>
                        </figure>
                    </div>
                    <div className="column content">
                        Inspired by someone in my family, I wanted a design that simply showed who I am. Having my own domain and website was cool enough to me and I knew coming up with a unique design isn't something that can happen immediately.<br />
                        <br />
                        I had to think about what projects I even wanted to show. I started with older websites I made half a decade ago that are written like a blog.<br />
                        The core of the website was built using a PHP framework, CodeIgniter. It's lightweight, easy to use and most importantly, in a programming language I'm familiar with.
                    </div>
                </div>
            </div>

            <div className="section">
                <h1 className="title">Revision #2</h1>
                <div className="columns is-vcentered">
                    <div className="column content">
                        The first design has too much white space. Nothing eye catching, nothing to leave an impression. I had an idea to use an abstract layout to show my projects. Basically, thumbnails are shown in a grid-type fashion, but instead of having each cell the same width and height, each thumbnail image keeps its original aspect ratio to destroy the uniform look.
                    </div>
                    <div className="column">
                        <figure>
                            <Image src="/projects/izarooni/rev2.jpg" alt="screenshot of the second design" width={1899} height={969}></Image>
                            <figcaption className="is-italic">Screenshot of the second design, cropped to show more content</figcaption>
                        </figure>
                    </div>
                </div>
            </div>

            <div className="section">
                <h1 className="title">Revision #3</h1>
                <div className="columns is-vcentered">
                    <div className="column">
                        <figure>
                            <Image src="/projects/izarooni/rev3.jpg" alt="screenshot of the third design" width={1113} height={986}></Image>
                            <figcaption className="is-italic">Screenshot of the third design</figcaption>
                        </figure>
                    </div>
                    <div className="column content">
                        After leaving the website alone for several months I suddenly had an idea for a new design. Due to my lack of skills in UX and UI design, I decided to try and keep the content visible on the main page, before the fold.<br/>
                        <br/>
                        Of course, with more projects means more space taken and inevitably scrolling. A cool new thing I learned was sticky content, awesome! This allows me to keep the left column stuck on the page while allowing the right column to scroll. This way I can show my name and external links while being able to showcase as many projects as I'd like.<br/>
                        <br/>
                        The right column contains thumbnails for each project. To make more projects visible at once, the max-height is capped while the width is fluid. To spice up the design and user-interaction, upon hovering or clicking, the thumbnail is expanded to show the full image.
                    </div>
                </div>
            </div>
        </Project>
    );
}