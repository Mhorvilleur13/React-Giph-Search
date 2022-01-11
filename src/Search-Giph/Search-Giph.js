
export function ShowSearchGiph({ giphs }) {
    return (
        giphs.map((giph, index) => {
            return (<div className="search-result">
                <img src={giph} key={index} height="300px" width="300px" ></img>
            </div>
            )
        })
    )
}