/* custom javascript for Project 2 Interactive Resume
/* Project requirements include:
/*    -modularization of content sections  -function encapsulation
--------------------------------------------------------------------- */

// Defines Work section content and display method
var work = {
	"jobs": [
		{
			"employer":"Starbucks",
			"title":"Barista",
			"location":"La Jolla, CA",
			"dates":"Oct 2005 - Mar 2007",
			"description":"Energize customers!",
		},
		{
			"employer":"JET Programme",
			"title":"Mr. American Ambassador Guy",
			"location":"Soo City, Kagoshima",
			"dates":"Jul 2007 - Jul 2009",
			"description":"Energize Japanese students!",
		},
		{
			"employer":"Acme Digital, Inc.",
			"title":"Product Development Associate",
			"location":"Taipei, Taiwan",
			"dates":"Jun 2012 - Dec 2012",
			"description":"Energize new product lines.",
		}
	],

	// Renders html for Work section content
	render: function() {
		$("#workExperience").append(HTMLworkStart);
		for (var job in work.jobs) {
			if(job !== 0) {$(".work-entry:last").append("<hr>");}

			$("#workEntries").append(HTMLworkEntry);
			$(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[job].employer))
								.append(HTMLworkTitle.replace("%data%", work.jobs[job].title))
								.append(HTMLworkDates.replace("%data%", work.jobs[job].dates))
								.append(HTMLworkLocation.replace("%data%", work.jobs[job].location))
								.append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
/*
			$(".contentWrapper").append(HTMLworkEntry);
			$(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[job].employer));
			$(".work-entry:last").append(HTMLworkTitle.replace("%data%", work.jobs[job].title));
			$(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
			$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
			$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description)); */
		}
		
	}
};

// Defines Project section content and display method
var projects = {
	"projects": [
		{
			"title":"Mock Site",
			"datesworked":"Oct 2014",
			"description":"Produce a sample portfolio layout with CSS effects.",
			"images":["images/mockSite1.png","images/mockSite2.png","images/mockSite3.png"]
		},
		{
			"title":"The Blog of Awesome",
			"datesworked":"Jan 2014 - Mar 2014",
			"description":"Simply a blog that enables awesomeness to flow from the keyboard.",
			"images":["images/smashbrosInset.png"]
		},
		{
			"title":"368+ Mobile",
			"datesworked":"Jul 2013 - Aug 2014",
			"description":"A mobile-optimized web app for 368+",
			"images":["images/nbacares.png"]
		},
		{
			"title":"Acme Digital Product Page",
			"datesworked":"Jul 2012 - Sept 2012",
			"description":"Created a product page for a new line of products.",
			"images":["images/icancode.jpg"]
		}
	],

	// Renders html for Project section content
	render: function() {
		$("#projects").append(HTMLchartButton);
		

		//initialize first project display		
		$("#projectDetail").prepend(HTMLprojectTitle.replace("%data%", projects.projects[0].title));
		$("#projectDetail").append(HTMLprojectDates.replace("%data%", projects.projects[0].datesworked));
		$("#projectDetail").append(HTMLprojectDescription.replace("%data%", projects.projects[0].description));
		//$("#projects").append(HTMLprojectImage.replace("%data%", ""));
		$("#projectScreen img").attr("src", projects.projects[0].images[0]);


		for(var project in projects.projects) {
			$("#projectSelector").append(HTMLprojectThumb);//.replace("%data%", projects.projects[project].images[0]));
			//assign ID#
			$(".projectThumb:last").attr("id", project);
			//setup project selector thumbs
			$(".projectThumb:last").css("background", "url(" + projects.projects[project].images[0] + ") center/cover no-repeat");

			//code to setup the image carousel
			//each html snippet is an img that has been foramtted to display inline block
			//the #projectScreen uses overflow:hide to conceal non-focus images
			// var imgCarousel = projects.projects[project].images
			/* for(var img in projects.projects[project].images) {
				$("#projectScreen").append(HTMLcarouselPic.replace("%data%", projects.projects[project].images[img]));
			} */
		}

		// initialize first displayed project
		$(".projectThumb:first").addClass("pressed");


		/* click handlers */
		$("#projectSelector").on("click", ".projectThumb", function() {
			console.log("Thumb clicked!");
			var selection = $(this).attr("id");
			$("#projectDetail").html(HTMLprojectTitle.replace("%data%", projects.projects[selection].title));
			$("#projectDetail").append(HTMLprojectDates.replace("%data%", projects.projects[selection].datesworked));
			$("#projectDetail").append(HTMLprojectDescription.replace("%data%", projects.projects[selection].description));
		});
	}
};

