const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	context.subscriptions.push(vscode.commands.registerCommand("navigate-down.open", (url) => {
		try {
			if(vscode.workspace.workspaceFolders[0].uri.fsPath == url.fsPath) {
				vscode.window.showErrorMessage("Cannot navigate to current directory");
				return;
			} else {
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