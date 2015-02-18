/*** custom javascript for Project 2 Interactive Resume
	Project requirements include:
	-modularization of content sections  -function encapsulation
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
		$("#workExperience").append(HTMLchartButton).append(HTMLworkStart);
		var _workEntries = $("#workEntries");
		var listLen = work.jobs.length;
		// add <hr> divider after prev entry, then add next entry
		for(var job=0; job<listLen; job++) {
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
			"images":["images/mockSite1.png","images/mockSite2.png","images/mockSite4.jpg"],
			"url":"http://uncleoptimus.github.io/udacityP1"
		},
		{
			"title":"Awesome Blog",
			"datesworked":"Jan 2014 - Mar 2014",
			"description":"Simply a blog that enables awesomeness to flow from keyboard to screen. Yes. Flow. Like water or air or something flowy. Whooosh.",
			"images":["images/wee-ki1.png","images/wee-ki2.png","images/wee-ki3.jpg"],
			"url":"http://wiki-ac.appspot.com"
		},
		{
			"title":"368+ Mobile",
			"datesworked":"Jul 2013 - Aug 2014",
			"description":"A mobile-optimized web app for 368+, the law enforcement app meant to aid investigation of elder abuse cases.",
			"images":["images/368mobile1.png","images/368mobile2.png","images/368mobile3.png","images/368mobile4.png","images/368mobile5.jpg"],
			"url":"http://www.m368demo.appspot.com"
		},
		{
			"title":"Acme Digital",
			"datesworked":"Jul 2012 - Sept 2012",
			"description":"Created a product page for a new line of products and handled maintenance and updates.",
			"images":["images/acmeDigital1.png","images/acmeDigital2.png","images/acmeDigital3.jpg"],
			"url":"http://www.acmetn.com"
		}
	],

	// Renders html for Project section content
	render: function() {
		$("#projects").append(HTMLchartButton).append(HTMLprojectStart);
		var _projectSelector = $("#projectSelector"),
			_projectImg = $("#projectImage"),
			_projectDetail = $("#projectDetail");
		// setup project selector
		var listLen = projects.projects.length;
		for(var project=0; project<listLen; project++) {
			_projectSelector.append(HTMLprojectThumb);
			//assign ID# and setup project selector thumbs
			$(".projectThumb:last").attr("id", project)
								.css("background", "url(" + projects.projects[project].images[0] + ") 50% 10%/cover no-repeat");
		}
		// initialize first displayed project with 'pressed' class
		$(".projectThumb:first").addClass("pressed");

		// initialize first project display
		_projectDetail.prepend(HTMLprojectTitle.replace("%data%", projects.projects[0].title).replace("%url%", projects.projects[0].url))
						.append(HTMLprojectDates.replace("%data%", projects.projects[0].datesworked))
						.append(HTMLprojectDescription.replace("%data%", projects.projects[0].description));
		_projectImg.attr("src", projects.projects[0].images[0]).attr("data-pic", 1).attr("data-project", 0);

		/* ----- handlers ----- */
		// handler for selecting projects to view
		_projectSelector.on("click", ".projectThumb", function() {
			var selection = $(this).attr("id");
			_projectDetail.html(HTMLprojectTitle.replace("%data%", projects.projects[selection].title).replace("%url%", projects.projects[selection].url))
							.append(HTMLprojectDates.replace("%data%", projects.projects[selection].datesworked))
							.append(HTMLprojectDescription.replace("%data%", projects.projects[selection].description));
			_projectImg.attr("src", projects.projects[selection].images[0])
								.attr("data-pic", 1).attr("data-project", selection);
		});

		// handler for project image button controls
		$("#projectScreen").on("click", "a", function(event) {
			event.preventDefault(); // prevent 'a' tag from redirecting
			var nextPic;
			var currentProject = parseInt(_projectImg.attr("data-project"), 10); //convert data to int
			var currentPic = parseInt(_projectImg.attr("data-pic"), 10); //convert data to int

			if ($(event.target).attr("id") === "prevBtn") {
				nextPic = (currentPic - 1) === 0 ? projects.projects[currentProject].images.length : (currentPic - 1);
			}
			else {
				nextPic = (currentPic + 1) > projects.projects[currentProject].images.length ? 1 : (currentPic + 1);
			}
			_projectImg.attr("src", projects.projects[currentProject].images[nextPic-1]).attr("data-pic", nextPic);
		});

		// Add 'pressed' class to thumbnails so I can style that state, remove from prev selected item
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
	"welcomeMessage":"Currently in ",
	"blurbMessage":"I delight in slick user experience<br> and aspire to craft better interactions.<br> Let's create something awesome.",
	"teaserMessage":"Oh. Need to know more?",
	"contacts": {
			"mobile":"650-980-4424",
			"mail":"uncle.optimus@gmail.com",
			"github2":"https://github.com/uncleoptimus",
			"linkedin":"http://tinyurl.com/linkdinAC",
			"location":"Orange County, CA"
		},
	"skills": [
			"JavaScript", "HTML / CSS3", "jQuery",
			"Objective-C", "iOS Dev", "Python", "Backbone.js"
		],
	"footerInfo":"© Andrew Roy Chen 2014 CBA, Inc. 2014",

	// Renders html for Bio section content
	render: function() {
		var _topContacts = $("#topContacts");
		_topContacts.prepend(HTMLcontactBtn);	// apppend the signature elements in nav (initial state hidden)
		_topContacts.prepend("<a id='nav-signature' href='#'><span>A R C</span></a");
		var _contactbtn = $("#contactbtn");
		var _contactsDrawer = $("#contactsdrawer");
		_topContacts.prepend(HTMLblurbMsg.replace("%data%", bio.blurbMessage));
		$("#sayMyName").prepend(HTMLheaderRole.replace("%data%", bio.role))
					.prepend(HTMLheaderName.replace("%data%", bio.name))
					.prepend(HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage))
					.append(HTMLteaserMsg.replace("%data%", bio.teaserMessage));

		// Build out contact links
		var test_title = /^(http)s?:\/\/.+(uncleoptimus|linkdinAC)$/i;	//fun with regular expressions :D
		for(var contact in bio.contacts) {
			if(contact !== "location") {
				// For out-link contacts like to github
				if(test_title.test(bio.contacts[contact])) {
					_topContacts.append(HTMLcontactLink.replace("%data%", bio.contacts[contact]).replace("%badge%", contact));
					_contactsDrawer.append(HTMLcontactShorty.replace("%data%", bio.contacts[contact]).replace("%badge%", contact));
				}
				else {
					// Note: "location" is positioned seperate; "dial btn" functionality for phone contacts uses diff template
					if(contact === "mobile") {
						_topContacts.append(HTMLcontactPhone.replace("%data%", bio.contacts[contact]).replace("%badge%", contact).replace("%phone%", bio.contacts["mobile"]));
						_contactsDrawer.append(HTMLcontactShortyPhone.replace("%data%", bio.contacts[contact]).replace("%badge%", contact).replace("%phone%", bio.contacts["mobile"]));
					}
					else {
						_topContacts.append(HTMLcontactGeneric.replace("%data%", bio.contacts[contact]).replace("%badge%", contact));
						_contactsDrawer.append(HTMLcontactShorty.replace("%data%", bio.contacts[contact]).replace("%badge%", contact));
					}
				}
			}
			else {
				$(".welcome-message").append(bio.contacts[contact]);
			}
		}

		// fill in skills section
		var _skillsSection = $("#skillsChart");
		_skillsSection.append(HTMLchartButton); //close button for skills section
		_skillsSection.append(HTMLskillsStart);
		var _skills = $("#skills");

		var listLen = bio.skills.length;
		for(var skill = 0; skill<listLen; skill++) {
			_skills.append(HTMLskills.replace("%data%", bio.skills[skill]));
		}

		// append the footer section content
		$("#letsConnect").append(HTMLfooterStart.replace("%data%", bio.footerInfo));

		// lets make a cool scroll distance detector!
		// First, borrowing underscore's debounce function to limit navmode calls...
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

		// Then, define a helper function to handle nav mode switch...
		var _sectionContainers = $(".chartContainer");
		function navTransform() {
			_blurbmsg.fadeToggle(600);
			_navsig.slideToggle(800);
			_topContacts.toggleClass("extra-padding nav-mode");
			$(_teasermsg).toggleClass("expand-page");

			// summon contact button shortcut for small screen sizes only
			if ($(window).width() < 768) {
				_contactitems.fadeToggle(200);
				_contactbtn.fadeToggle(800);
			}
			if(!navmode) {
				_contactitems.css({fontSize:"1em"});
			}
			else {
				_contactitems.css({fontSize:"1.3em"});
			}
			navmode = !navmode;
			// toggle open of all resume sections with each transform
			_sectionContainers.toggleClass("rolledChart");
		}

		var screenheight = $(document).height,
			_header = $("header"),
			_blurbmsg= $(".blurb-message"),
			_navsig = $("#nav-signature"),
			_contactitems = $("#topContacts > li"),
			navmode = false; // checks state of whether in nav mode

		_navsig.hide(); // not visible on default page load

		// dynamically adjust height of the teaser msg element to browser height
		var _teasermsg = $(".teaser-message");
		var adjHeight = $(window).height() - _teasermsg.offset().top;
		_teasermsg.css("height", adjHeight);

		/* ------ Handlers ------ */
		// Toggle navmode: get sceeen height and last header section element height
		// set the event handler with a debounce so that extra scrolls don't wonk things up
		// Note: 50ms chosen as an interval limit because higher values may lag transform pt
		$(document).scroll(debounce(function() {
			if(!navmode) {
				// check for distance scrolled in header section
				if($(this).scrollTop() > _teasermsg.offset().top) {
					navTransform();
				}
			}
			else {
				if($(this).scrollTop() < _teasermsg.offset().top) {
					navTransform();
				}
			}
		}, 50));

		// Handler to make the contacts slide out menu for mobile mode
		_contactbtn.click(function(e){
			// for links, do allow the link behavior, don't allow the menu to close
			// if(e.target.nodeName === "A") e.stopPropagation();
			_contactbtn.toggleClass("btn-active");
			_contactsDrawer.slideToggle(600, "linear");
		});

		// Handler to add extra press function to phone links.
		// Will make a call btn appear, and disappear on mouseleave while restoring og hover effect
		_topContacts.find("li").on("click", ".phoneLink", function(e) {
			console.log("a phonelink has been pressed!");
			e.preventDefault();
			e.stopPropagation();
			$(this).hide();
			$(this).next("a").fadeIn();
		}).on("mouseleave", ".callbtn", (function() {
			console.log("focus has exited btn!");
			$(this).fadeOut();
		})).hover(function() {
			$(this).find(".phoneLink").show();
		}, function() {
			$(this).find(".phoneLink").hide();
		});

		_contactsDrawer.on("click", ".callbtn-short", function() {
			$(this).hide();
			$(this).prev(".phoneLink").show();
		});
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
		var _edu = $("#education");
		_edu.append(HTMLchartButton); //close button for edu section
		_edu.append(HTMLeduStart); // list out old-school...schooling
		var _schools = $("#schools");
		var listLen = education.schools.length;
		for(var school = 0; school < listLen; school++) {
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
		listLen = education.onlineCourses.length;
		for(var course = 0; course < listLen; course++) {
			_schools.append(HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school));
			$(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title))
									.append(HTMLonlineDates.replace("%data%", education.onlineCourses[course].datesattended))
									.append(HTMLonlineURL.replace("%data%", education.onlineCourses[course].url));
		}
	}
};

// uses google maps, above locations data and helper.js routines to construct map with my past locations
var customMap = {
	render: function() {
		var _worldMap = $("#whereInTheWorld");
		_worldMap.append(googleMap);
		_worldMap.append(HTMLchartButton);
	}
};

$(function() {
	/* Kickoff Party */
	bio.render();
	work.render();
	education.render();
	projects.render();
	customMap.render();

	$(".chartContainer").toggleClass("rolledChart"); //initiate all sections as closed
	$(".teaserLogo").delay(5000).animate({fontSize: "1.5em"}, 600, function() {});	// fire after 5 secs

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
		_targetSection.toggleClass("rolledChart"); //add this class to signal state and trigger transition
	});
});
