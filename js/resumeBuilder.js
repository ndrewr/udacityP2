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
			"title":"Mr. English Teacher",
			"location":"Soo City, Kagoshima",
			"dates":"Jul 2007 - Jul 2009",
			"description":"Energize Japanese students!",
		},
		{
			"employer":"Acme Digital, Inc.",
			"title":"Product Development Associate",
			"location":"Taipei, Taiwan",
			"dates":"Jun 2012 - Dec 2012",
			"description":"Develop new product lines.",
		}
	],

	// Renders html for Work section content
	render: function() {
		$("#workExperience").append(HTMLworkStart);
		for (var job in work.jobs) {
			if(job !== 0) {$(".work-entry:last").append("<hr>");}

			$(".contentWrapper").append(HTMLworkEntry);
			$(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[job].employer));
			$(".work-entry:last").append(HTMLworkTitle.replace("%data%", work.jobs[job].title));
			$(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
			$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
			$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
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
			"images":[]
		},
		{
			"title":"The Blog of Awesome",
			"datesworked":"Jan 2014 - Mar 2014",
			"description":"Simply a blog that enables awesomeness to flow from the keyboard.",
			"images":[]
		},
		{
			"title":"368+ Mobile",
			"datesworked":"Jul 2013 - Aug 2014",
			"description":"A mobile-optimized web app for 368+",
			"images":[]
		},
		{
			"title":"Acme Digital Product Page",
			"datesworked":"Jul 2012 - Sept 2012",
			"description":"Created a product page for a new line of products.",
			"images":[]
		}
	],

	// Renders html for Project section content
	render: function() {
		$("#projects").prepend(HTMLprojectImage.replace("%data%", ""));

			$(".projectDetail").prepend("Project... " + HTMLprojectTitle.replace("%data%", projects.projects[0].title));
			$(".projectDetail").append(HTMLprojectDates.replace("%data%", projects.projects[0].datesworked));
			$(".projectDetail").append(HTMLprojectDescription.replace("%data%", projects.projects[0].description));



	}
};

// Defines Bio section content and display method
var bio = {
	"name":"Andrew Roy Chen",
	"role":"Front End Sherpa",
	"welcomeMessage":"Well Hello :)",
	"contacts": {
			"mobile":"650-980-4424",
			"mail":"uncle.optimus@gmail.com",
			"github2":"uncleoptimus",
			"twitter2":"uncopt",
			"linkedin":"http://tinyurl.com/linkdinAC",
			"location":"Orange County"
		},
	"skills": [
			"javascript", "HTML/CSS3", "jQuery",
			"Objective-C/iOS Dev", "Python", "Backbone.js"
		],
	"footerInfo":"© Andrew Roy Chen 2014 CBA, Inc. 2014",

	// Renders html for Bio section content
	render: function() {
		$("#sayMyName").prepend(HTMLheaderName.replace("%data%", bio.name));
		$("#sayMyName").prepend(HTMLheaderRole.replace("%data%", bio.role));
		//$("#selfIntro").append(HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage));

		for(var contact in bio.contacts) {
			$("#topContacts").append(HTMLcontactGeneric.replace("%data%", bio.contacts[contact]).replace("%badge%", contact));
			//$("#topContacts").append(HTMLcontactGeneric.replace("%contact%", contact).replace("%data%", bio.contacts[contact]).replace("%badge%", contact));
		}

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
		for(var school in education.schools) {
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[school].name));
			$(".education-entry:last").append(HTMLschoolDegree.replace("%data%", education.schools[school].degree));
			$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].datesattended));
			$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
			for(var major in education.schools[school].majors) {
				$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]));
			}
		}

		/* list out online courses */
		$("#education").append(HTMLonlineClasses);
		for(var course in education.onlineCourses) {
			$("#education").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title));
			$(".education-entry:last").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school));
			$(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[course].datesattended));
			$(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[course].url));

		}
	}
};


/* Kickoff Party */
bio.render();
projects.render();
work.render();
education.render();
