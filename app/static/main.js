// calculator dom

const calculatorInit = () => {
    const btn_vat = document.querySelectorAll(".btn-calculator")[0]
    const btn_income = document.querySelectorAll(".btn-calculator")[1]
    const btn_property = document.querySelectorAll(".btn-calculator")[2]
    const btn_profit = document.querySelectorAll(".btn-calculator")[3]

    const tax_result = document.querySelector(".finaly_result_calculator")
    const first_input = document.querySelector(".calculator_first_input")
    const reset = document.querySelector('.reset_reset')


    btn_vat.addEventListener('click', function () {
        let tax_input = first_input.value
        let numb = Number(tax_input)
        let vat_formulas = (numb * 18) / 100

        if (tax_input != "" & typeof (numb) == 'number') {
            tax_result.textContent = `${vat_formulas}ლ`
        }

    })


    btn_income.addEventListener('click', function () {

        let tax_input = first_input.value
        let numb = Number(tax_input)
        let vat_formulas = (numb * 18) / 100

        if (tax_input != "" & typeof (numb) == 'number') {
            tax_result.textContent = `${vat_formulas}ლ`
        }

    })


    btn_income.addEventListener('click', function () {

        let tax_input = first_input.value
        let numb = Number(tax_input)
        let income_formulas = (numb * 20) / 100

        if (tax_input != "" & typeof (numb) == 'number') {
            tax_result.textContent = `${income_formulas}ლ`
        }

    })


    btn_property.addEventListener('click', function () {

        let tax_input = first_input.value
        let numb = Number(tax_input)
        let property_formulas = (numb * 1) / 100

        if (tax_input != "" & typeof (numb) == 'number') {
            tax_result.textContent = `${property_formulas}ლ`
        }

    })

    btn_profit.addEventListener('click', function () {
        let tax_input = first_input.value

        let numb = Number(tax_input)
        let profit_formulas = ((numb / 0.85) * 15) / 100

        if (tax_input != "" & typeof (numb) == 'number') {
            tax_result.textContent = `${profit_formulas}ლ`
        }

    })

    reset.addEventListener("click", function () {
            first_input.value = null;
            tax_result.textContent = 0
        }
    )
}

// declaration dom
const smallBusinessDeclaration = () => {
    const list_dropdown = document.querySelector('.list_dropdown')
    const land_btn = document.querySelector(".land_btn")
    const tax_land_input = document.querySelector(".tax_land_input").value
    const property_btn = document.querySelector(".property_btn")
    const landTax = document.querySelector(".land_tax_section")
    const propertyTax = document.querySelector(".property_tax_section")
    const alert_land = document.querySelector(".alert_land")
    const alert_property= document.querySelector(".alert_property")


    disable_sb_button()
    disable_land_property()
    disbale_property_property()
    disbale_vat()
    disbale_income()


    list_dropdown.addEventListener('click',
        function () {
            if (list_dropdown.value == "small") {
                click_small_bussiness()
            }
            else if (list_dropdown.value == "property"){
                click_property()
            }
            else if (list_dropdown.value == "Vat"){
                click_vat()
            }
            else if (list_dropdown.value == "income"){
                click_income()
            }


        });

    land_btn.addEventListener("click", function(){
        tax_land_input.value = " "
        landTax.style.display = "inline-block"
        propertyTax.style.display = "none"
        land_btn.style.background = "linear-gradient(135deg,  #9796f0, #fbc7d4 100%)"
        property_btn.style.background = "#BDC3C7"
        alert_property.style.display = "none"


    });

    property_btn.addEventListener("click", function(){
        tax_land_input.value = " "

        landTax.style.display = "none"
        propertyTax.style.display = "inline-block"
        property_btn.style.background = "linear-gradient(135deg,  #9796f0, #fbc7d4 100%)"
        land_btn.style.background = "#BDC3C7"
        alert_land.style.display = "none"

    });


}


// function dropdonw tax type section

const click_small_bussiness = () => {
        const small_bussines = document.querySelector(".small-business")
        const propery_tax = document.querySelector(".property_tax")
        const vat_tax = document.querySelector(".VatTaxSection")
        const income_tax = document.querySelector(".IncomeTaxSection")

        small_bussines.style.display = "inline-block"
        propery_tax.style.display = "none"
        vat_tax.style.display = "none"
        income_tax.style.display = "none"
        clear_property_land()
        clear_property_property()
        clear_vat()
        clear_income()




}

const click_property = () => {
        const small_bussines = document.querySelector(".small-business")
        const propery_tax = document.querySelector(".property_tax")
        const vat_tax = document.querySelector(".VatTaxSection")
        const income_tax = document.querySelector(".IncomeTaxSection")


        propery_tax.style.display = "inline-block"
        small_bussines.style.display = "none"
        vat_tax.style.display = "none"
        income_tax.style.display = "none"
        clear_small()
        clear_vat()
            clear_income()





}

const click_vat = () => {
        const small_bussines = document.querySelector(".small-business")
        const propery_tax = document.querySelector(".property_tax")
        const vat_tax = document.querySelector(".VatTaxSection")
        const income_tax = document.querySelector(".IncomeTaxSection")

        vat_tax.style.display = "inline-block"
        small_bussines.style.display = "none"
        propery_tax.style.display = "none"
        income_tax.style.display = "none"
       clear_small()
         clear_property_property()
            clear_property_land()
        clear_income()


}

