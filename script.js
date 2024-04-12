// importer un module de la date actuelle

// Pas fait mais si c'est a faire remplacer les 4 par le numero du mois

// récupérer les data :)

let years = document.getElementById("p_years")
let months = document.getElementById("p_months")
let days = document.getElementById("p_days")

let input_day = document.getElementById("input_day")
let input_month = document.getElementById("input_month")
let input_year = document.getElementById("input_year")

let button_validation = document.getElementById("block_one_button")

button_validation.addEventListener("click", function(){
    if (input_day.value <= 31 && input_day.value > 0 && input_month.value <= 12 && input_month.value > 0 && input_year.value < 2024 && input_day.value != "" && input_month.value != "" && input_year.value != "" ){
        let errors = document.getElementsByClassName("error_message")
        errors.opacity = 0

        let value_years = 2023 - input_year.value
        years.textContent = value_years

        if (input_month.value <= 4){
            const value_months = 4 - input_month.value
            const value_days = 30*(4 - input_month.value) + 2
            months.textContent = value_months
            days.textContent = value_days
        }else if (input_month.value > 4){
            const value_months = 12 - (input_month.value - 4)
            const value_days = value_months*30 + 2
            months.textContent = value_months
            days.textContent = value_days
        }
    }else if (input_day.value > 31 || input_day.value < 0){
        let error_day = document.getElementById("error_day")
        error_day.style.opacity = 1
    }else if (input_month.value > 12 || input_month.value < 0){
        let error_month = document.getElementById("error_month")
        error_month.style.opacity = 1
    }else if (input_year.value > 2024 || input_year.value < 1900){
        let error_year = document.getElementById("error_year")
        error_year.style.opacity = 1
    }
})