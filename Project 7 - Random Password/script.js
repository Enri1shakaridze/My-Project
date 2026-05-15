const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const i = document.querySelector('i');
    const p = document.querySelector('p');
    p.style.display = 'none'
    let array = 'ABCDEFGHIJKLMNOPQURSTUVWXYZ1234567890abcdefghijklmnopqurstuvwxyz!@#$%/';
    let passgene = document.getElementById('passgene');
    let res = '';
    for(let i = 0; i < 10; i ++){
        res += array[Math.floor(Math.random() * array.length)];
    };
    if(!res.includes('1234567890')){
        let num = '1234567890';
        res += num[Math.floor(Math.random() * num.length)];
    }
    if(!res.includes('ABCDEFGHIJKLMNOPQURSTUVWXYZ')){
        let st = 'ABCDEFGHIJKLMNOPQURSTUVWXYZ';
        res += st[Math.floor(Math.random() * st.length)];
    }
    if(!res.includes('abcdefghijklmnopqurstuvwxyz')){
        let st2 = 'abcdefghijklmnopqurstuvwxyz';
        res += st2[Math.floor(Math.random() * st2.length)];
    }
    if(!res.includes('@#$%/')){
        let notalpha = '@#$%/';
        res += notalpha[Math.floor(Math.random() * notalpha.length)];
    }
    passgene.style.letterSpacing = '2.5px';
    passgene.value = res;
    i.addEventListener('click', function(){
        p.style.display = 'flex';
        navigator.clipboard.writeText(passgene.value);
        setTimeout(() => {
            p.style.display = 'none';
            form.reset();
        }, 1500);
    })
})