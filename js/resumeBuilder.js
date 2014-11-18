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
		$("#workExperience").append(HTMLchartButton); //section close btn
		$("#workExperience").append(HTMLworkStart);
		var _workEntries = $("#workEntries");
		for (var job in work.jobs) {
			if(job !== 0) {$(".work-entry:last").append("<hr>");}
			_workEntries.append(HTMLworkEntry);
			$(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[job].employer))
								.append(HTMLworkTitle.replace("%data%", work.jobs[job].title))
								.append(HTMLworkDates.replace("%data%", work.jobs[job].dates))
								.append(HTMLworkLocation.replace("%data%", work.jobs[job].location))
								.append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
		}
	}
};

// Defines Project section content and display method
var projects = {
	"projects": [
		{
			"title":"Mock Site",
			"datesworked":"Oct 2014",
			"description":"Produce a sample portfolio layout with CSS effects. The site can adapt to different screen sizes.",
			"images":["images/mockSite1.png","images/mockSite2.png","images/mockSite4.jpg"]
		},
		{
			"title":"Awesome Blog",
			"datesworked":"Jan 2014 - Mar 2014",
			"description":"Simply a blog that enables awesomeness to flow from keyboard to screen. Yes. Flow. Like water or air or something flowy. Whooosh.",
			"images":["images/wee-ki1.png","images/wee-ki2.png","images/wee-ki3.jpg"]
		},
		{
			"title":"368+ Mobile",
			"datesworked":"Jul 2013 - Aug 2014",
			"description":"A mobile-optimized web app for 368+, the law enforcement app meant to aid investigation of elder abuse cases.",
			"images":["images/368mobile1.png","images/368mobile2.png","images/368mobile3.png","images/368mobile4.png","images/368mobile5.jpg"]
		},
		{
			"title":"Acme Digital",
			"datesworked":"Jul 2012 - Sept 2012",
			"description":"Created a product page for a new line of products and handled maintenance and updates.",
			"images":["images/acmeDigital1.png","images/acmeDigital2.png","images/acmeDigital3.jpg"]
		}
	],

	// Renders html for Project section content
	render: function() {
		$("#projects").append(HTMLchartButton); //section close button
		$("#projects").append(HTMLprojectStart);
		// setup project selector
		for(var project in projects.projects) {
			$("#projectSelector").append(HTMLprojectThumb);
			//assign ID# and setup project selector thumbs
			$(".projectThumb:last").attr("id", project)
								.css("background", "url(" + projects.projects[project].images[0] + ") 50% 10%/cover no-repeat");
		}
		// initialize first displayed project
		$(".projectThumb:first").addClass("pressed");

		// initialize first project display		
		$("#projectDetail").prepend(HTMLprojectTitle.replace("%data%", projects.projects[0].title))
						.append(HTMLprojectDates.replace("%data%", projects.projects[0].datesworked))
						.append(HTMLprojectDescription.replace("%data%", projects.projects[0].description));
		$("#projectScreen img").attr("src", projects.projects[0].images[0]).attr("data-pic", 1).attr("data-project", 0);

		/* click handlers */
		// handler for selecting projects to view
		$("#projectSelector").on("click", ".projectThumb", function() {
			var selection = $(this).attr("id");
			$("#projectDetail").html(HTMLprojectTitle.replace("%data%", projects.projects[selection].title))
							.append(HTMLprojectDates.replace("%data%", projects.projects[selection].datesworked))
							.append(HTMLprojectDescription.replace("%data%", projects.projects[selection].description));
			$("#projectScreen img").attr("src", projects.projects[selection].images[0])
								.attr("data-pic", 1).attr("data-project", selection);
		});

		// handler for project image buttons
		$("#projectScreen").on("click", "a", function(event) {
			event.preventDefault(); // prevent 'a' tag from redirecting
			var nextPic;
			var currentProject = parseInt($("#projectImage").attr("data-project"), 10); //convert data to int
			var currentPic = parseInt($("#projectImage").attr("data-pic"), 10); //convert data to int

			if ($(event.target).attr("id") === "prevBtn") {
				nextPic = (currentPic - 1) === 0? projects.projects[currentProject].images.length : (currentPic - 1);
			}
			else {
				nextPic = (currentPic + 1) > projects.projects[currentProject].images.length? 1 : (currentPic + 1);
			}

			$("#projectScreen img").attr("src", projects.projects[currentProject].images[nextPic-1]).attr("data-pic", nextPic);
		});

		// Adding 'pressed' class to thumbnails so I can style that state
		$(".projectThumb").click(function() {
			$(".pressed").removeClass("pressed");
			$(this).addClass("pressed");
		});
	}
};

