
function Validator(options) {
    var formElement = document.querySelector(options.form)
    var selectorRules ={};

    // Xử lí blur ra khỏi thẻ Input
    function validate(inputElement, rule) {
        let check = true;
        const formItem = inputElement.parentElement
        const errorMessage = rule.test(inputElement.value);
            
        if(errorMessage) {
            formItem.classList.add('invalid')
            formItem.querySelector('.form-message').innerHTML = errorMessage
            check = false
        } else {
            formItem.classList.remove('invalid')
            formItem.querySelector('.form-message').innerHTML = '';
        }

        inputElement.oninput = function() {
            if(inputElement.value) {
                formItem.classList.remove('invalid')
                formItem.querySelector('.form-message').innerHTML = '';
            }
        }
        return check
    }
    // Xử lí Changle Input
    function Check(check) {
        const formItem = check.parentElement
        check.oninput = function() {
            formItem.parentElement.parentElement.classList.remove('invalid')
        } 
    } 

    // Xử lí onsubmid
    formElement.onsubmit = function(e) {
        let checkSubmid = true
        // e.preventDefault();

        // Xủ lí form input nhập
        options.rules.forEach((rule, index) => {
            const inputElement = formElement.querySelector(rule.selector)
            checkSubmid = validate(inputElement ,rule);
        })

        // Xử lí form tick
        options.isTicks.forEach((isTick, index) => {
            let formItem;
            let checkInput = false
            for(var tick of isTick.selector) {
                const ticks = formElement.querySelectorAll(tick)             
                for(var tick of ticks) {
                    formItem = tick.parentElement.parentElement.parentElement
                    if(tick.checked) checkInput = true;
             
                    Check(tick);         
                }     

            }
            if(!checkInput) {
                checkSubmid = false;
                const formMessageError = isTick.test(checkInput)
 
                formItem.classList.add('invalid')
                formItem.querySelector('.form-message').innerHTML = formMessageError
            }  
        })

        // Xử lí form select
        options.selects.forEach((select, index) => {
            const selectElement = formElement.querySelector(select.selector)
            let formItem = selectElement.parentElement
            let formMessageError = select.test()

            function checkSelect() {
                if(selectElement.value == '') {
                    checkSubmid = false
                    formItem.classList.add('invalid')
                    formItem.querySelector('.form-message').innerHTML = formMessageError
                } else {
                    formItem.classList.remove('invalid')
                    formItem.querySelector('.form-message').innerHTML = ''
                }
            }
            checkSelect()

            selectElement.oninput = () => {
                checkSelect()
            }        
        })

        return checkSubmid
    }
    
    // Duyệt từng rules xử lí onblur
    options.rules.forEach((rule, index) => {
        const inputElement = formElement.querySelector(rule.selector)

        inputElement.onblur = function() {
            validate(inputElement ,rule);
        }
    })    
}

Validator.isRequire = function(selector, message) {
    return {
        selector: selector,
        test: function (value) {
            return value ? undefined :  message || 'Vui lòng nhập trường này'
        }
    };
}

Validator.isEmail = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined :  message || 'Trường này phải là email';
        }
    };
}

Validator.isPhoneNumber = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
            return regex.test(value) ? undefined :  message || 'Trường này phải là số điện thoại';
        }
    };
}

Validator.isTick = function(selector, message) {   
    return {
        selector: selector,
        test: function (value) {
            return value ? undefined :  message ||'Vui lòng tick trường này'
        }
    };
}

Validator.isSelect = (selector, message) => {
    return {
        selector: selector,
        test: function (value) {
            return value ? undefined :  message ||'Vui lòng chọn trường này'
        }
    };
}

Validator.isMinLength = function(selector, min) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : `Vui lòng nhập tối thiểu ${min} kí tự`
        }
    }
}

export default Validator;