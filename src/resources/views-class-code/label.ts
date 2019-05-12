export const labelClassCode = `class Label: NSTextField {
    init() {
        super.init(frame: CGRect.zero)
        setUp("")
    }

    init(_ stringValue: String) {
        super.init(frame: CGRect.zero)
        setUp(stringValue)
    }

    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override var intrinsicContentSize: NSSize {
        guard let cell = self.cell,
            cell.wraps else {
            return super.intrinsicContentSize
        }
        let fictionalBounds = NSRect(x: 0, y: 0, width: bounds.width, height: CGFloat.greatestFiniteMagnitude)
        let height = cell.cellSize(forBounds: fictionalBounds).height
        return CGSize(width: 0, height: height)
    }
    
    override func layout() {
        super.layout()
        invalidateIntrinsicContentSize()
    }

    private func setUp(_ stringValue: String) {
        self.stringValue = stringValue
        isEditable = false
        drawsBackground = false
        isBezeled = false
        backgroundColor = NSColor.clear
        alignment = NSTextAlignment.center
    }
}`;