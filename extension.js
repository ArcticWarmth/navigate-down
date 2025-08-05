const { existsSync } = require('node:fs');
const vscode = require('vscode');

/**
 * Runs when the extension is loaded
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Register the command
	context.subscriptions.push(vscode.commands.registerCommand("navigate-down.open", (url) => {
		try {
			// Prevent opening the current directory
			let folders = vscode.workspace.workspaceFolders[0];
			let workspace = false;
			// Check if user is in a workspace
			if (folders != undefined && (folders.uri.fsPath == url.fsPath)) {
				vscode.window.showErrorMessage("Cannot navigate to current directory");
				return;
			} else if (folders == undefined || !existsSync(url.fsPath) ) {
				throw new ReferenceError("Attempted to check or navigate to non-existent directory")
			} else {
				vscode.showInformationMessage("Opening " + url.fsPath);
				vscode.commands.executeCommand('vscode.openFolder', url,);

			}
		} catch (error) {
			console.error(error)
		}
	}));
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}