let monthNumber = (new Date().getMonth());
let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let monthName = monthNames[monthNumber];

function Header() {
	const cmonth = new Date().getFullYear()
	return(
		<header>
			<h1>{monthName +' '+ cmonth}</h1>
		</header>
	)
}

export default Header;
