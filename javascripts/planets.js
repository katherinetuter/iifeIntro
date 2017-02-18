var SolarSystem = (function(oldSolarSystem){
	var planets = ["mercury", "mars", "earth", "venus", "jupiter", "saturn", "neptune", "uranus"];
	var numPlanetsPeopleLandedOn = 0;

	oldSolarSystem.getPlanets = function(){
			return planets;
	};

	oldSolarSystem.getPlanetsLandedPeopleOn = function(){
			return numPlanetsPeopleLandedOn;
	};

	oldSolarSystem.setPlanetsLandedPeopleOn = function(){
			numPlanetsPeopleLandedOn++;
	};

	return oldSolarSystem;
})(SolarSystem || {});