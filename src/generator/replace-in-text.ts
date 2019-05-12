export function replaceInText(text: string, valuesToReplace: ValuesToReplace): string {
	let res = text;
	for (const value in valuesToReplace) {
		const regex = new RegExp(`{{${value}}}`, "g");
		res = res.replace(regex, valuesToReplace[value]);
	}
	return res;
}

export type ValuesToReplace = {[key: string]: string};
