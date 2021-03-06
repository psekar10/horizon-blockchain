import Head from 'next/head';
import React from "react";
import { Global, css } from '@emotion/react';

function MyApp({ Component, pageProps }) {
  return (
	<>
		<Head>
			{/* {/* Favicons */}
			<link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
			<link rel="manifest" href="/site.webmanifest" />
			<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
			<meta name="msapplication-TileColor" content="#da532c" />
			<meta name="theme-color" content="#ffffff" />
			<meta name="lang" content="en" />
			<title>Sequence</title>
		</Head>
		<Global
			styles={css`
				html,
				body {
					padding: 0;
					margin: 0;
					font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
						Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
						sans-serif;
					background: #030303;
				}
				a {
					color: #dedede;
					font-size: 16px;
					text-decoration: none;
					cursor: pointer;
				}
				p {
					color: #999;
					font-style: normal;
					font-weight: 400;
					line-height: 145%;
					font-size: 16px;
					mix-blend-mode: normal;
				}
				h1, h2, h3, h4 {
					font-family: Circular;
					font-style: normal;
					font-size: 26px;
					line-height: 125%;
					letter-spacing: -.02em;
					color: #fff;
				}
				h2 {
					background: linear-gradient(79.22deg,rgba(101,154,176,0) 32.91%,rgba(101,154,176,.75) 91.8%),linear-gradient(0deg,#fff,#fff);
					background-clip: text;
					-webkit-text-fill-color: transparent;
				}
				label {
					font-family: Inter;
					font-style: normal;
					font-weight: 500;
					font-size: 16px;
					line-height: 140%;
					color: #999;
				}
				* {
					box-sizing: border-box;
				}
			`}
		/>
		<div style={{display:"flex", flexDirection:"column", height:"100vh", width:"100%"}}>
			<Component {...pageProps} />
		</div>
	</>
	)
}

export default MyApp;
