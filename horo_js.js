//retrive data birth date
sub_btn.addEventListener('click',function(){
    let birth_date= document.getElementById("bday_date").value
    let birth_month= document.getElementById("bday_month").value
    birth_date = parseInt(birth_date)
    console.log(birth_date)
    console.log(birth_month)
    horo_sign(birth_date,birth_month) //calling below funtion
//     alert(sign);
})
// const get_bd_date_Value = ()=>{
//     let birth_date= document.getElementById("bday_date").value
//     let birth_month= document.getElementById("bday_month").value
//     birth_date = parseInt(birth_date)
// //     console.log(birth_date)
// //     console.log(birth_month)
//     horo_sign(birth_date,birth_month) //calling below funtion
//     alert(sign)
// }

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

var modalBg = document.querySelector(".modal_bg")
var close_mod = document.querySelector(".close_modal")

sub_btn.addEventListener('click',function(e){
        modalBg.classList.add('modal_activity')
})
close_mod.addEventListener('click',function(){
        modalBg.classList.remove('modal_activity')
})


sub_btn.addEventListener('click',function(e){
        if (sign == "Capricorn"){
                modal_txt.innerHTML="YOU ARE"
                modal_txt_body.innerHTML="CAPRICORN"
        }
        if (sign == "Aquarius"){
                modal_txt.innerHTML="YOU ARE"
                modal_txt_body.innerHTML="AQUARIUS"
        }
        if (sign == "Pisces"){
                modal_txt.innerHTML="YOU ARE"
                modal_txt_body.innerHTML="PISCES"
        }
        if (sign == "Aries"){
                modal_txt.innerHTML="YOU ARE"
                modal_txt_body.innerHTML="ARIES"
        }
        if (sign == "Taurus"){
                modal_txt.innerHTML="YOU ARE"
                modal_txt_body.innerHTML="TAURUS"
        }
        if (sign == "Gemini"){
                modal_txt.innerHTML="YOU ARE"
                modal_txt_body.innerHTML="GEMINI"
        }
        if (sign == "Cancer"){
                modal_txt.innerHTML="YOU ARE"
                modal_txt_body.innerHTML="CANCER"
        }
        if (sign == "Leo"){
                modal_txt.innerHTML="YOU ARE"
                modal_txt_body.innerHTML="LEO"
        }
        if (sign == "Virgo"){
                modal_txt.innerHTML="YOU ARE"
                modal_txt_body.innerHTML="VIRGO"
        }
        if (sign == "Libra"){
                modal_txt.innerHTML="YOU ARE"
                modal_txt_body.innerHTML="LIBRA"
        }
        if (sign == "Scorpio"){
                modal_txt.innerHTML="YOU ARE"
                modal_txt_body.innerHTML="SCORPIO"
        }
        if (sign == "Sagittarius"){
                modal_txt.innerHTML="YOU ARE"
                modal_txt_body.innerHTML="SAGITTARIUS"
        }
})

// to type the sign in modal

// demo.innerHTML="sjdghas"