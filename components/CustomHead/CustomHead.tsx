import React from "react";
import Head from "next/head";

export const CustomHead = () => {
    return(
        <Head>
            <title>Ján Sopko | Welcome</title>
            <meta name="description" content="Personal website of Ján Sopko" />
            <link rel="icon" href="/favi.png" />
        </Head>
    );
}