// Defines Bio section content and display method
var bio = {
	"name":"Andrew Roy Chen",
	"role":"< Front End Sherpa >",
	"welcomeMessage":"welcome to the pimpin' site of",
	"blurbMessage":"I delight in slick user experience<br> and aspire to craft better.<br> Let's create something awesome.",
	"teaserMessage":"Oh. Need to know more?",
	"contacts": {
			"mobile":"650-980-4424",
			"mail":"uncle.optimus@gmail.com",
			"github2":"https://github.com/uncleoptimus",
			"linkedin":"http://tinyurl.com/linkdinAC",
			"location":"Orange County"
		},
	"skills": [
			"javascript", "HTML / CSS3", "jQuery",
			"Objective-C/iOS Dev", "Python", "Backbone.js"
		],
	"footerInfo":"© Andrew Roy Chen 2014 CBA, Inc. 2014",

	// Renders html for Bio section content
	render: function() {
		$("#topContacts").prepend(HTMLblurbMsg.replace("%data%", bio.blurbMessage));
		$("#sayMyName").prepend(HTMLheaderRole.replace("%data%", bio.role));
		$("#sayMyName").prepend(HTMLheaderName.replace("%data%", bio.name));
		$("#sayMyName").prepend(HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage));

		//$("#selfIntro").append(HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage));


		var test_title = /^(http)s?:\/\/.+(uncleoptimus|linkdinAC)$/i;	//fun with regular expressions :D

		for(var contact in bio.contacts) {
			if( test_title.test(bio.contacts[contact]) ) {
				$("#topContacts").append(HTMLcontactLink.replace("%data%", bio.contacts[contact]).replace("%badge%", contact));
			}
			else $("#topContacts").append(HTMLcontactGeneric.replace("%data%", bio.contacts[contact]).replace("%badge%", contact));
		}
		$("#sayMyName").append(HTMLteaserMsg.replace("%data%", bio.teaserMessage));

		// dynamically adjust height of the teaser msg element
		var w = $(window).height();
		var msgtop = $(".teaser-message").offset().top;
		console.log("Coord 1 is %s and pos 2 is %s", w, msgtop);
		var adjHeight = w - msgtop;
		$(".teaser-message").css("height", adjHeight);


		$("#skillsChart").append(HTMLskillsStart);
		for(var skill in bio.skills) {
			$("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
		}

		$("#letsConnect").append("<p class='text-center'>%data%</p>".replace("%data%", bio.footerInfo));
	}
};

// Defines Education section content and display method
var education = {
	"schools": [
			{
				"name":"University of California, San Diego",
				"location":"La Jolla, CA",
				"degree":"B.S. Computer Science",
				"majors":["Computer Science", "Japanese"],
				"datesattended":"Sept 1999 - Mar 2005",
				"url":"http://www.ucsd.edu"
			},
			{
				"name":"Ming Chuan University",
				"location":"Taipei, Taiwan",
				"degree":"Masters in Business Administration",
				"majors":["MBA"],
				"datesattended":"Oct 2009 - Mar 2013",
				"url":"http://www.mcu.edu.tw"
			}
		],
	"onlineCourses": [
			{
				"title":"Web Development",
				"school":"Udacity",
				"datesattended":"Jan 2014 - Mar 2014",
				"url":"https://www.udacity.com/course/cs253"
			},
			{
				"title":"Mobile Web Development",
				"school":"Udacity",
				"datesattended":"Mar 2014 - May 2014",
				"url":"https://www.udacity.com/course/cs256"
			}
		],

	// Renders html for Eduction section content
	render: function() {
		/* list out old-school...schooling */
		$("#education").append(HTMLeduStart);
		for(var school in education.schools) {
			$("#schools").append(HTMLschoolStart);
			$(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[school].name).replace("%url%", education.schools[school].url))
									.append(HTMLschoolDegree.replace("%data%", education.schools[school].degree))
									.append(HTMLschoolDates.replace("%data%", education.schools[school].datesattended))
									.append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
			for(var major in education.schools[school].majors) {
				$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]));
			}
		}
		/* list out online courses */
		for(var course in education.onlineCourses) {
			$("#schools").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school));
			$(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title))
									.append(HTMLonlineDates.replace("%data%", education.onlineCourses[course].datesattended))
									.append(HTMLonlineURL.replace("%data%", education.onlineCourses[course].url));
		}
	}
};

$(function() {
	/* Kickoff Party */
	bio.render();
	work.render();
	education.render();
	projects.render();

	// have this animation fire after user has scrolled at least 10pixels...?
	$(".teaserLogo").delay(5000).animate({fontSize: "1.5em"}, 600, function() {});

	// control hover state for chart borders
	$(".chartBtn").hover(
		function()
		{
			$(this).parent().css("borderColor", "#a42117");
		},
		function() {
			$(this).parent().css("borderColor", "#b6c4db");
		}
	);

	// minimize section charts and toggle button label
	$( ".chartBtn" ).click(function() {
		var charty = $(this).parent();
		if ( $(this).parent().hasClass("rolledChart") ) {
			$(this).find("span").html("-");
		}
		else {
			$(this).find("span").html("+");
		}

		$(this).parent().toggleClass("rolledChart");

		$(this).parent().find("ul").slideToggle(200);
	});

	//time for some overkill. Adding ARIA-pressed to thumbnails so I can style that state
	$(".projectThumb").click(function() {
		$(".pressed").removeClass("pressed");
		$(this).addClass("pressed");

		/*$(".projectThumb[aria-pressed]").removeAttr("aria-pressed");
		$(this).attr("aria-pressed", "true"); */
	});


});




