import React from "react"
import { Link } from "react-router-dom"
import useStore from "../useStore"
import Icons from "../components/Icons"
import Hoodle from "../components/Hoodle"

import Camera				from "../assets/images/icons/1.png"
import Events				from "../assets/images/icons/4.png"
import Handshake			from "../assets/images/icons/2.png"
import Krwn					from "../assets/images/icons/3.png"

import Innovate				from "../assets/images/innovate.gif"

import Twitter				from "../assets/images/socials/twitter.png"
import Instagram			from "../assets/images/socials/instagram.png"
import Discord				from "../assets/images/socials/discord.png"
import Email				from "../assets/images/socials/twitter.png"

const Home = () => {
	const { Logo } = useStore()

	return (
		<main>
			<section className="banner">
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
							</div>
						</div>
						<div>
							<div className="events">
								<h4>Events</h4>
								<div className="img">
									<img src={Events} alt="Events" />
								</div>
							</div>
						</div>
						<div>
							<div className="ship">
								<h4>KRWNship</h4>
								<div className="img">
									<img src={Handshake} alt="KRWNship" />
								</div>
							</div>
						</div>
						<div>
							<div className="create">
								<h4>Create</h4>
								<div className="img">
									<img src={Krwn} alt="Create" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="innovate">
				<img src={Innovate} alt="Innovate" />
			</section>
			<section className="mindmap">
				<div>
					<div className="grid">
						<div>
							<div>
								<h1>01</h1>
								<p>Vision & Values</p>
							</div>
						</div>
						<div>
							<div>
								<h1>02</h1>
								<p>Community</p>
							</div>
							<div>
								<h1>03</h1>
								<p>Create with KRWN</p>
							</div>
						</div>
					</div>
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