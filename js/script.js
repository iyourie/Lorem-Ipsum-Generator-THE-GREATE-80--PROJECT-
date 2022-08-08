let inp = document.querySelector('input')
let btn = document.querySelector('button')
let clear = document.querySelectorAll('button')[1]
let clearAll = document.querySelectorAll('button')[2]
let copy = document.querySelectorAll('button')[3]

btn.onclick = () => {
    for (let i = 0; i < inp.value; i++) {
        let o = document.createElement('p');
        let txt = document.createTextNode('Sed eget pellentesque sem. Sed eu sapien non ante scelerisque interdum imperdiet vitae est. Fusce lorem nibh, tincidunt ornare tellus eu, auctor pharetra massa. Maecenas aliquam mattis sapien. Donec erat nisl, fringilla non pellentesque vitae, cursus non felis. Nulla placerat neque nec urna accumsan placerat. Etiam ut ex consectetur, faucibus lacus et, elementum nunc.');
        o.append(txt)
        document.body.appendChild(o)
    }
}

clear.onclick = () => {
    document.querySelector('p').remove()
    inp.value = ''
}

clearAll.onclick = () => {
    document.querySelectorAll('p').forEach(x => {
        x.remove()
        inp.value = ''
    })
}

copy.onclick = () => {
    let b = [];
    let p = document.querySelectorAll('p')
    p.forEach(x => {
        b.push(x.innerHTML.split(' ').join(' '))
        navigator.clipboard.writeText(b.join(' '))
    })
    alert('copied to clipboard')
}

