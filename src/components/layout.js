import "./style/global.css";
import "./style/strucutres.css";
import "./style/fontawesome.css";

import favicon16 from "../img/favicon/favicon16.png"
import favicon32 from "../img/favicon/favicon32.png"
import favicon48 from "../img/favicon/favicon48.png"

import React from "react";
import { StaticQuery, Link, graphql } from "gatsby";
import { Main, Aside, Logo, Navigator, LinksList, SocialList } from "./style/emo-layout.js";
import { Helmet } from "react-helmet"



const Layout = ({ children }) => (
	<StaticQuery
	query = {
		graphql`
		query {
			site {
				siteMetadata {
					title
					subtitle
					description
					keywords
				}
			}
		}
		`}
		render = { data => (
			<React.Fragment>
			<Helmet
			title = {data.site.siteMetadata.title}
			meta = {[
				{
					name: "description",
					content: data.site.siteMetadata.description,
				},
				{
					name: "keywords",
					content: data.site.siteMetadata.keywords,
				},
				]}
				link={[
					{ rel: 'icon', type: 'image/png', sizes: "16x16", href: `${favicon16}` },
					{ rel: 'icon', type: 'image/png', sizes: "32x32", href: `${favicon32}` },
					{ rel: 'shortcut icon', type: 'image/png', href: `${favicon48}` },
					]}
					/>
					<Aside>

						<Navigator>
						<div><a href="/"><img style={{width:'110px', height:'auto', borderRadius:'100px', border:'solid #fafafa', marginBottom:'-30px'}} src="https://pbs.twimg.com/profile_images/980087743664541697/_XnBbr5H_400x400.jpg" alt="blabla" /></a></div>
							<Logo><br/>
								<h5><a style={{color:'#4d4d4d', textAlign:'left'}} href="/">{data.site.siteMetadata.title}</a></h5><SocialList><span>
								<a target="_blank" href="https://twitter.com/TPruschwitz"><span className="fab fa-twitter"></span></a></span>

								</SocialList>
								<p style={{color:'#4d4d4d', paddingTop:'30px'}}>{data.site.siteMetadata.description}</p>
							</Logo>

							<nav>
								<p style={{fontWeight:'bold', paddingLeft:'7px', color:'#4d4d4d', paddingBottom:'20px'}}></p>
								{/*<LinksList>
									<li><Link to={`/single-page/`} activeClassName="active">Eine einfache Seite</Link></li>
									<li><Link to={`/cat2/`} activeClassName="active">Reichsführer SS</Link></li>
								</LinksList>*/}
							</nav>
						</Navigator>
					</Aside>
					<Main>{children}</Main>
					</React.Fragment>
					)}
		/>
		);

export default Layout;
