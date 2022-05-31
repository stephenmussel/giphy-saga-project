function SearchItem({ gif, i }) {
    return(
        <div>
        <img 
            key={i} 
            src={gif}
            alt="images"
            style={{marginTop: 25, marginBottom: 5}}
        /><br />
        <button>favorite</button>
        </div>
    )
}

export default SearchItem;