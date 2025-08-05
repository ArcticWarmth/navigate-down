const assert = require('assert');
const vscode = require('vscode');
const fs = require('fs');

suite('Extension Test Suite', () => {
    vscode.window.showInformationMessage('Start all tests.');

    test('Test navigate-down.open command', async () => {
		console.log("start open test")
		if(!fs.existsSync(__dirname + '/.testing')) {
			console.log("dir does not exist")
			fs.mkdirSync(__dirname + '/.testing');
		}
        const uri = vscode.Uri.file(__dirname + '/.testing');

		try {
			await vscode.commands.executeCommand('navigate-down.open', uri);
		} catch (error) {
			assert.fail(error)
		}
    });
});