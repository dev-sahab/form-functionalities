
/**
 * Form validation Alert Function
 */

const msgAlert = (msg, type = 'danger') => {
    return `<p class="alert alert-${type} d-flex align-items-center justify-content-between my-2">${msg}<button data-bs-dismiss="alert" class="ms-2 btn-close"></button></p>`;
}


/**
 * Age checker Pattern Function 
 */

const ageChecker = (age) => {
    let agePattern = /^[0-9]{1,3}$/;
    return agePattern.test(age);
}

/**
 *  Marriage age Calculator Function
 */

const marriageAgecheck = (name, age, gender) => {

    let add_s = "";

    if (gender == "Male") {
        
        let marriage_age = 21;
        let waitAge = marriage_age - age;
        waitAge > 1 ? add_s = 's' : '';

        if (age >= marriage_age) {
            return msgAlert(`Hi ${name}, You're ready to get married`, 'success');
        } else {
            return msgAlert(`Hi ${name}, You're not ready to get married. Wait ${waitAge} year${add_s}`)
        }

    } 
    else {

        let marriage_age = 18;
        let waitAge = marriage_age - age;
        waitAge > 1 ? add_s = 's' : '';

        if (age >= marriage_age) {
            return msgAlert(`Hi ${name}, You're ready to get married`, 'success');
        } else {
            return msgAlert(`Hi ${name}, You're not ready to get married. Wait ${waitAge} year${add_s}`)
        }


    }

}


/**
 * Currency Converter Function
 */

const currencyConverter = (ammount, currency) => {

    let rate = 0;

    switch(currency){
        case "USD":
            rate = 93.65;
            break;
        case "CAD":
            rate = 73.33;
            break;
        case "AUD":
            rate = 66.34;
            break;
        case "POUND": 
            rate = "115.33";
            break;
        case "EURO":
            rate = 98.52;
            break
    }

    total_ammount = ammount * rate;

    return msgAlert(`${ammount} ${currency} = ${total_ammount.toFixed(2)} BDT`, 'success')

}



/**
 * Area Calculator
 */

const areCal = (type, val1, val2 = null) => {

    if (type == 'Rectangle') {
        return msgAlert(`The area of Rectangle is ${val1 * val2}`, 'success')
    } 
    else if(type == 'Square'){
        
        return msgAlert(`The area of Square is ${val1 * val1}`, 'success')
    }
    else if(type == 'Triangle'){
        
        return msgAlert(`The area of Triangle is ${.5 *val1 * val2}`, 'success')
    }
    else if(type == 'Circle'){
        
        let calculation = 3.14 * (val1*val1);
        return msgAlert(`The area of Circle is ${ calculation }`, 'success')
    }

}