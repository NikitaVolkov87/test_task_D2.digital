function getImage() {
	/*var data = "{}";
	var xhr = new XMLHttpRequest();
	xhr.withCredentials = true;
	xhr.addEventListener("readystatechange", function () {
	  if (this.readyState === this.DONE) {
	    console.log(this.responseText);
	    return `
	    	<img src="http://image.tmdb.org/t/p/w500/hEpWvX6Bp79eLxY1kX5ZZJcme5U.jpg" alt="image here">
	    `
	  }
	});
	xhr.open("GET", "http://image.tmdb.org/t/p/w500/hEpWvX6Bp79eLxY1kX5ZZJcme5U.jpg");
	xhr.send(data);*/
	document.getElementById('image').innerHTML = `
  	<img src="http://image.tmdb.org/t/p/w500/hEpWvX6Bp79eLxY1kX5ZZJcme5U.jpg" alt="image here">
  `;
}
