let bybutton = document.getElementById('bybutton');
bybutton.addEventListener('click', function(){
    let auction = document.getElementById('auction').value.toLowerCase();
    let byprice = document.getElementById('byprice').value || 0;
    byprice = Number(byprice);
    let h2danamat = document.getElementById('h2danamat');
    let pdanamat1 = document.getElementById('pdanamat1');
    let pdanamat2 = document.getElementById('pdanamat2');

    if(auction !== 'copart' && auction !== 'iaai'){
        alert('შეიყვანეთ აუქციონის დასახელება სწორედ!')
        return;
    }
    if(isNaN(byprice)){
        alert('შეიყვანეთ მხოლოდ ციფრები!');
        return;
    }
    if(byprice === 0){
        alert('შეიყვანეთ მანქნის ფასი!');
        return;
    }
    let fee = 0;
    if(auction === 'copart'){
        fee = byprice * 0.1 + 200;
    }
    if(auction === 'iaai'){
        fee = byprice * 0.1 + 250;
    }

    h2danamat.textContent = `მანქნის სრული ღირებულება დარიცხვით $${byprice + fee}`;
    pdanamat1.textContent = `მანქნის ფასი $${byprice}`;
    pdanamat2.textContent = `დარიცხვის ფასი $${fee}`;
})