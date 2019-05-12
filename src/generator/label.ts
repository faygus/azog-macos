import * as azog from "azog";
import { replaceInText } from "./replace-in-text";
import { createLabel } from "../resources/label-creator-code";

export function generateLabel(component: azog.Component, functionName: string): string {
	let view: azog.LabelWFView = component.view;
	if (typeof view.text.target === 'string') {
		const text = view.text.target;
		const createLabelcode = replaceInText(createLabel, {
			'text': text,
			'functionName': functionName
		});
		return createLabelcode;
	}
}