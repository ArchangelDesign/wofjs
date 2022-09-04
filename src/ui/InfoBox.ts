class WofInfoBox {

    private currentText: string = "";

    constructor() {
        let div = document.createElement('div');
        div.style.cssText = 'position:absolute;width:100%;height:40px;opacity:0.3;z-index:100;background:#000;';
        let paragraph = document.createElement('p');
        paragraph.innerText = 'TEST';
        paragraph.id = 'wof-info-text';
        paragraph.style.color = '#FFF';
        div.appendChild(paragraph);
        document.body.appendChild(div);
    }

    public text(newText: string): void
    {
        this.currentText = newText;
        this.refresh();
    }

    private refresh(): void
    {
        document.getElementById('wof-info-text').innerText = this.currentText;
    }
}

export {WofInfoBox};