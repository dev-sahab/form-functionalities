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