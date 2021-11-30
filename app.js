fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "0949e9b673msh233a091b1953aa0p196ecfjsnfabd29d81f08"
	}
})
.then(response => {
	console.log(response);
})
.then((data) =>{

    return data










})
.catch(err => {
	console.error(err);
});