// Defines Bio section content and display method, including Skills Section
var bio = {
	"name":"Andrew Roy Chen",
	"role":"< Front End Sherpa >",
	"welcomeMessage":"welcome to the pimpin' site of",
	"blurbMessage":"I delight in slick user experience<br> and aspire to craft better interactions.<br> Let's create something awesome.",
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
			"Objective-C", "iOS Dev", "Python", "Backbone.js"
		],
	"footerInfo":"© Andrew Roy Chen 2014 CBA, Inc. 2014",

	// Renders html for Bio section content
	render: function() {
		var _topContacts = $("#topContacts");
		_topContacts.prepend(HTMLblurbMsg.replace("%data%", bio.blurbMessage));
		$("#sayMyName").prepend(HTMLheaderRole.replace("%data%", bio.role))
					.prepend(HTMLheaderName.replace("%data%", bio.name))
					.prepend(HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage))
					.append(HTMLteaserMsg.replace("%data%", bio.teaserMessage));

		// Build out contact links
		var test_title = /^(http)s?:\/\/.+(uncleoptimus|linkdinAC)$/i;	//fun with regular expressions :D
		for(var contact in bio.contacts) {
			if(test_title.test(bio.contacts[contact])) {
				_topContacts.append(HTMLcontactLink.replace("%data%", bio.contacts[contact]).replace("%badge%", contact));
			}
			else {
				_topContacts.append(HTMLcontactGeneric.replace("%data%", bio.contacts[contact]).replace("%badge%", contact));
			}
		}



		// fill in skills section
		$("#skillsChart").append(HTMLchartButton); //close button for skills section
		$("#skillsChart").append(HTMLskillsStart);
		var _skills = $("#skills");
		for(var skill in bio.skills) {
			_skills.append(HTMLskills.replace("%data%", bio.skills[skill]));
		}

		// append the footer section content
		$("#letsConnect").append(HTMLfooterStart.replace("%data%", bio.footerInfo));
	
		// dynamically adjust height of the teaser msg element to browser height
		var _teasermsg = $(".teaser-message");
		var adjHeight = $(window).height() - _teasermsg.offset().top;
		_teasermsg.css("height", adjHeight);

		// lets make a cool scroll distance detector
		// apppend the signature elements in nav (initial state hidden)
		_topContacts.prepend("<div id='contactbtn' class=''><span class='icon-handlogo'></span></div>");
		_topContacts.prepend("<a id='nav-signature' href='#'><span>A R C</span></a");


		// Borrowing underscore's debounce function to limit navmode calls
		function debounce(func, wait, immediate) {
			var timeout;
			return function() {
				var context = this, args = arguments;
				var later = function() {
					timeout = null;
					if (!immediate) func.apply(context, args);
				};
				var callNow = immediate && !timeout;
				clearTimeout(timeout);
				timeout = setTimeout(later, wait);
				if (callNow) func.apply(context, args);
			};
		}

		// define a helper function to handle nav mode switch
		function navTransform() {
			_blurbmsg.fadeToggle(600);
			_navsig.slideToggle(800);
			_topContacts.toggleClass("extra-padding nav-mode");
			$(_teasermsg).toggleClass("expand-page");

			// add the contact button shortcut for small screen sizes
			if ($(window).width() < 768) {
				_contactitems.fadeToggle(200);
				$("#contactbtn").fadeToggle(800);
			}

			if(!navmode) {
				_contactitems.css({fontSize:"1em"});
			}
			else {
				_contactitems.css({fontSize:"1.3em"});
			}
			navmode = !navmode;

			$("#main .chartContainer").toggleClass("rolledChart");
		}

		var screenheight = $(document).height,
			_header = $("header"),
			_blurbmsg= $(".blurb-message"),
			_navsig = $("#nav-signature"),
			_contactitems = $("#topContacts li"),
			navmode = false; // checks state of whether in nav mode

		_navsig.hide(); // not visible in default page load

		// get sceeen height and last header section element height
		// set the event handler with a debounce so that extra scrolls don't wonk things up
		// Note: 50ms chosen as an interval limit because higher values may lag transform pt
		$(document).scroll(debounce(function() {
			if(!navmode) {
				// check for distance scrolled in header section
				if($(this).scrollTop() > _teasermsg.offset().top) {
					// _contactitem.css({fontSize:"1em"});
					// _topContacts.css({position:'fixed', top:0, "z-index":4, padding:"1px"});
					navTransform();
				}
			}
			else {
				if($(this).scrollTop() < _teasermsg.offset().top) {
					// _contactitem.css({fontSize:"1.3em"}); //problem: size is dependent on screen size...maybe use a toggle class to save state?
					// _topContacts.css({position:'static', "z-index":1, padding:"1em"});
					navTransform();
				}
			}
		}, 50));
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
		$("#education").append(HTMLchartButton); //close button for edu section
		/* list out old-school...schooling */
		$("#education").append(HTMLeduStart);
		var _schools = $("#schools");
		for(var school in education.schools) {
			_schools.append(HTMLschoolStart);
			var _newEduEntry = $(".education-entry:last");
			_newEduEntry.append(HTMLschoolName.replace("%data%", education.schools[school].name).replace("%url%", education.schools[school].url))
									.append(HTMLschoolDegree.replace("%data%", education.schools[school].degree))
									.append(HTMLschoolDates.replace("%data%", education.schools[school].datesattended))
									.append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
			for(var major in education.schools[school].majors) {
				_newEduEntry.append(HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]));
			}
		}
		/* list out online courses */
		for(var course in education.onlineCourses) {
			_schools.append(HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school));
			$(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title))
									.append(HTMLonlineDates.replace("%data%", education.onlineCourses[course].datesattended))
									.append(HTMLonlineURL.replace("%data%", education.onlineCourses[course].url));
		}
	}
};

