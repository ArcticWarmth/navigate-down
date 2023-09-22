const assert = require('assert');
const vscode = require('vscode');
const fs = require('fs');

suite('Extension Test Suite', () => {
    vscode.window.showInformationMessage('Start all tests.');

    test('Test navigate-down.open command', async () => {
		if(!fs.existsSync(__dirname + '/.testing')) {
			fs.mkdirSync(__dirname + '/.testing');
		}
        const uri = vscode.Uri.file(__dirname + '/.testing');
		let err;
		try {
			await vscode.commands.executeCommand('navigate-down.open', uri);
		} catch (error) {
			err = error;
		}
		assert.strictEqual(err, undefined);
    });
});