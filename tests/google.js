module.exports = {
	'Test Hyprtxt' : function (client) {
		client
			.url('https://hyprtxt.com')
			.waitForElementVisible('body', 1000)
			.assert.title('Hyprtxt')
			.assert.visible('.logo')
			.assert.containsText('.page1 p',
				'Hyprtxt is Taylor\'s brand.')
			.end();
	}
	// 'Demo test Google' : function (client) {
	// 	client
	// 		.url('http://www.google.com')
	// 		.waitForElementVisible('body', 1000)
	// 		.assert.title('Google')
	// 		.assert.visible('input[type=text]')
	// 		.setValue('input[type=text]', 'hyprtxt')
	// 		.waitForElementVisible('button[name=btnG]', 1000)
	// 		.click('button[name=btnG]')
	// 		.pause(1000)
	// 		.assert.containsText('ol#rso li:first-child',
	// 			'Hyprtxt')
	// 		.end();
	// }
};