var customMap = {
	render: function() {
		$("#whereInTheWorld").append(googleMap);
		$("#whereInTheWorld").append(HTMLchartButton);
	}
};

$(function() {
	/* Kickoff Party */
	bio.render();
	work.render();
	education.render();
	projects.render();
	customMap.render();

	$("#main .chartContainer").toggleClass("rolledChart"); //initiate all sections as closed

	// have this animation fire after user has scrolled at least 10pixels...?
	$(".teaserLogo").delay(5000).animate({fontSize: "1.5em"}, 600, function() {});

	var _chartbtn = $(".chartBtn");
	// control hover state for chart borders
	_chartbtn.hover(
		function()
		{
			$(this).parent().css("borderColor", "#a42117");
		},
		function() {
			$(this).parent().css("borderColor", "#b6c4db");
		}
	);

	// minimize section charts and toggle button label
	_chartbtn.click(function() {
		var _targetSection = $(this).parent();
		if (_targetSection.hasClass("rolledChart")) {
			$(this).find("span").html("-");
		}
		else {
			$(this).find("span").html("+");
		}
		// _targetSection.find("ul").slideToggle(200);
		// _targetSection.find("div").slideToggle(400);
		_targetSection.toggleClass("rolledChart"); //add this class to signal state and trigger css transition
	});


});




