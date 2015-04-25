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

	it("should have a 'submit search' button", function() {
		expect($('#torrent_search_submit')).toExist();
	});

	it("should initially have an empty container for torrents", function() {
		expect($('#torrent_results')).toExist();
	});

});