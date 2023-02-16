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
    if ((birth_month=="dec" && birth_date>=23) || (birth_month=="jan" && birth_date<=20))
        sign="Capricorn"
        
    else if ((birth_month=="jan" && birth_date>=21) || (birth_month=="feb" && birth_date<=17))
        sign="Aquarius"
        
    else if ((birth_month=="feb" && birth_date>=18) || (birth_month=="march" && birth_date<=19))
        sign="Pisces"
    
    else if ((birth_month=="march" && birth_date>=20) || (birth_month=="april" && birth_date<=19))
            sign="Aries"
        
    else if ((birth_month=="april" && birth_date>=20) || (birth_month=="may" && birth_date<=20))
            sign="Taurus"

    else if ((birth_month=="may" && birth_date>=21) || (birth_month=="june" && birth_date<=20))
            sign="Gemini"

    else if ((birth_month=="june" && birth_date>=21) || (birth_month=="july" && birth_date<=22))
            sign="Cancer"
    
    else if ((birth_month=="july" && birth_date>=23) || (birth_month=="august" && birth_date<=22))
            sign="Leo"
  
    else if ((birth_month=="august" && birth_date>=23) || (birth_month=="sep" && birth_date<=22))
            sign="Virgo"
            
    else if ((birth_month=="sep" && birth_date>=23) || (birth_month=="oct" && birth_date<=22))
            sign="Libra"

    else if ((birth_month=="oct" && birth_date>=23) || (birth_month=="nov" && birth_date<=21))
            sign="Scorpio"
 
    else if ((birth_month=="nov" && birth_date>=22) || (birth_month=="dec" && birth_date<=22))
            sign="Sagittarius"

    else
        sign="you entered wrong date"
    
}
