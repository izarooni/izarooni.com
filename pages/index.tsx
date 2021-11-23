import React, { useEffect } from 'react';

import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styles from '../styles/Home.module.css';

// Dynamic component without SSR (Sever-side rendering)
const Doodle = dynamic(
    () => import('../components/doodle-main'),
    { ssr: false }
);

export async function getStaticProps(context: any) {
    return {
        props: {
            projects: [
                'eunoia',
                'epiphany',
                'izarooni',

                'stoney-park',
                'citizens-street',
                'cloverms',

                'harbor',
                'wonderking',
            ]
        }
    };
};

export default function Home(props: any) {
    useEffect(() => {
        setInterval(() => {
            let doodle: any = document.querySelector('css-doodle');
            if (doodle) doodle.update();
        }, 1000);
    });

    return (
        <>
            <Head>
                <title>Ian Conyers | izarooni</title>

                <meta name="og:title" content="Ian Conyers | izarooni" />
                <meta name="og:site_name" content="Ian Conyers | izarooni" />
                <meta name="og:image" content="https://izarooni.com/favicon.ico" />

                <meta name="og:description" content='Ian Conyers, aka "izarooni" is a code monkey *cough* I mean hobbyist programmer...' />
                <meta name="description" content='Ian Conyers, aka "izarooni" is a code monkey *cough* I mean hobbyist programmer...' />

                <meta name="robots" content="follow, index" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta charSet="UTF-8" />

                <link rel="icon" href="/favicon.ico" />
                <script src="https://kit.fontawesome.com/fa6beb4299.js" crossOrigin="anonymous" defer></script>
            </Head>

            <main>
                <div className="columns m-0">
                    <div className={`${styles.left} column is-flex is-justify-content-center is-align-items-center has-text-centered`}>
                        <Doodle></Doodle>
                        <div className="section">
                            <div className="is-custom-font mb-5">
                                <h1 className="title is-size-1">Ian Conyers</h1>
                                <h2 className="subtitle">is a hobbyist developer</h2>
                            </div>

                            <span className="icon-text has-text-weight-bold mb-3">
                                <a href="https://discord.com/users/128440358953680896">
                                    <span className="icon is-vcentered">
                                        <i className="is-size-3 level-item fab fa-discord"></i>
                                    </span>
                                    <span>&nbsp; izarooni#4063</span>
                                </a>
                            </span>

                            <nav className="level is-mobile is-size-3 is-justify-content-space-evenly">
                                <a href="https://github.com/izarooni"><i className="level-item fab fa-github-alt"></i></a>
                                <a href="https://www.linkedin.com/in/ian-conyers"><i className="level-item fab fa-linkedin-in"></i></a>
                                <a href="https://www.instagram.com/play.izarooni/"><i className="level-item fab fa-instagram"></i></a>
                            </nav>
                        </div>
                    </div>
                    <div className={`${styles.right} column has-background-light`}>
                        <div className="is-flex is-flex-wrap-wrap px-3">
                            {props.projects.map((p: string) => (
                                <div key={p} className={`${styles.project} my-3`}>
                                    <Link href={`/p/${p}`}>
                                        <a><img src={`/projects/${p}/thumbnail.webp`} alt={`project ${p} thumbnail`} /></a>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};