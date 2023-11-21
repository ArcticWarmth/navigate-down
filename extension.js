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
			if(vscode.workspace.workspaceFolders[0].uri.fsPath == url.fsPath) {
				vscode.window.showErrorMessage("Cannot navigate to current directory");
				return;
			} else {
				// Open the folder
				vscode.window.showInformationMessage("Opening " + url.fsPath);
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