var SolarSystem = (function(oldSolarSystem){
	var stars = ["sun", "Alpha Centauri", "Wolf 359"];

	oldSolarSystem.getStars = function(){
		return stars;
	};

	oldSolarSystem.setStars = function(newStar){
		stars.push(newStar);
	};

	return oldSolarSystem;
})(SolarSystem || {});