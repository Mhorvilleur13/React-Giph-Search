export function ShowRandomGiph({ giph, addGiph }) {
    return (
        <div className="random-giph">
            <h1>RANDOM GIPH</h1>
            <img src={giph} onClick={() => addGiph(giph)} height="300px" width="300px" ></img>
        </div>
    )
}

