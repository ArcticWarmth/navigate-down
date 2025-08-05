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
			let folders = vscode.workspace.workspaceFolders;
			// Check if user is in a workspace
			if (folders != undefined && existsSync(url.fsPath)) {
				folders.forEach(folders => {
					if (folders.uri == url.fsPath) {
						vscode.window.showErrorMessage("Cannot navigate to currently open directory workspace");
						return;
					}
				});
					vscode.window.showInformationMessage("Opening " + url.fsPath);
					vscode.commands.executeCommand('vscode.openFolder', url);	
			} else if (folders == undefined && existsSync(url.fsPath)) {
				vscode.window.showInformationMessage("Opening " + url.fsPath);
				vscode.commands.executeCommand('vscode.openFolder', url);	
			} else {
				throw new ReferenceError("Attempted to check or navigate to non-existent directory")
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