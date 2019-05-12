import * as fs from "fs";

export function readApp(filePath: string): any {
	const appString = fs.readFileSync(filePath, 'utf8');
	const appJSON = JSON.parse(appString);
	return appJSON;
}
