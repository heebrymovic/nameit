

const nameCheapUrl = "https://www.namecheap.com/domains/registration/results/?domain=";

function NameCard({name}) {

	return(
		<a target="_blank" href={`${nameCheapUrl}${name}`} className="result-name-card d-flex justify-center">
			<p>{name}</p>
		</a>
	)
}

export default NameCard