
export function ShowSearchGiph({ giphs, addGiph }) {
    return (
        giphs.map((giph, index) => {
            return (<div className="search-result">
                <img src={giph} onClick={() => addGiph(giph)} key={index} height="300px" width="300px" ></img>
            </div>
            )
        })
    )
}