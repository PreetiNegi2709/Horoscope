//retrive data birth date
const get_bd_date_Value = ()=>{
    let birth_date= document.getElementById("bday_date").value
    let birth_month= document.getElementById("bday_month").value
    birth_date = parseInt(birth_date)
    console.log(birth_date)
    console.log(birth_month)
    horo_sign(birth_date,birth_month) //calling below funtion
    alert(sign)
}

let sign
const horo_sign = (birth_date,birth_month)=>{
    if (birth_month=="dec" || birth_month=="jan"){
        if (birth_month=="dec" && birth_date>=22){
            sign="Capricorn"
        }
        else if (birth_month=="jan" && birth_date<=19){
            sign="Capricorn"
        }
        else{}
    }
    else if (birth_month=="jan" || birth_month=="feb"){
        if (birth_month=="jan" && birth_date>=20){
            sign="Aquarius"
        }
        else if (birth_month=="feb" && birth_date<=17){
            sign="Aquarius"
        }
        else{}
    }
    else if (birth_month=="feb" || birth_month=="march"){
        if (birth_month=="feb" && birth_date>=18){
            sign="Pisces"
        }
        else if (birth_month=="march" && birth_date<=19){
            sign="Pisces"
        }
        else{}
    }
    else if (birth_month=="march" || birth_month=="april"){
        if (birth_month=="march" && birth_date>=20){
            sign="Aries"
        }
        else if (birth_month=="april" && birth_date<=19){
            sign="Aries"
        }
        else{}
    }
    else if (birth_month=="april" || birth_month=="may"){
        if (birth_month=="april" && birth_date>=20){
            sign="Taurus"
        }
        else if (birth_month=="may" && birth_date<=20){
            sign="Taurus"
        }
        else{}
    }
    else if (birth_month=="may" || birth_month=="june"){
        if (birth_month=="may" && birth_date>=21){
            sign="Gemini"
        }
        else if (birth_month=="june" && birth_date<=20){
            sign="Gemini"
        }
        else{}
    }
    else if (birth_month=="june" || birth_month=="july"){
        if (birth_month=="june" && birth_date>=21){
            sign="Cancer"
        }
        else if (birth_month=="july" && birth_date<=22){
            sign="Cancer"
        }
        else{}
    }
    else if (birth_month=="july" || birth_month=="august"){
        if (birth_month=="july" && birth_date>=23){
            sign="Leo"
        }
        else if (birth_month=="august" && birth_date<=22){
            sign="Leo"
        }
        else{}
    }
    else if (birth_month=="august" || birth_month=="sep"){
        if (birth_month=="august" && birth_date>=23){
            sign="Virgo"
        }
        else if (birth_month=="sep" && birth_date<=22){
            sign="Virgo"
        }
        else{}
    }
    else if (birth_month=="sep" || birth_month=="oct"){
        if (birth_month=="sep" && birth_date>=23){
            sign="Libra"
        }
        else if (birth_month=="oct" && birth_date<=22){
            sign="Libra"
        }
        else{}
    }
    else if (birth_month=="oct" || birth_month=="nov"){
        if (birth_month=="oct" && birth_date>=23){
            sign="Scorpio"
        }
        else if (birth_month=="nov" && birth_date<=21){
            sign="Scorpio"
        }
        else{}
    }
    else if (birth_month=="nov" || birth_month=="dec"){
        if (birth_month=="nov" && birth_date>=22){
            sign="Sagittarius"
        }
        else if (birth_month=="dec" && birth_date<=21){
            sign="Sagittarius"
        }
        else{}
    }
    else{
        sign="you entered wrong date"
    }
} 

