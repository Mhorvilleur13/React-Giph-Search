export function GiphPlaylist({ giphPlaylist, removeGiph }) {
    return (
        giphPlaylist.map((giph, index) => {
            return (<div className="search-result">
                <img src={giph} key={index} height="300px" width="300px" ></img>
                <button onClick={() => removeGiph(giph)}>Remove From Playlist</button>
            </div>
            )
        })
    )
}