import React from "react"
import { Link } from "react-router-dom"
import useStore from "../useStore"

import Innovate				from "../assets/images/innovate.gif"
import Icons from "../components/Icons"

const Home = () => {
	const { Logo } = useStore()

    return (
        <main>
			<section className="banner">
				<div className="container">
					<h1>Digital fashion house for the <span>Metaverse.</span></h1>
					<div className="body">
						<img src={Innovate} alt="cloth" />
					</div>
					<div className="desc">
						<div>
							<h5>891</h5>
							<p>unique items</p>
						</div>
						<p>Our debut limited collection of only 891 pieces: each H8D is a completely unique piece, exclusively available only to you.</p>
					</div>
				</div>
			</section>
			<section className="krwn">
				<div className="main">
					<img src={Innovate} alt="krwn" />
				</div>
				<div className="desc-1">KRWN places priority on 3 fundamentals of design: Imagination Creativity and Innovation</div>
				<div className="desc-2">Hoodies were chosen for the debut collection for its gender neutrality, common usage and symbolism in the streetwear community</div>
				<div className="desc-3">Each hoodle in our collection is called H8D or H8Dz (H-U-D), the number 8 symbolising 891 total pieces in the collection</div>
				<div className="desc-4">KRWN releases collections in seasons. Our debut collection falls under SEASON 0 and titled "NEONIZE" for our strong emphasis on bright colorways</div>
				<div className="desc-5">Season 0 is divided into 4 rarity levels, each with their own distinctly recognisable features</div>
				<div className="desc-6">KRWN places priority on 3 fundamentals of design: Imagination Creativity and Innovation</div>
			</section>
			<section className="collection">
				<div>
					<div className="silver">
						<div className="icon">
							<Icons.ArrowChevronDown />
						</div>
						<span>silver</span>
						<div className="icon">
							<Icons.ArrowChevronDown />
						</div>
					</div>
					<div className="silver">
						<div className="icon">
							<Icons.ArrowChevronDown />
						</div>
						<span>silver</span>
						<div className="icon">
							<Icons.ArrowChevronDown />
						</div>
					</div>
					<div className="silver">
						<div className="icon">
							<Icons.ArrowChevronDown />
						</div>
						<span>gold</span>
						<div className="icon">
							<Icons.ArrowChevronDown />
						</div>
					</div>
					<div className="platinum">
						<div className="icon">
							<Icons.ArrowChevronDown />
						</div>
						<span>diamond</span>
						<div className="icon">
							<Icons.ArrowChevronDown />
						</div>
					</div>
				</div>
			</section>
			<section className="mission">
				<h3>
					Mission
					<div className="logo">
                        <Link to="/">
                            <img src={Logo} alt="Logo" />
                        </Link>
                    </div>
				</h3>
				<div>
					<p>
						Our mission is to help build the
						<b>future of fashion</b>
						which lies at the 
						<b>intersection</b>
						of modern 
						<b>digital couture </b>
						and age-old fashio 
						<b>traditions </b>
						and experiences
					</p>
				</div>
			</section>
			<section className="manifesto">
				<h3>Manifesto</h3>
			</section>
			<section className="our-story">
				<h3>Value</h3>
				<div>
					<div className="ar">
						<h4>AR</h4>
						<div className="value-image">
							<img src={Innovate} alt="AR" />
						</div>
					</div>
					<div className="events">
						<h4>Events</h4>
						<div className="value-image">
							<img src={Innovate} alt="Events" />
						</div>
					</div>
					<div className="ship">
						<h4>KRWNship</h4>
						<div className="value-image">
							<img src={Innovate} alt="KRWNship" />
						</div>
					</div>
					<div className="create">
						<h4>Create</h4>
						<div className="value-image">
							<img src={Innovate} alt="Create" />
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
					<div className="row">
						<div className="col-md-6">
							<Link to={"/"} className="">
								<div>
									<h3>Twitter</h3>
									<p>Be the first to know</p>
								</div>
								<div>
								</div>
							</Link>
						</div>
						<div className="col-md-6">
							<Link to={"/"} className="">
								<div>
									<h3>Instagram</h3>
									<p>Visualizing together</p>
								</div>
								<div>
								</div>
							</Link>
						</div>
						<div className="col-md-6">
							<Link to={"/"} className="">
								<div>
									<h3>Discord</h3>
									<p>Join the KRWNerz</p>
								</div>
								<div>
								</div>
							</Link>
						</div>
						<div className="col-md-6">
							<Link to={"/"} className="">
								<div>
									<h3>Email</h3>
									<p>Write to us</p>
								</div>
								<div>
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