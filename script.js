function option_contextPadding() {
    
}
function custom1() {
    const lightMode = document.getElementById('light_mode');
    const darkMode = document.getElementById('dark_mode');
    const contextMenu = document.getElementById('contextMenu');
    // mode of context menu
    if (lightMode.checked) {
        contextMenu.className = 'light';
        document.getElementById('fill').value = '#FFFFFF';
        document.getElementById('context_main').style.background = '#e1e1ff';
        document.getElementById('context_fill').style.display = 'none';
        document.getElementById('main_bg').style.display = 'none';
    } else if (darkMode.checked) {
        contextMenu.className = 'dark';
        document.getElementById('fill').value = '#374957';
        document.getElementById('context_main').style.background = '#1d2b3a';
        document.getElementById('context_fill').style.display = 'none';
        document.getElementById('main_bg').style.display = 'none';
        document.getElementById('OptionFill').value = '#d6d6d6';
        document.getElementById('optionColor').value = '#424242';
    } else {
        document.getElementById('context_fill').style.display = 'flex';
        document.getElementById('main_bg').style.display = 'flex';
        document.getElementById('context_main').style.background = (document.getElementById('background').value);
    }
    // shadow to the context menu
    const shadowColor = document.getElementById('shadowColor').value;
    const shadowStrength = document.getElementById('shadow').value;
    contextMenu.style.boxShadow = ('0px 0px '+shadowStrength+'px 0px '+shadowColor);
    // corner radius of context menu
    const cornerRadius = document.getElementById('corner').value;
    contextMenu.style.borderRadius = cornerRadius+'px';
    // padding to the context menu 
    const checkbox = document.getElementById('option_padding');
    if(checkbox.checked  === true) {
        contextMenu.style.padding = '6px';
        const rcd = contextMenu.style.borderRadius;
        const optRadius = (parseInt(rcd.slice(0, -2))-6);
        const options = Array.from(document.getElementsByClassName('contextOptions'));
        options.forEach(opt => {
        opt.style.borderRadius = optRadius+'px';
        })
    } else {
        const ygc = parseInt(document.getElementById('corner').value);
        contextMenu.style.padding = ygc+'px 0px';
        const options = Array.from(document.getElementsByClassName('contextOptions'));
        options.forEach(opt => {
        opt.style.borderRadius = '0px';
        })
    }
    // context menu fill 
    const bg = document.getElementById('fill').value;
    contextMenu.style.background = bg;
    // cursor
    const cursor = document.getElementById('cursor').value;
    contextMenu.style.cursor = cursor;
    // hover background
    const hvrBg = document.getElementById('OptionFill').value;
    const hvrColor = document.getElementById('optionColor').value;
    const optHvr = document.createElement('style');
    optHvr.innerText = '#contextMenu > button:hover { color:'+hvrColor+';\nbackground:'+hvrBg+';}';
    contextMenu.appendChild(optHvr);
}
function options() {
    const optionName = document.getElementById("context_option").value;
    const optionIcon = document.getElementById("iconSearch").value;
    const optPreview = document.getElementById("optionPreview");
    const a = document.createElement('button');
    a.setAttribute('id','ContextOption');
    optPreview.replaceChildren(a);
    a.innerHTML = "<i class = '"+optionIcon+"'></i>"+optionName;
}
function addOptions() {
    const optionName = document.getElementById("context_option").value;
    const optionIcon = document.getElementById("iconSearch").value;
    const contextMenu = document.getElementById("contextMenu");
    const a = document.createElement('button');
    a.setAttribute('class','contextOptions');
    contextMenu.appendChild(a);
    a.innerHTML = "<i class = '"+optionIcon+"'></i>"+optionName;
    custom1();
}
const sdf = Array.from(document.getElementsByClassName('contextOptions'));
    sdf.forEach(opt => {
    ondblclick(this.remove())
});