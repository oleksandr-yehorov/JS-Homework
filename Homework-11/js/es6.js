class Options {
    constructor(height, width, bg, fontSize, textAlign){
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    };

    makeDiv(elem, text, cssStyle) {
        let div = document.createElement('div'),
            textElem = document.createTextNode(text);

        elem.appendChild(div);
        div.style.cssText = cssStyle;
    }
};

class obj extends Options {
    constructor(height, width, bg, fontSize, textAlign)
    super (height, width, bg, fontSize, textAlign);
    makeDiv(elem, text, cssStyle);
};

obj.makeDiv(body,'12345','color: red');