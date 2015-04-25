describe("Interface Suite", function() {

	beforeEach(function() {
		jasmine.getFixtures().fixturesPath = "../.";
		loadFixtures("index.html");
	});

	it("should say 'Welcome'!", function() {
		expect($('.page-title')).toHaveText("Welcome!");
	});

	it("should have a search bar", function() {
		expect($('#torrent_search')).toExist();
	});

});