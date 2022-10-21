import NameCard from "./NameCard"

function ResultsContainer({suggestedNames}){

	return (
		<div className="result-container d-flex justify-center">
			{
				suggestedNames.length == 0  ? <h2>No Names to Render</h2>  :
				suggestedNames.map((name, ind) => <NameCard key={ind} name={name}>{name}</NameCard>)	
			}
		</div>
		
	)
}

export default ResultsContainer