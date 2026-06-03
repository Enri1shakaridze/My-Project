
const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    let name = document.getElementById('name').value;
    let surename = document.getElementById('surename').value;
    let numbertel = document.getElementById('numbertel').value;
    let texatrea = document.getElementById('texatreaa').value;
    let name1 = document.getElementById('name1');
    let surename1 = document.getElementById('surename1');
    let numbertel1 = document.getElementById('numbertel1');
    let texatrea1 = document.getElementById('texatrea1');
    let a = false;
    let c = false;
    let b = false;
    let q = false;
    if(name === ''){
        name1.textContent = 'Enter Your Name!'
    }else if(!isNaN(name) && name !== ''){
        name1.textContent = 'Enter Only Letter';
        }
    else{
        name1.textContent = ''
        a = true;
    }

    if(surename === ''){
        surename1.textContent = 'Enter Your Surename!'
    }else if(!isNaN(surename) && surename !== ''){
        surename1.textContent = 'Enter Only Letter'
    }else{
        surename1.textContent = '';
        b = true
    }
    if(numbertel === ''){
        numbertel1.textContent = 'Enter Your Phone Number!'
    }else if(isNaN(numbertel) && numbertel !== ''){
        numbertel1.textContent = 'Enter Only Number'
    }else{
        numbertel1.textContent = '';
        c = true
    }
    if(texatrea === ''){
        texatrea1.textContent = 'Enter Your Question!'
    }else{
        texatrea1.textContent = '';
        q = true
    }

    if(a && b && c && q){
        texatrea1.style.color = 'green';
        texatrea1.textContent = 'წარმატებით გაიგზავნა!';
        setTimeout(() => {
            texatrea1.textContent = '';
            form.reset();
        }, 1500);
    }

})