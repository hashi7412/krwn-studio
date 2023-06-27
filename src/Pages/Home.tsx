import React from "react"
import { Link } from "react-router-dom"
import useStore from "../useStore"
import Icons from "../components/Icons"
import Hoodle from "../components/Hoodle"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import Camera				from "../assets/images/icons/1.png"
import Events				from "../assets/images/icons/4.png"
import Handshake			from "../assets/images/icons/2.png"
import Krwn					from "../assets/images/icons/3.png"

import Innovate				from "../assets/images/innovate.gif"

import Twitter				from "../assets/images/socials/twitter.png"
import Instagram			from "../assets/images/socials/instagram.png"
import Discord				from "../assets/images/socials/discord.png"
import Email				from "../assets/images/socials/email.png"
import Expand from "../components/Expand"

const Home = () => {
	const { Logo } = useStore()

	const items = [
		(
			<div className="container">
				<h1>Digital fashion house for the <span>Metaverse.</span></h1>
				<div className="hoodle">
					<Hoodle />
				</div>
				<div className="desc">
					<div>
						<h5>891</h5>
						<p>unique items</p>
					</div>
					<p>Our debut limited collection of only 891 pieces: each H8D is a completely unique piece, exclusively available only to you.</p>
				</div>
				<div className="intro"></div>
			</div>
		),
		(
			<div className="container">
				<h1>Digital fashion house for the <span>Metaverse.</span></h1>
				<div className="hoodle">
					<Hoodle />
				</div>
				<div className="desc">
					<div>
						<h5>891</h5>
						<p>unique items</p>
					</div>
					<p>Our debut limited collection of only 891 pieces: each H8D is a completely unique piece, exclusively available only to you.</p>
				</div>
				<div className="intro"></div>
			</div>
		),
		(
			<div className="container">
				<h1>Digital fashion house for the <span>Metaverse.</span></h1>
				<div className="hoodle">
					<Hoodle />
				</div>
				<div className="desc">
					<div>
						<h5>891</h5>
						<p>unique items</p>
					</div>
					<p>Our debut limited collection of only 891 pieces: each H8D is a completely unique piece, exclusively available only to you.</p>
				</div>
				<div className="intro"></div>
			</div>
		),
		(
			<div className="container">
				<h1>Digital fashion house for the <span>Metaverse.</span></h1>
				<div className="hoodle">
					<Hoodle />
				</div>
				<div className="desc">
					<div>
						<h5>891</h5>
						<p>unique items</p>
					</div>
					<p>Our debut limited collection of only 891 pieces: each H8D is a completely unique piece, exclusively available only to you.</p>
				</div>
				<div className="intro"></div>
			</div>
		)
	]

	return (
		<main>
			<section className="banner">
				<AliceCarousel 
					items={items}
				/>
			</section>
			<section className="krwn">
				<div>
					<div className="hoodle">
						<Hoodle />
					</div>
					<div className="contexts">
						<div className="desc-1">
							<span>KRWN places priority on 3 fundamentals of design: Imagination Creativity and Innovation</span>
							<div></div>
						</div>
						<div className="desc-2">
							<span>Hoodies were chosen for the debut collection for its gender neutrality, common usage and symbolism in the streetwear community</span>
							<div></div>
						</div>
						<div className="desc-3">
							<span>Each hoodle in our collection is called H8D or H8Dz (H-U-D), the number 8 symbolising 891 total pieces in the collection</span>
							<div></div>
						</div>
						<div className="desc-4">
							<span>KRWN releases collections in seasons. Our debut collection falls under SEASON 0 and titled "NEONIZE" for our strong emphasis on bright colorways</span>
							<div></div>
						</div>
						<div className="desc-5">
							<span>Season 0 is divided into 4 rarity levels, each with their own distinctly recognisable features</span>
							<div></div>
						</div>
						<div className="desc-6">
							<span>KRWN places priority on 3 fundamentals of design: Imagination Creativity and Innovation</span>
							<div></div>
						</div>
					</div>
				</div>
				<div className="smoke1"></div>
				<div className="smoke2"></div>
			</section>
			<section className="collection">
				<div>
					<div className="silver">
						<div className="icon">
							<Icons.ArrowChevronLeft />
							<Icons.ArrowChevronUp />
						</div>
						<div>
							<span>s</span>
							<span>i</span>
							<span>l</span>
							<span>v</span>
							<span>e</span>
							<span>r</span>
						</div>
						<div className="icon">
							<Icons.ArrowChevronRight />
							<Icons.ArrowChevronDown />
						</div>
					</div>
					<div className="gold">
						<div className="icon">
							<Icons.ArrowChevronLeft />
							<Icons.ArrowChevronUp />
						</div>
						<div>
							<span>g</span>
							<span>o</span>
							<span>l</span>
							<span>d</span>
						</div>
						<div className="icon">
							<Icons.ArrowChevronRight />
							<Icons.ArrowChevronDown />
						</div>
					</div>
					<div className="platinum">
						<div className="icon">
							<Icons.ArrowChevronLeft />
							<Icons.ArrowChevronUp />
						</div>
						<div>
							<span>p</span>
							<span>l</span>
							<span>a</span>
							<span>t</span>
							<span>i</span>
							<span>n</span>
							<span>u</span>
							<span>m</span>
						</div>
						<div className="icon">
							<Icons.ArrowChevronRight />
							<Icons.ArrowChevronDown />
						</div>
					</div>
					<div className="diamond">
						<div className="icon">
							<Icons.ArrowChevronLeft />
							<Icons.ArrowChevronUp />
						</div>
						<div>
							<span>d</span>
							<span>i</span>
							<span>a</span>
							<span>m</span>
							<span>o</span>
							<span>n</span>
							<span>d</span>
						</div>
						<div className="icon">
							<Icons.ArrowChevronRight />
							<Icons.ArrowChevronDown />
						</div>
					</div>
				</div>
			</section>
			<section className="mission">
				<div className="container">
					<h2 className="row-between-center">
						Mission
						<div className="logo">
							<Link to="/">
								<img src={Logo} alt="Logo" />
							</Link>
						</div>
					</h2>
					<div>
						<p>
							Our mission is to help build the <b>future of fashion</b> which lies at the <b>intersection</b> of modern <b>digital couture </b> and age-old fashio <b>traditions </b> and experiences
						</p>
					</div>
				</div>
			</section>
			<section className="manifesto">
				<h3>Manifesto</h3>
			</section>
			<section className="our-story">
				<div className="container">
					<h2>Value</h2>
					<div>
						<div>
							<div className="ar">
								<h4>AR</h4>
								<div className="img">
									<img src={Camera} alt="AR" />
								</div>
								<p>The Metaverse is a virtual reality space</p>
							</div>
						</div>
						<div>
							<div className="events">
								<h4>Events</h4>
								<div className="img">
									<img src={Events} alt="Events" />
								</div>
								<p>Join us for a one-of-a-kind event in the heart of the Metaverse</p>
							</div>
						</div>
						<div>
							<div className="ship">
								<h4>KRWNship</h4>
								<div className="img">
									<img src={Handshake} alt="KRWNship" />
								</div>
								<p>As a citizen of KRWNship, you will have access to a vast array of resources</p>
							</div>
						</div>
						<div>
							<div className="create">
								<h4>Create</h4>
								<div className="img">
									<img src={Krwn} alt="Create" />
								</div>
								<p>The metaverse is a revolutionary concept</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="innovate">
				<img src={Innovate} alt="Innovate" />
			</section>
			<section className="mindmap">
				<div className="expand-container">
					<Expand className="map1"
						top="0"
						left="0"
						width="25%"
						height="100%"
						swapChildren={(
							<div>
								<h1>01</h1>
								<div style={{maxWidth: "600px", padding: "3rem 5rem", fontSize: "1.3rem"}}>
									<p><b>Vision:</b> Our vision for the metaverse is to create a limitless digital realm where individuals can connect, collaborate, and explore a vast universe of virtual experiences, transcending the constraints of physical reality.</p>
									<p><b>Values:</b> Our values are rooted in empowerment, inclusivity, privacy, and innovation, guiding us to create a metaverse that empowers individuals, fosters diverse communities, protects privacy, and inspires limitless creativity.</p>
								</div>
							</div>
						)}
					>
						<div className="expand-content-main">
							<h1>01</h1>
							<span>Vision & Values</span>
						</div>
					</Expand>
					<Expand className="map2"
						top="0"
						left="25%"
						width="25%"
						height="33.33%"
						swapChildren={(
							<div>
								<h1>02</h1>
								<div style={{maxWidth: "600px", padding: "3rem 5rem", fontSize: "1.3rem"}}>
									<p>In the metaverse, a vibrant and diverse community thrives, bringing together people from all walks of life in a shared digital space where they can connect, socialize, and forge meaningful relationships, breaking down geographical barriers and fostering a sense of belonging and collaboration that transcends borders.</p>
								</div>
							</div>
						)}
					>
						<div className="expand-content-main">
							<h1>02</h1>
							<span>Community</span>
						</div>
					</Expand>
					<Expand className="map3"
						top="33.33%"
						left="25%"
						width="25%"
						height="66.66%"
						swapChildren={(
							<div>
								<h1>03</h1>
								<div style={{maxWidth: "600px", padding: "3rem 5rem", fontSize: "1.3rem"}}>
									<p>With KRWN, imagination knows no limits, as users become the architects of their own digital universes, shaping the metaverse into a stunning tapestry of boundless imagination and artistic expression.</p>
								</div>
							</div>
						)}
					>
						<div className="expand-content-main">
							<h1>03</h1>
							<span className="text-upper">Create with KRWN</span>
						</div>
					</Expand>
					<Expand className="map4"
						top="0"
						left="50%"
						width="25%"
						height="66.66%"
						swapChildren={(
							<div>
								<h1>04</h1>
								<div style={{maxWidth: "600px", padding: "3rem 5rem", fontSize: "1.3rem"}}>
									<p>Cutting-edge feature in the metaverse that offers a curated selection of exclusive virtual assets, artworks, fashion, and experiences, providing users.</p>
								</div>
							</div>
						)}
					>
						<div className="expand-content-main">
							<h1>04</h1>
							<span className="text-upper">NEW DROPS</span>
						</div>
					</Expand>
					<Expand className="map5"
						top="0"
						left="75%"
						width="25%"
						height="66.66%"
						swapChildren={(
							<div>
								<h1>05</h1>
								<div style={{maxWidth: "600px", padding: "3rem 5rem", fontSize: "1.3rem"}}>
									<p>Embrace a new dimension of existence where imagination becomes tangible, and the possibilities of self-expression, collaboration, and adventure are endless within the vast expanse of the metaverse</p>
								</div>
							</div>
						)}
					>
						<div className="expand-content-main">
							<h1>05</h1>
							<span className="text-upper">METAVERSE</span>
						</div>
					</Expand>
					<Expand className="map6"
						top="66.66%"
						left="50%"
						width="50%"
						height="33.33%"
						swapChildren={(
							<div>
								<h1>06</h1>
								<div style={{maxWidth: "600px", padding: "3rem 5rem", fontSize: "1.3rem"}}>
									<p>Our metaverse website embraces decentralization, empowering individuals by removing central authorities and giving users more control over their virtual experiences and identities. </p>
									<p>Through decentralized infrastructure and protocols, we create a metaverse where users can freely interact, own their digital assets, and contribute to the evolution of the virtual ecosystem, ensuring a more democratic and resilient digital future.</p>
								</div>
							</div>
						)}
					>
						<div className="expand-content-main">
							<h1>06</h1>
							<span>Decentralization</span>
						</div>
					</Expand>
				</div>
			</section>
			<section className="withus">
				<div className="container">
					<h2>KRWN With us</h2>
					<p className="col-xl-7">Our brand is built with our community, and together, we can level up to being the best web 3 fashion house. Let's spread the KRWN movement together.</p>
					<div className="row-4">
						<div className="col-md-6">
							<Link to={"/"} className="twitter">
								<div>
									<h3>Twitter</h3>
									<p>Be the first to know</p>
								</div>
								<div className="img">
									<img src={Twitter} alt="Twitter" />
								</div>
							</Link>
						</div>
						<div className="col-md-6">
							<Link to={"/"} className="instagram">
								<div>
									<h3>Instagram</h3>
									<p>Visualizing together</p>
								</div>
								<div className="img">
									<img src={Instagram} alt="Instagram" />
								</div>
							</Link>
						</div>
						<div className="col-md-6">
							<Link to={"/"} className="discord">
								<div>
									<h3>Discord</h3>
									<p>Join the KRWNerz</p>
								</div>
								<div className="img">
									<img src={Discord} alt="Discord" />
								</div>
							</Link>
						</div>
						<div className="col-md-6">
							<Link to={"/"} className="email">
								<div>
									<h3>Email</h3>
									<p>Write to us</p>
								</div>
								<div className="img">
									<img src={Email} alt="Email" />
								</div>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}

export default Home