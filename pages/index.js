import Head from "next/head";
import Image from "next/image";
import Layout from "../layout/Basic";
import styled from "styled-components";
import Nav from "../src/components/nav/Nav";
import Body from "../src/components/body/Body";
import Card from "../src/components/card/Card";

const H1 = styled.h1`
    color: #a9a9a9;
`;

export default function Home() {
    return (
        <Layout>
            <div>
                <Head>
                    <title>Gm dapp</title>
                    <meta
                        name="description"
                        content="Generated by create next app"
                    />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <Nav />
            </div>
        </Layout>
    );
}
