

function SearchBox({value, onHandleSearchInput}) {
	return(
		<div className="search-container d-flex justify-center">
			<input type="type" onInput={e => onHandleSearchInput(e.target.value)} value={value} placeholder="Type Keywords" className="search-input" />
		</div>
	)
}

export default SearchBox