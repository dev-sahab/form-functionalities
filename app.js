// get elements
const age_form = document.getElementById('age_form');
const result = document.querySelector('.result');

age_form.onsubmit = (e) => {

    e.preventDefault();

    const name = age_form.querySelector('input[name="name"]');
    const age = age_form.querySelector('input[name="age"]');
    const gender = age_form.querySelector('input[name="gender"]:checked');
    // const gender = age_form.querySelectorAll('input[name="gender"]');

    // let gender_name = '';
    // gender.forEach(item => {
        
    //     if (item.checked){
    //         gender_name = item.value
    //     }
    // })
    

    // form validation
    if (name.value == "" || age.value == "" || gender.value == ""){
        result.innerHTML = msgAlert('All fields are required');
    } else if (ageChecker(age.value) ==  false){
        // age field validation
        result.innerHTML = msgAlert('Age is not valid', 'warning')
    }else{

        result.innerHTML = marriageAgecheck(name.value, age.value, gender.value);

    }


}

// Currency converter Form

// get elements

const currency_converter_form = document.getElementById('currency_converter');
const currency_result = document.getElementById('currency_result');



currency_converter_form.onsubmit = (e) => {
    e.preventDefault();

    const ammount = currency_converter_form.querySelector('input[name="ammount"]');
    const currency = currency_converter_form.querySelector('select[name="currencies"]');


    // form validation
    if (ammount.value == "" || currency.value == "") {
        currency_result.innerHTML = msgAlert('All fields are required');
    } else {

        currency_result.innerHTML = currencyConverter(ammount.value, currency.value)
    }

}


// Area calculator

// get elements

const area_calc = document.getElementById('area_calc');
const area_type = area_calc.querySelector('select[name="area_type"]');
const area_result = document.getElementById('area_result')

const rec = area_calc.querySelector('.rec');
const squ = area_calc.querySelector('.squ');
const tri = area_calc.querySelector('.tri');
const cir = area_calc.querySelector('.cir');





area_type.onchange = () => {

    // after changing area type input value will remove
    let input = area_calc.querySelectorAll('input');
    
    input.forEach(item => {
        item.value = ''; 
    })

    

    if (area_type.value == 'Rectangle') {
        rec.style.display = 'block';
    }
    else {
        rec.style.display = '';
    }

    if(area_type.value == 'Square'){
        squ.style.display = 'block';
    }
    else {
        squ.style.display = '';
    }

    if(area_type.value == 'Triangle'){
        tri.style.display = 'block';
    }
    else {
        tri.style.display = '';
    }

    if(area_type.value == 'Circle'){
        cir.style.display = 'block';
    }
    else {
        cir.style.display = '';
    }

    area_result.innerHTML = '';

}

area_calc.onsubmit = (e) => {

    e.preventDefault();



    if (area_type.value == 'Rectangle') {

        let length = area_calc.querySelector('.rec input[name="length"]').value;
        let width = area_calc.querySelector('.rec input[name="width"]').value;

        area_result.innerHTML = areCal(area_type.value, length, width);

    } 
    else if (area_type.value == 'Square'){

        let area = area_calc.querySelector('.squ input[name="area"]').value;

        area_result.innerHTML = areCal(area_type.value, area)
    }
    else if (area_type.value == 'Triangle'){

        let base = area_calc.querySelector('.tri input[name="base"]').value;
        let height = area_calc.querySelector('.tri input[name="height"]').value;

        area_result.innerHTML = areCal(area_type.value, base, height)
    }
    else if (area_type.value == 'Circle'){

        let radius = area_calc.querySelector('.cir input[name="radius"]').value;

        area_result.innerHTML = areCal(area_type.value, radius)
    }
    else {
        area_result.innerHTML = msgAlert('Area type not selected');
    }


}