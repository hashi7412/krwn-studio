import React from "react"
import { Link } from "react-router-dom"
import Icons from "./components/Icons"
import useStore, { config } from "./useStore"

interface LayoutProps {
    checked: boolean
    mobile: boolean
    scroll: boolean
}

const getMobile = () => {
    if (window.innerWidth > 992) {
        return true
    }

    return false
}

export default function Layout ({children}: {children: any}) {
    const { theme, Logo, update } = useStore()

    const [status, setStatus] = React.useState<LayoutProps>({
        checked: false,
        mobile: getMobile(),
        scroll: false
    })

    const onLinkHandle = () => {
        setStatus({...status, checked: false})
    }

    const onMenu = () => {
        setStatus({...status, checked: !status.checked})
    }

    React.useEffect(() => {
        const changeMobile = () => {
            setStatus({...status, mobile: getMobile()})
        }

        const moveHeader = () => {
            if(window.scrollY > 200) {
                setStatus({...status, scroll: true})
            } else {
                setStatus({...status, scroll: false})
            }
        }

        window.addEventListener("resize", changeMobile)

        window.addEventListener("scroll", moveHeader)

        // return window.removeEventListener("resize", changeMobile)
    }, [])

    return (
        <div className={`root ${theme}`} id="home">
            <div className="setting">
                <div>
                    <Icons.Setting color="var(--color)" />
                </div>
                <div>
                    <button className="btn btn-sm" onClick={() => {update({theme: theme==='' ? 'dark' : ''})}}>
                        {theme === '' ? (
                            <Icons.Sun />
                        ) : (
                            <Icons.Moon />
                        )}
                    </button>
                </div>
            </div>
            <header className={`${status.scroll ? "scroll-down" : ""}`}>
                <div className="header">
                    <div className="logo">
                        <Link to="/">
                            <img src={Logo} alt="Logo" />
                        </Link>
                    </div>
                    <input type="checkbox" id="menu-checkbox" defaultChecked={status.checked} />
                    <menu>
                        <ul className="menu">
                            {config.menu.map((i:LinkObject, k:number) => (
                                <li key={k}>
                                    <a href={i.url} onClick={onLinkHandle}>{i.label}</a>
                                </li>
                            ))}
                        </ul>
                    </menu>
                    <label htmlFor="menu-checkbox" className="hamburger" onClick={onMenu}>
                        <span></span>
                    </label>
                </div>
            </header>
            { children }
            <footer>
                {/* <div className="footer">
                    <div className="row-4">
                        <div className="col-xl-5">
                            <div className="logo">
                                <img src={Logo} alt="Logo" />
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipisc-ing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex</p>
                        </div>
                    </div>
                </div> */}
            </footer>
        </div>
    )
}