const click_income = () => {
        const small_bussines = document.querySelector(".small-business")
        const propery_tax = document.querySelector(".property_tax")
        const vat_tax = document.querySelector(".VatTaxSection")
        const income_tax = document.querySelector(".IncomeTaxSection")

        income_tax.style.display = "inline-block"
        small_bussines.style.display = "none"
        propery_tax.style.display = "none"
        vat_tax.style.display = "none"
           clear_small()
            clear_property_land()
        clear_property_property()
    clear_vat()

}

    // clear

const clear_small = () => {

        const alert = document.querySelector(".alert")
                    const tax_first_input_value = document.querySelector(".tax_first_input")
                    const tax_amount_small_value = document.querySelector(".tax_amount_value")
                    const list_month_value = document.querySelector(".list_dropdown_month")
                    tax_first_input_value.value = ""
                    tax_amount_small_value.value = "0"
                    list_month_value.value = "January"
                    alert.style.display = "none"
}

const clear_property_land = () => {
        const alert = document.querySelector(".alert")
        const tax_land_input = document.querySelector(".tax_land_input")
        const list_year_land = document.querySelector(".list_dropdown_year")
        const list_city = document.querySelector(".list_dropdown_city")
        const land_label = document.querySelector(".label_tax_land")

        alert.style.display = "none"
        tax_land_input.value = ""
        list_year_land.value = "2022"
        list_city.value = "Kutaisi"
        land_label.value = "0"
}

const clear_property_property = () => {
        const alert = document.querySelector(".alert")
        const property_value_input = document.querySelector(".property_property_input")
        const property_value_input1 = document.querySelector(".property_property_input1")
        const list_year_land = document.querySelector(".list_dropdown_year_property")
        const land_label = document.querySelector(".label_tax_property")

        alert.style.display = "none"
        property_value_input.value = ""
        property_value_input1.value = ""


        list_year_land.value = "2022"
        land_label.value = "0"
}

const clear_vat =() => {
    const alert_vat = document.querySelector(".alert_vat")
    const vat_first_input = document.querySelector(".vat_first_input")
    const vat_second_input = document.querySelector(".vat_second_input")
    const vat_month = document.querySelector(".list_dropdown_month_vat")
    const vat_label = document.querySelector(".label_tax_vat")

    vat_first_input.value = ""
    vat_second_input.value = ""
    vat_month.value = "January"
    vat_label.value = ""

    alert_vat.style.display = "none"


}

const clear_income = () => {
    const alert_income = document.querySelector(".alert_income")
    const income_first_input = document.querySelector(".income_first_input")
    const income_second_input = document.querySelector(".income_second_input")
    const income_month = document.querySelector(".list_dropdown_month_income")
    const income_label = document.querySelector(".label_tax_income")

    income_first_input.value = ""
    income_second_input.value = ""
    income_month.value = "January"
    income_label.value = ""

    alert_income.style.display = "none"




}

const clear_information = () =>{
    clear_small()
    clear_property_land()
    clear_property_property()
    clear_vat()
    clear_income()
}


// disabled send button if input is empty

const disable_sb_button = () =>{
    const tax_first_input_value = document.querySelector(".tax_first_input")
    const button_sb = document.querySelector(".send_btn")

    tax_first_input_value.addEventListener("keyup", (e) => {
        const value = e.currentTarget.value;
        button_sb.disabled = false

        if (value === ""){
                    button_sb.disabled = true

        }
    })
}

const disable_land_property = () => {
    const tax_land_input = document.querySelector(".tax_land_input")
    const land_btn = document.querySelector(".send_land_btn")

      tax_land_input.addEventListener("keyup", (e) => {
        const value = e.currentTarget.value;
        land_btn.disabled = false

        if (value === ""){
                    land_btn.disabled = true

        }
    })
}


 const   disbale_property_property = () => {
    const property_1 = document.querySelector(".property_property_input")
    const property_2 = document.querySelector(".property_property_input1")
    const prop_btn = document.querySelector(".send_property_btn")

     let ar =[property_1,property_2]



   ar.forEach(function(elem){
         elem.addEventListener("mouseout",(e) => {
             if (property_1.value != "" && property_2.value != "") {
                prop_btn.disabled = false

            } else {
                prop_btn.disabled = true

            }
         })
    })
 };


 const  disbale_vat = () => {
    const vat1 = document.querySelector(".vat_first_input")
    const vat2 = document.querySelector(".vat_second_input")
    const vat_btn = document.querySelector(".send_vat_btn")

     let ar =[vat1,vat2]


   ar.forEach(function(elem){
         elem.addEventListener("mouseout",(e) => {
             if (vat1.value != "" && vat2.value != "") {
                vat_btn.disabled = false

            } else {
                vat_btn.disabled = true

            }
         })
    })

 };

 const  disbale_income = () => {
    const income1 = document.querySelector(".income_first_input")
    const income2 = document.querySelector(".income_second_input")
    const income_btn = document.querySelector(".send_income_btn")

     let ar =[income1,income2]


    ar.forEach(function(elem){
         elem.addEventListener("mouseout",(e) => {
             if (income1.value != "" && income2.value != "") {
                income_btn.disabled = false

            } else {
                income_btn.disabled = true

            }
         })
    })


 }