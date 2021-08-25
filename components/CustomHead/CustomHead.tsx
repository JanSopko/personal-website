import React from "react";
import Head from "next/head";

export const CustomHead = () => {
    return(
        <Head>
            <title>Ján Sopko</title>
            <meta name="description" content="Personal website of Ján Sopko" />
            <meta name="keywords" content="developer, backend, frontend, full stack, node, javascript, typescript, react, php"/>
            <link rel="icon" href="/favi.png" />
        </Head>
    );
}