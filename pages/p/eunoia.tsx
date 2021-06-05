import Image from 'next/image';
import Project from '../../components/layouts/project';

export default function render() {
    return (
        <Project props={{
            title: 'Eunoia | Ian Conyers | izarooni',
            subtitle: 'My first PHP website — developed in 2015',
            description: 'Eunoia is the first barebone-PHP website I created in 2015'
        }}>

            <div className="section">
                <h1 className="title">Design</h1>
                <div className="columns is-vcentered">
                    <div className="column">
                        <figure>
                            <Image src="/projects/eunoia/thumbnail.jpg" alt="Screenshot of website design" width={1920} height={1080}></Image>
                            <figcaption className="is-italic">Screenshot of website design</figcaption>
                        </figure>
                    </div>
                    <div className="column content">
                        To bring in new users, our website had to be eye-catching, but not flashy. Simplicity was finally becoming mainstream in the game's community.<br />
                        <br />
                        We believed the community is what makes the game successful therefore our forum and online chat-room had to be easily accessible. There was no need to have pages leading to other pages. Anything that was needed was right in front of you.
                    </div>
                </div>
            </div>
            <div className="section">
                <h1 className="title">Development</h1>
                <div className="columns is-vcentered">
                    <div className="column content">
                        I gained a lot of experience on this project. Attempting to keep the back-end organized, making the front-end represent the design to the best of my abilities as a beginner.<br />
                        Using the root directory index as the website controller, URLs were quite verbose.<br />

                        <ul className="my-3">
                            <li>http://example.com?base=main&page=register</li>
                            <li>http://example.com?base=main&page=login</li>
                            <li>http://example.com?base=cp&page=settings</li>
                        </ul>

                    </div>
                    <div className="column">
                        <figure>
                            <Image src="/projects/eunoia/controller.jpg" alt="Diagram of routing controller" width={760} height={589}></Image>
                            <figcaption className="is-italic">Diagram of routing controller</figcaption>
                        </figure>
                    </div>
                </div>
                <div className="columns is-vcentered">
                    <div className="column">
                        <figure>
                            <Image className="mx-auto" src="/projects/eunoia/layout.jpg" alt="Generified layout design" width={890} height={460}></Image>
                            <figcaption className="is-italic">Generified layout design</figcaption>
                        </figure>
                    </div>
                    <div className="column">
                        <p className="content">
                            The template was built using three sections. A top, middle and bottom component were loaded via php file includes.<br />
                             The top component would contain all the data above the opening body tag (inclusive). The middle component would contain the content of a specific page and the bottom component had JavaScript includes, the closing body tag and the page footer.
                        </p>
                    </div>
                </div>
            </div>
            <div className="section">
                <h1 className="title">Issues</h1>
                <div className="content">
                    The website layout would always scale to the viewport's maximum width and height which looked terrible on large resolutions or wide aspect ratios. This caused a lot of white space. The navigation bar buttons, various components and columns would stretch to the maximum possible width.<br />
                    <br />
                    Routing was a mess. They could get incredibly long and confusing. For example, pages that required authentication were accessible using these links.

                    <ul className="my-3">
                        <li>http://example.com?base=cp&page=settings</li>
                        <li>http://example.com?base=cp&page=logout</li>
                    </ul>

                    In the future, I wanted to "prettify" them. They should be simple and easy to remember.

                    <ul className="my-3">
                        <li>http://example.com/settings</li>
                        <li>http://example.com/logout</li>
                    </ul>

                    The controller should be handled internally, the end-user doesn't need to see these properties. Unfortunately at the time, I didn't know the terminology for this idea thus making attempts to research about it very difficult.
                </div>
            </div>
        </Project>
    );
};