/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman

Addendum dumdumdum. Modified the HTML strings and added some aditional ones as I saw fit. - Andrew Roy Chen
*/


/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLheaderName = "<h1 id='name'>%data%</h1>";
var HTMLheaderRole = "<span>%data%</span>";

var HTMLchartButton = "<p class='chartBtn'><span>-</span></p>"; //added to offer a section close button

var HTMLcontactLink = "<li class='resumeOrange'><span class='icon-%badge% contactBadge'></span><a href='%data%' class='contactItem' target='_blank'>link</a></li>";
var HTMLcontactGeneric = "<li class='resumeOrange'><span class='icon-%badge% contactBadge'></span><span class='contactItem'>%data%</span></li>";
var HTMLcontactPhone = "<li class='resumeOrange'><span class='icon-%badge% contactBadge'></span><span class='contactItem phoneLink'>%data%</span><a class='callbtn' href='tel:%phone%'>call</a></li>";
var HTMLcontactBtn = "<div id='contactbtn'><span class='icon-handlogo'></span><ul id='contactsdrawer'></ul></div>";
var HTMLcontactShorty = "<li class='conbtn'><span class='icon-%badge% contactBadge center-hack'></span><span class='contactItem'>%data%</span></li>";

var HTMLmobile = "<li class='flex-item'><span class='orange-text'>mobile</span><span class='white-text'>%data%</span></li>";
var HTMLemail = "<li class='flex-item'><span class='orange-text'>email</span><span class='white-text'>%data%</span></li>";
var HTMLtwitter = "<li class='flex-item'><span class='orange-text'>twitter</span><span class='white-text'>%data%</span></li>";
var HTMLgithub = "<li class='flex-item'><span class='orange-text'>github</span><span class='white-text'>%data%</span></li>";
var HTMLblog = "<li class='flex-item'><span class='orange-text'>blog</span><span class='white-text'>%data%</span></li>";
var HTMLlocation = "<li class='flex-item'><span class='orange-text'>location</span><span class='white-text'>%data%</span></li>";

var HTMLbioPic = "<img src='%data%' class='biopic'>";
var HTMLWelcomeMsg = "<span class='welcome-message'>%data%</span>";
var HTMLblurbMsg = "<p class='blurb-message'>%data%</p>"; //added
var HTMLteaserMsg = "<div class='teaser-message'><span><span class='icon-handlogo teaserLogo'></span> %data%</span></div>"; //added

var HTMLskillsStart = "<h3 id=''>Skills at a Glance</h3><ul id='skills' class='flex-box'></ul>";
var HTMLskills = "<li><span>%data%</span></li>";

var HTMLworkStart = "<h3>Work Experience</h3><ul id='workEntries' class=''></ul>";
var HTMLworkEntry = "<li><div class='work-entry'></div></li>"; //added this snippet myself
var HTMLworkEmployer = "<a href='#'>%data%</a>";
var HTMLworkTitle = "<p> - %data%</p>";
var HTMLworkDates = "<div class='date-text'>%data%</div>";
var HTMLworkLocation = "<div class='location-text'>%data%</div>";
var HTMLworkDescription = "<p><br>%data%</p>";

var HTMLprojectStart = "<h3>Projects</h3><div id='projectScreen'><a id='prevBtn' href='#'></a><img id='projectImage' class='center-hack' src=''><a id='nextBtn' href='#'></a></div><div id='projectDetail'></div><div id='projectSelector'></div>";
var HTMLprojectTitle = "<h4>Now Showing:</h4><a class='projectTitle' href='%url%' target='_blank'>%data%</a>";
var HTMLprojectDates = "<div class='date-text'><h4>Dates Worked:</h4><p class='projectInfo'>%data%</p></div>";
var HTMLprojectDescription = "<p class='projectInfo'>%data%</p>";
var HTMLprojectImage = "<img id='projectScreen' class='' src='%data%'>";
var HTMLprojectThumb = "<div class='projectThumb'></div>";

var HTMLeduStart = "<h3>Education</h3><ul id='schools' class=''></ul>";
var HTMLschoolStart = "<div class='education-entry'></div>";
var HTMLschoolName = "<p><a href='%url%'>%data%";
var HTMLschoolDegree = " -- %data%</a></p>";
var HTMLschoolDates = "<p class='date-text'>%data%</p>";
var HTMLschoolLocation = "<div class='location-text'>%data%</div>";
var HTMLschoolMajor = "<p><em>Major: %data%</em></p>";

//added a wrapper div for online course entries for styling purposes
var HTMLonlineClasses = "<h3>Online Classes</h3>";
var HTMLonlineTitle = "<p>%data%</p>";
var HTMLonlineSchool = "<div class='education-entry'>ONLINE<a href='#'> - %data%</a>";
var HTMLonlineDates = "<div class='date-text'>%data%</div>";
var HTMLonlineURL = "<a href='%data%'>course link</a></div>";

var HTMLfooterStart = "<hr class='feature-divider'><p class='text-center'>%data%</p><hr class='feature-divider'>";
var internationalizeButton = "<button>Internationalize</button>";
var googleMap = "<h3>I've Worked Here</h3><div id='map' class=''></div>";


/*
The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
  $('button').click(function() {
    var iName = inName() || function(){};
    $('#name').html(iName);
  });

});


/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      "x": x,
      "y": y
    }
  );
  console.log("x location: " + x + "; y location: " + y);
}

$(document).click(function(loc) {
  // your code goes here!
  // OK my code is going here!!


});



/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  // This next line makes `map` a new Google Map JavaScript Object and attaches it to
  // <div id="map">, which is appended as part of an exercise late in the course.
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {
    
    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);
    
    // iterates through school locations and appends each location to
    // the locations array
    for (var school in education.schools) {
      locations.push(education.schools[school].location);
    }

    // iterates through work locations and appends each location to
    // the locations array
    for (var job in work.jobs) {
      locations.push(work.jobs[job].location);
    }

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.k;  // latitude from the place service
    var lon = placeData.geometry.location.B;  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });
    
    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      // your code goes here!
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);
    
    // Iterates through the array of locations, creates a search object for each location
    for (var place in locations) {

      // the search request object
      var request = {
        query: locations[place]
      };

      // Actually searches the Google Maps API for location data and runs the callback 
      // function with the search results after each search.
      service.textSearch(request, callback);
    }
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);
  
}

/*
Uncomment all the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window 
// and adjust map bounds
window.addEventListener('resize', function(e) {
  // Make sure the map bounds get updated on page resize
 map.fitBounds(mapBounds);
});
