import React from "react";
import Head from "next/head";

export const CustomHead = () => {
    return(
        <Head>
            <title>Ján Sopko</title>
            <meta name="description" content="Personal website of Ján Sopko" />
            <meta name="keywords" content="developer, backend, frontend, full stack, node, javascript, typescript, react, php"/>
            <link rel="icon" href="/favi.png" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"/>
        </Head>
    );
}