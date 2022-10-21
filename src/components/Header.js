

function Header({title, inputExpanded}) {
	return(
		<header className="header d-flex align-center flex-col">
			<img src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"
			className={`header-img ${inputExpanded ? "header-img-expanded" :  "header-img-shrink"}`}
			 alt="header-logo"/>
			<h1 className={`header-title ${inputExpanded ? "header-title-expanded" :  "header-title-shrink"}`}>{title}</h1>
		</header>
	)
}

export default Header