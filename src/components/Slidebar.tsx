import React from "react"
import Icons from "./Icons"

interface SlidebarProps {
    header: JSX.Element | String
    children: JSX.Element | String
    id: String
}

// interface SlideStatus {
//     isDrop: boolean
//     totalHeight?: number
//     contentHeight: number
// }

const Slidebar = ({ header, children, id }: SlidebarProps) => {
    // const [status, setStatus] = React.useState<SlideStatus>({
    //     isDrop: false,
    //     totalHeight: 0,
    //     contentHeight: 0
    // })

    const content = React.useRef<HTMLDivElement>(null)

    // const slide = () => {
    //     const interval = setInterval(() => {
    //         setStatus({...status, contentHeight: status.contentHeight + 1})
    //     }, 10)
        
    //     return interval
    // }
    // console.log(status.contentHeight, status.totalHeight)

    // const onSlide = () => {
    //     // setStatus({...status, totalHeight: content.current?.scrollHeight})
    //     // const interval = slide()
    //     // if (status.contentHeight === status.totalHeight) {
    //     //     clearInterval(interval)
    //     // }
    // }

    return (
        <div className="slidebar">
            <input type="checkbox" id={`slide-${id}`} />
            <label className="header" htmlFor={`slide-${id}`}>
                { header }
                <span>
                    <Icons.ArrowChevronDown size={"1.5em"} />
                </span>
            </label>
            <div ref={content} className="content">
                { children }
            </div>
        </div>
    )
}

export default Slidebar