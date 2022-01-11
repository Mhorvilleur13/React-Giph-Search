export function RandomButton({ switchGiph }) {
    return (
        <div className="giph-search">
            <h1>Find a Random Giph</h1>
            <button onClick={() => switchGiph()}>Random Giph</button>
        </div>
    )
}