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

//colour change opf sign_box when curson enter\
// let s_box= document.getElementsByClassName("sign_box")
// row1
// sign_box_cap.onmouseover=function(){
//     document.getElementById("sign_box_cap").style.backgroundColor="#AA336A"
// }
// sign_box_cap.onmouseout=function(){
//     document.getElementById("sign_box_cap").style.backgroundColor="rgb(94 75 119 / 77%)"
// }

// sign_box_aqu.onmouseover=function(){
//     document.getElementById("sign_box_aqu").style.backgroundColor="#AA336A"
// }
// sign_box_aqu.onmouseout=function(){
//     document.getElementById("sign_box_aqu").style.backgroundColor="rgb(94 75 119 / 77%)"
// }

// sign_box_pis.onmouseover=function(){
//     document.getElementById("sign_box_pis").style.backgroundColor="#AA336A"
// }
// sign_box_pis.onmouseout=function(){
//     document.getElementById("sign_box_pis").style.backgroundColor="rgb(94 75 119 / 77%)"
// }

// sign_box_ari.onmouseover=function(){
//     document.getElementById("sign_box_ari").style.backgroundColor="#AA336A"
// }
// sign_box_ari.onmouseout=function(){
//     document.getElementById("sign_box_ari").style.backgroundColor="rgb(94 75 119 / 77%)"
// }

// // row2
// sign_box_tau.onmouseover=function(){
//     document.getElementById("sign_box_tau").style.backgroundColor="#AA336A"
// }
// sign_box_tau.onmouseout=function(){
//     document.getElementById("sign_box_tau").style.backgroundColor="rgb(94 75 119 / 77%)"
// }

// sign_box_gem.onmouseover=function(){
//     document.getElementById("sign_box_gem").style.backgroundColor="#AA336A"
// }
// sign_box_gem.onmouseout=function(){
//     document.getElementById("sign_box_gem").style.backgroundColor="rgb(94 75 119 / 77%)"
// }

// sign_box_can.onmouseover=function(){
//     document.getElementById("sign_box_can").style.backgroundColor="#AA336A"
// }
// sign_box_can.onmouseout=function(){
//     document.getElementById("sign_box_can").style.backgroundColor="rgb(94 75 119 / 77%)"
// }

// sign_box_le.onmouseover=function(){
//     document.getElementById("sign_box_le").style.backgroundColor="#AA336A"
// }
// sign_box_le.onmouseout=function(){
//     document.getElementById("sign_box_le").style.backgroundColor="rgb(94 75 119 / 77%)"
// }

// // row3
// sign_box_vir.onmouseover=function(){
//     document.getElementById("sign_box_vir").style.backgroundColor="#AA336A"
// }
// sign_box_vir.onmouseout=function(){
//     document.getElementById("sign_box_vir").style.backgroundColor="rgb(94 75 119 / 77%)"
// }


// sign_box_lib.onmouseover=function(){
//         document.getElementById("sign_box_lib").style.backgroundColor="#AA336A"
// }
// sign_box_lib.onmouseout=function(){
//         document.getElementById("sign_box_lib").style.backgroundColor="rgb(94 75 119 / 77%)"
// }

// sign_box_sco.onmouseover=function(){
//         document.getElementById("sign_box_sco").style.backgroundColor="#AA336A"
// }
// sign_box_sco.onmouseout=function(){
//         document.getElementById("sign_box_sco").style.backgroundColor="rgb(94 75 119 / 77%)"
// }

// sign_box_sag.onmouseover=function(){
//         document.getElementById("sign_box_sag").style.backgroundColor="#AA336A"
// }
// sign_box_sag.onmouseout=function(){
//      document.getElementById("sign_box_sag").style.backgroundColor="rgb(94 75 119 / 77%)"
// }
