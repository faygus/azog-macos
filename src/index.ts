import * as azog from "azog";
import * as path from "path";
import { readApp } from "./read-app";
import { createSourceCode } from "./create-source-code";
import * as createMacOsApp from "create-macos-app";

const azogAppFilePath = path.join('input', 'azog-app.json');
const appJSON = readApp(azogAppFilePath);
const parser = new azog.Parser(appJSON);
const component = parser.parse(1);
const sourceCode = createSourceCode(component);
const config: createMacOsApp.IConfig = {
	outputDir: 'output',
	projectConfig: {
		productName: 'helloWorld',
		organizationName: 'toto',
		organizationIdentifier: 'totoId'
	}
};
createMacOsApp.createApp(config, sourceCode);
