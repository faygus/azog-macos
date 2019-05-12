export const createLabel = `func {{functionName}}(_ parentView: NSView) {
	let subview = Label()
	subview.stringValue = "{{text}}"
	parentView.addSubview(subview)
	subview.translatesAutoresizingMaskIntoConstraints = false
	subview.centerXAnchor.constraint(equalTo: parentView.centerXAnchor).isActive = true
	subview.centerYAnchor.constraint(equalTo: parentView.centerYAnchor).isActive = true
	subview.widthAnchor.constraint(equalTo: parentView.widthAnchor).isActive = true
}`;
