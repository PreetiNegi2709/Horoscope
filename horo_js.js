//retrive data birth date
const get_bd_date_Value = ()=>{
    let birth_date= document.getElementById("bday_date").value
    birth_date = parseInt(birth_date)
    console.log(birth_date)
    horo_sign(birth_date) //calling below funtion
    alert("no selected:"+birth_date+"and :: "+sign)
}

let sign
const horo_sign = (birth_date)=>{
    if (birth_date>=1 && birth_date<=10){
        sign="no=1 or no<=10"
    }
    else if (birth_date>=11 && birth_date<=20) {
        sign="no=11 or no<=20"
    }
    else{
        sign="no>30"
    }
}
