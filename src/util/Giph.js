const key = 'qXA4kusyCMAcAkmUDWWLaBCCSJf7e044';
const url = `https://api.giphy.com/v1/gifs/random?api_key=${key}`;


const Giph = {
    async getRandomGiph() {
        try {
            const response = await fetch(url);
            if (response.ok) {
                const jsonResponse = await response.json();
                const giph = jsonResponse.data.images.original.url;
                console.log(giph);
                return giph
            }
        } catch (error) {
            console.log(error);
        }
    },

    async getGiph(inputValue) {
        const urlToFetch = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${inputValue}&limit=1`
        try {
            const response = await fetch(urlToFetch);
            if (response.ok) {
                const jsonResponse = await response.json();
                console.log(jsonResponse);
                // const giphies = jsonResponse.data[0].images.original.url;
                // const giphies = jsonResponse.data.map(item => item.images.original.url);
                const giphies = jsonResponse.data[0].images.original.url;
                console.log(giphies);
                return giphies;
            }
        } catch (error) {
            console.log(error);
        }
    }


}
export default Giph;

