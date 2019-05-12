import * as azog from 'azog';
import { labelClassCode } from './resources/views-class-code/label';
import { generateLabel } from './generator/label';
import { replaceInText } from './generator/replace-in-text';

export function createSourceCode(component: azog.Component): string {
	let res = replaceInText(starter, {
		windowWidth: '500',
		windowHeight: '500'
	});
	let mainFuctionContent: string[] = [];
	if (component.view instanceof azog.LabelWFView) {
		const createLabelcode = generateLabel(component, 'addLabel');
		res += '\n\n';
		res += createLabelcode;
		mainFuctionContent.push('addLabel(parentView)');
	}
	res = replaceInText(res, {
		'content': mainFuctionContent.join('\n')
	});
	res += '\n\n';
	res += labelClassCode;
	return res;
}

const starter = `import Cocoa

@NSApplicationMain
class AppDelegate: NSObject, NSApplicationDelegate {

    @IBOutlet weak var window: NSWindow!

    func applicationDidFinishLaunching(_ aNotification: Notification) {
        window.setContentSize(CGSize(width: {{windowWidth}}, height: {{windowHeight}}))
        let parentView = window.contentView!
        {{content}}
    }
}`;
