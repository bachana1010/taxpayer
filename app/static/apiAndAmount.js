
const sb_api = () =>{
    const tax_first_input = document.querySelector(".tax_first_input").value
    const list_month = document.querySelector(".list_dropdown_month").value
    const tax_amount_small = document.querySelector(".tax_amount_value").value

    const alert = document.querySelector(".alert")
    const tax_first_input_value = document.querySelector(".tax_first_input")
    const tax_amount_small_value = document.querySelector(".tax_amount_value")
    const list_month_value = document.querySelector(".list_dropdown_month")
    tax_first_input_value.value = " "
    tax_amount_small_value.value = " "
    list_month_value.value = "January"
    alert.style.display = "inline-block"

       const data = {tax_first_input, list_month, tax_amount_small}

    const options = {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)

    };
    fetch("/small_api", options)


   }

const function_small = () => {
const tax_first_input = document.querySelector(".tax_first_input")
const tax_amount_small = document.querySelector(".tax_amount_value")
const num_small = Number(tax_first_input.value)
const result = num_small / 100


tax_amount_small.value = result

}

const Land_amount =() => {
     const tax_land_input = document.querySelector(".tax_land_input").value
    const land_label = document.querySelector(".label_tax_land")
    const list_city = document.querySelector(".list_dropdown_city").value

    if (list_city == "Kutaisi"){
        const num_land = Number(tax_land_input)
        const kutaisi_result = num_land * 71
        land_label.value = kutaisi_result

    }
    else if ( list_city == "Tbilisi"){
        const num_land = Number(tax_land_input)
        const tbilisi_result = num_land * 100
        land_label.value = tbilisi_result

    }
        else if ( list_city == "Batumi"){
        const num_land = Number(tax_land_input)
        const batumi_result = num_land * 94

        land_label.value = batumi_result

    }
        else if ( list_city == "Sokhum"){
        const num_land = Number(tax_land_input)
        const Sokhum_result = num_land * 94

        land_label.value = Sokhum_result

    }





}
const Property_api = () =>{

    const land_input = document.querySelector(".tax_land_input").value
    const list_year = document.querySelector(".list_dropdown_year_property").value
    const list_city = document.querySelector(".list_dropdown_city").value
    const land_label = document.querySelector(".label_tax_land").value
    const land_alert = document.querySelector(".alert_land")


    land_alert.style.display = "inline-block"

       const data = {land_input, list_year,list_city, land_label}

    const options = {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)

    };
    fetch("/property_api", options)

    land_input.textContent=''
   }


const property_amount = () => {
const property_value_input = document.querySelector(".property_property_input1").value
const land_label = document.querySelector(".label_tax_property")
const num_property = Number(property_value_input)
const prop_result = num_property * 20
land_label.value = prop_result



}

const Property_property_api = () =>{

const property_income_input = document.querySelector(".property_property_input").value
const property_value_input = document.querySelector(".property_property_input1").value
const list_year= document.querySelector(".list_dropdown_year_property").value
const land_label1 = document.querySelector(".label_tax_property").value
const property_alert = document.querySelector(".alert_property")


property_alert.style.display = "inline-block"

   const data = {property_income_input, property_value_input,list_year, land_label1}

const options = {
    method: 'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)

};
fetch("/Property_property_api", options)
}


const vat_amount = () => {
const vat_tax_amount = document.querySelector(".vat_first_input").value
const last_vat_tax = document.querySelector(".vat_second_input").value
const vat_label = document.querySelector(".label_tax_vat")
const vat_amount = Number(vat_tax_amount)
const last_vat_numb = Number(last_vat_tax)
const result_vat_first = (vat_amount*18)/100
const finaly_result = result_vat_first - last_vat_numb
  vat_label.value = finaly_result



}

const vat_api = () =>{

const vat_tax_amount = document.querySelector(".vat_first_input").value
const last_vat_tax = document.querySelector(".vat_second_input").value
const vat_month = document.querySelector(".list_dropdown_month_vat").value
const vat_label = document.querySelector(".label_tax_vat").value
   const alert_vat = document.querySelector(".alert_vat")
       alert_vat.style.display = "inline-block"





   const data = {vat_tax_amount, last_vat_tax,vat_month, vat_label}

const options = {
    method: 'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)

};
fetch("/vat_tax_api", options)
}

const income_amount = () => {
const income_gross = document.querySelector(".income_first_input").value
const income_deductions = document.querySelector(".income_second_input").value
const income_label = document.querySelector(".label_tax_income")
const first = Number(income_gross)
const second = Number(income_deductions)
const result1 = first - second
const result2 = (result1 *20)/100
   income_label.value = result2



}

const income_api = () =>{

   const income_gross = document.querySelector(".income_first_input").value
const income_deductions = document.querySelector(".income_second_input").value
 const income_month = document.querySelector(".list_dropdown_month_income").value
const income_label = document.querySelector(".label_tax_income").value

         const alert_income = document.querySelector(".alert_income")
       alert_income.style.display = "inline-block"



   const data = {income_gross, income_deductions,income_month, income_label}

const options = {
    method: 'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)

};
fetch("/income_tax_api", options)
}

//

const curr = () => {

    const gagzavna = document.querySelector(".i_calculation")
    const drop_currency = document.querySelector(".list_dropdown_currency")
    const fi_cur = document.querySelector(".result_duty")
    const fir_inp = document.querySelector(".duty_first_input")

    gagzavna.addEventListener("click",async function start(){
    const response = await fetch("/currency")
    const data = await response.json()

        const pay_tax = function(){
                    fi_cur.textContent = fin_result
                    fi_cur.style.backgroundColor = "yellowgreen"
        }
          const not_pay_tax = function(){
                    fi_cur.textContent = fin_result
                    fi_cur.style.backgroundColor = "red"
        }
        if( drop_currency.value == "USD"){
            fin_result = fir_inp.value * Number(data.currencies["USD"])
            if (fin_result <300){
                  pay_tax()

            }else{
                not_pay_tax()

            }
        }
        else if( drop_currency.value == "GBP" ){
            fin_result = fir_inp.value * Number(data.currencies["GBP"])
                if (fin_result <300){
                   pay_tax()

            }else{
                not_pay_tax()
            }
        }
        else if( drop_currency.value == "EUR"){
            fin_result = fir_inp.value * Number(data.currencies["EUR"])
                if (fin_result <300){
                  pay_tax()

              }else{
                not_pay_tax()
            }
        }
        else if( drop_currency.value == "TRY"){
            fin_result = fir_inp.value * Number(data.currencies["TRY"])
                if (fin_result <300){
                       pay_tax()

              }else{
                not_pay_tax()
            }
        }
        else if( drop_currency.value == "CHF"){
            fin_result = fir_inp.value * Number(data.currencies["CHF"])
                if (fin_result <300){
                   pay_tax()

              }
        else{
                not_pay_tax()
            }}

         })
    }

