define(function() {
	var BRAZIL = "Brazil";
    var CAMEROON = "Cameroon";
    var CROATIA = "Croatia";
    var MEXICO = "Mexico";
    var AUSTRALIA = "Australia";
    var CHILE = "Chile";
    var NETHERLANDS = "Netherlands";
    var SPAIN = "Spain";
    var COLOMBIA = "Colombia";
    var COTE_DIVOIRE = "C&ocircte d'Ivoire";
    var GREECE = "Greece";
    var JAPAN = "Japan";
    var COSTA_RICA = "Costa Rica";
    var ENGLAND = "England";
    var ITALY = "Italy";
    var URUGUAY = "Uruguay";
    var ECUADOR = "Ecuador";
    var FRANCE = "France";
    var HONDURAS = "Honduras";
    var SWITZERLAND = "Switzerland";
    var ARGENTINA = "Argentina";
    var BOSNIA_HERZEGOVINA = "Bosnia-Herzegovina";
    var IRAN = "Iran";
    var NIGERIA = "Nigeria";
    var GERMANY = "Germany";
    var GHANA = "Ghana";
    var PORTUGAL = "Portugal";
    var UNITED_STATES = "United States";
    var ALGERIA = "Algeria";
    var BELGIUM = "Belgium";
    var KOREA_REPUBLIC = "Korea Republic";
    var RUSSIA = "Russia";

    var teams = [
            BRAZIL,
            CAMEROON,
            CROATIA,
            MEXICO,
            AUSTRALIA,
            CHILE,
            NETHERLANDS,
            SPAIN,
            COLOMBIA,
            COTE_DIVOIRE,
            GREECE,
            JAPAN,
            COSTA_RICA,
            ENGLAND,
            ITALY,
            URUGUAY,
            ECUADOR,
            FRANCE,
            HONDURAS,
            SWITZERLAND,
            ARGENTINA,
            BOSNIA_HERZEGOVINA,
            IRAN,
            NIGERIA,
            GERMANY,
            GHANA,
            PORTUGAL,
            UNITED_STATES,
            ALGERIA,
            BELGIUM,
            KOREA_REPUBLIC,
            RUSSIA
    ];

    var groupNames = [
        "A", "B", "C", "D", "E", "F", "G", "H"
    ];

    var TOTAL_NUMBER_OF_TEAMS = 32;
    var NUMBER_OF_GROUPS = 8;
    var TEAMS_PER_GROUP = 4;

    var knockOutPhases = [16, 8, 4, 2];

	return {
		teams: teams,
		validColor: "#99CC00",
		invalidColor: "#B84325",
		defaultColor: "white",
        knockOutPhases: knockOutPhases,
        groupNames: groupNames,
        rootPath: "http://martino2.duckdns.org/pi/index.php",
        directoryRootPath: "http://martino2.duckdns.org/pi/WC2014/",
        TOTAL_NUMBER_OF_TEAMS: TOTAL_NUMBER_OF_TEAMS,
        NUMBER_OF_GROUPS: NUMBER_OF_GROUPS,
        TEAMS_PER_GROUP: TEAMS_PER_GROUP
	}
});