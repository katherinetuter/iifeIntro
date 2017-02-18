//in iife variables capitalize the first letter
var SolarSystem = (function(){
	var planets = ["mercury", "mars", "earth", "venus", "jupiter", "saturn", "neptune", "uranus"]
	var dwarfPlanets = ["pluto"]
	var numPlanetsPeopleLandedOn = 0;
	var spaceships = [];
	var stars = ["sun", "Alpha Centauri", "Wolf 359"];
	var age = 0;
	return {
		getPlanets: function(){
			return planets;
		},
		getPlanetsLandedPeopleOn: function(){
			return numPlanetsPeopleLandedOn;
		},
		setPlanetsLandedPeopleOn: function(){
			numPlanetsPeopleLandedOn++;
		},
		getSpaceships: function(){
			return spaceships;
		},
		setSpaceships: function(newSpaceship){
			spaceships.push(newSpaceship);
		},
		wreckSpaceships: function(){
			spaceships.pop();
		},
		getDwarfPlanets: function(){
			return "they are rejects";
		},
		setDwarfPlanets: function(lumpOfRock){
			dwarfPlanets.push(lumpOfRock);
		},
		getStars: function(){
			return stars;
		},
		setStars: function(newStar){
			stars.push(newStar);
		},
		getSolarSystemAge: function(){
			return age;
		},
		setSolarSystemAge: function(){
			age++;
		}
	}
})();

console.log("planets: ", SolarSystem.getPlanets());
console.log("planets with people: ", SolarSystem.getPlanetsLandedPeopleOn());
SolarSystem.setSpaceships("Voyager 1");
SolarSystem.setSpaceships("Voyager 2");
SolarSystem.setSpaceships("Apollo");
SolarSystem.setSpaceships("Gemini");
console.log("spaceships: ", SolarSystem.getSpaceships());

