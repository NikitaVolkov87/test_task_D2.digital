function getImage() {
	if ( event.target.value.length > 30 ) {
		let imageUrl = event.target.value;
		document.getElementById('image').innerHTML = `
	  	<img src="http://image.tmdb.org/t/p/w500${imageUrl}" alt="image here">
	  `;
	}
}
