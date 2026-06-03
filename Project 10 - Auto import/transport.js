
let button = document.getElementById('button');


button.addEventListener('click', function(){
    let input = document.getElementById('inputtr').value.toLowerCase();
    let city = '';
    for(let i = 0; i<input.length;i++){
        if(input[i] === ' '){
            city += '';
        }else if(input[i] === '-'){
            city += '_'
        }else{
            city += input[i]
        }
    }
    let array = {
        'ga_savannah': {
            'sedan': '$1350',
            'SUV': '$2050'
        },
        'ca_longbeach':{
            'sedan': '$2280',
            'SUV': '$2950'
        },
        'fl_miami':{
            'sedan': '$1580',
            'SUV': '$2380'
        },
        'fl_tampasouth':{
            'sedan': '$1600',
            'SUV': '$2350'
        },
        'tx_dallas':{
            'sedan': '$1780',
            'SUV': '$2550'
        },
        'nj_newjersey':{
            'sedan': '$1480',
            'SUV': '$2250'
        },
        'fl_fortmyers':{
            'sedan': '$1700',
            'SUV': '$2450'
        },
        'md_elkton':{
            'sedan': '$1880',
            'SUV': '$2550'
        },
        'ga_tifton':{
            'sedan': '$1480',
            'SUV': '$2100'
        },
        'ny_longisland':{
            'sedan': '$1710',
            'SUV': '$2350'
        },
        'fl_westpalmbeach':{
            'sedan': '$1680',
            'SUV': '$2350'
        },
        'in_indianapolis':{
            'sedan': '$1780',
            'SUV': '$2550'
        },
        'mo_stlouis':{
            'sedan': '$6580',
            'SUV': '$2250'
        },
        'il_illinois':{
            'sedan': '$1790',
            'SUV': '$2400'
        },
        'ch_chickago':{
            'sedan': '$1780',
            'SUV': '$2250'
        },
        'ny_newyork':{
            'sedan': '$1520',
            'SUV': '$2180'
        },
        'ny_rochester':{
            'sedan': '$1710',
            'SUV': '$2090'
        },
        'ka_kansascity':{
            'sedan': '$1980',
            'SUV': '$2850'
        },
        'tx_austin':{
            'sedan': '$1680',
            'SUV': '$2350'
        },
        'tx_houston':{
            'sedan': '$1650',
            'SUV': '$2290'
        },
        'ca_satelite':{
            'sedan': '$2480',
            'SUV': '$3100'
        }
    }
    try{
        let button1 = document.getElementById('button1').textContent = `სედანის / ჯიპის: ${array[city]['sedan']}`;
        let button2 = document.getElementById('button2').textContent = `მაღალი გამავლობის: ${array[city]['SUV']}`;
    }catch (undefined){
        alert('არასწორი ფორმატი')
        let button1 = document.getElementById('button1').textContent = `სედანის / ჯიპის: $0`;
        let button2 = document.getElementById('button2').textContent = `მაღალი გამავლობის: $0`;
    }
    

})