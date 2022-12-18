import Image from 'next/image';
import Project from '../../components/layouts/project';

export default function render() {
    return (
        <Project props={{
            title: 'Clipped. | Ian Conyers | izarooni',
            header: 'Clipped.',
            subtitle: 'Next.js — created in 2022',
            description: 'A small website made for small communities that want to share trimmed videos.'
        }}>

            <div className="section">
                <p className="has-text-centered"><a href="https://github.com/izarooni/Clipped" target="_blank" className="has-text-link">Source code on GitHub</a>!</p>


                <h1 className="title">Initial Design</h1>
                <div className="columns">
                    <div className='column'>
                        <figure>
                            <Image src="/projects/clipped/thumbnail.webp" alt="Screenshot of the first design" width={2543} height={1287} layout="responsive" objectFit="contain"></Image>
                            <figcaption className="is-italic">Screenshot of the main page showcasing a global video feed</figcaption>
                        </figure>
                    </div>
                    <div className="column content">
                        Every year a group of my friends upload small (file size), trimmed (video length) videos to Discord.
                        <br />
                        We'll call these videos "clips". These clips can show anything from a persons blank desktop to a video game.
                        <br />
                        <br />
                        The layout I wanted to achieve is YouTube's main page. Dynamic navigation bar on the left, search input at the top and video feed in the main content area.
                        <br />
                        The video feed in the main content area should be engaging and interactive.
                        <br />
                        <br />
                        When a video is hovered, a short preview should play with no audio.
                        <br />
                        To avoid rendering the full video for every video element, <a href="https://ffmpeg.org/" target="_blank" className='has-text-link'>FFMPEG</a> is used to create even shorter, downscaled videos with no audio. This process happens on the server after the video is uploaded.
                    </div>
                </div>

                <h5 className='title'>User Profiles</h5>
                <div className='columns'>
                    <div className='column content'>
                        A user's profile will contain a video feed as well as certain buttons under the profile avatar. The buttons displayed will depend on if that profile belongs to the authenticated user.
                        <br/>
                        <br/>
                        If the profile doesn't belong to the authenticated user, a button with a heart is displayed, allowing that user to "subscribe" to that profile. This adds the avatar and username of the profile to the navigation bar menu where the authenticated user can easily access the profile.
                        <br/>
                        <br/>
                        If the profile does belong to the end-user, three buttons are displayed: video upload, account settings and log-out.
                    </div>
                    <div className='column'>
                        <figure>
                            <Image src="/projects/clipped/profile.webp" alt="Screenshot of the first design" width={1475} height={819} layout="responsive" objectFit="contain"></Image>
                            <figcaption className="is-italic">Screenshot of a user profile showcasing a video feed</figcaption>
                        </figure>
                    </div>
                </div>

                <h5 className='title'>User Avatars</h5>
                <div className='columns'>
                    <div className='column'>
                        <figure>
                            <video autoPlay loop muted playsInline>
                                <source src="/projects/clipped/avatar_upload.webm" type="video/webm" />
                                <source src="/projects/clipped/avatar_upload.mp4" type="video/mp4" />
                            </video>
                            <figcaption className="is-italic">Video demonstration of uploading a new user avatar</figcaption>
                        </figure>
                    </div>
                    <div className='column content'>
                        User avatars, aka profile pictures, support various file types. I believe that modern websites should support animated avatars as it adds just a little bit of extra potential in creative expression and interaction with audiences. Although I do understand it would be difficult to moderate.
                        <br />
                        <br />
                        To upload a new avatar, simply upload an eligible file type to the avatar element and the server will process the rest.
                        <br />
                        <br />
                        This is done by converting the uploaded file into Base64 format then store as a blob in the database for persistence. The file is also saved to the server disk as a backup for fast retrieval.
                    </div>
                </div>

                <h5 className='title'>Uploaded Videos</h5>
                <div className='columns'>
                    <div className='column content'>
                        The file size can be limited via the server source code and is up to the developer to set.
                        <br />
                        In development, the limit is set to 50MB as plenty of disk space was available.
                        <br />
                        <br />
                        The video upload page can be accessed from the <span className='has-text-link'>/profile</span> page.
                        <br />
                        An upload button will appear under the user avatar which redirects to the aforementioned page.
                        <br />
                        To upload a video, simply drag and drop a video file into the upload box and the server will do the rest.
                    </div>
                    <div className='column'>
                        <figure>
                            <video autoPlay loop muted playsInline>
                                <source src="/projects/clipped/video_upload.webm" type="video/webm" />
                                <source src="/projects/clipped/video_upload.mp4" type="video/mp4" />
                            </video>
                            <figcaption>Video demonstration of uploading a video</figcaption>
                        </figure>
                    </div>
                </div>

                <h5 className='title'>Responsive Navbar</h5>
                <div className='columns'>
                    <div className='column'>
                        <figure>
                            <video autoPlay loop muted playsInline>
                                <source src="/projects/clipped/navbar.webm" type="video/webm" />
                                <source src="/projects/clipped/navbar.mp4" type="video/mp4" />
                            </video>
                            <figcaption>Video demonstration of the navbar's responsive style</figcaption>
                        </figure>
                    </div>
                    <div className='column content'>
                        One noteable feature that may never get noticed is the navigation bar. It contains a menu of video categories defined by the server, as well as a list of users that the authenticated user subscribes to.
                        <br />
                        <br />
                        Depending on the width of the viewport, the navigation bar must switch between an off-canvas and collapsable style via a toggle button.
                        <br />
                        <br />
                        On XL screens (1280p and higher), the navigation bar must stay visible at all times. When the navbar toggle is clicked, menu text is hidden such as usernames and category names leaving just icons. Simple enough, right?
                    </div>
                </div>

                <p className='content'>
                    On smaller screens, the navigation bar must be hidden <span className='has-text-weight-bold'>by default</span> and when the navbar toggle is clicked, it will toggle that visiblity.
                    <br />
                    The difficult part about this is making the logo align perfectly with existing logo in the content area, on all viewport sizes. Not to mention you have to consider window resizing allowing conversion between both styles seamlessly without any extra user interaction.
                    <br />
                    <br />
                    Consider also adding a sliding animation to <span className='has-text-weight-bold'>only smaller viewports</span> where the animation only occurs when the toggle button is clicked, and not when the window is resized.
                </p>
            </div>
        </Project>
    );
};