var bio = {
	"name" : "Yumiko Huang",
	"role" : "Full Stack Developer",
	"contacts" : {
		"github" : "yumikohey",
		"tweeter" : "gz_yumiko"
	}
	"skills" : ["Ruby", "JavaScript"]
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
