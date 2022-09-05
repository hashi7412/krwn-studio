import React from "react"

interface ExpandProps {
	className?:			string
	onClick?:			any
	children:			JSX.Element | any
	top?:				string | number
	left?:				string | number
	width?:				string | number
	height?:			string | number
	swapChildren?:		JSX.Element | any

}

interface ExpandStatus {
	top?:				string | number
	left?:				string | number
	width?:				string | number
	height?:			string | number
}

const Expand = ({ className, top, left, width, height, swapChildren, onClick, children }: ExpandProps) => {
	const [isExpand, setIsExpend] = React.useState<boolean>(false)

	const [status, setStatus] = React.useState<ExpandStatus>({
		top:				top,
		left:				left,
		width:				width,
		height:				height,

	})

	const refContainer = React.useRef<HTMLDivElement>(null)

	const { current: container } = refContainer;

	const expand = () => {
		if (onClick) onClick()
		if (!isExpand) {
			setStatus({
				...status,
				top:				"0",
				left:				"0",
				width:				"100%",
				height:				"100%"
			})
			setIsExpend(true)
		} else {
			setStatus({
				...status,
				top:				top,
				left:				left,
				width:				width,
				height:				height,
			})

			window.setTimeout(function (){
				setIsExpend(false)
			}, 400)
		}
	}

	React.useEffect(() => {
		window.addEventListener("resize", function () {})
	}, [])

	return (
		<div 
			ref={refContainer} 
			className={`expand ${className}${isExpand?" expanded":""}`} 
			onClick={expand}
			style={{
				top: status.top,
				left: status.left,
				width: status.width,
				height: status.height
			}}
		>
			{isExpand && swapChildren ? swapChildren : children}
		</div>
	)
}

export default Expand