const grs_income=document.querySelector("#annual-income");
const ex_income=document.querySelector("#extra-income");
const age_grp=document.querySelector("#age-grp");
const deduct=document.querySelector("#deductions");
const submit=document.querySelector("#calculate");
const tooltip1=document.querySelector("#tooltip1");
const tooltip2=document.querySelector("#tooltip2");
const tooltip3=document.querySelector("#tooltip3");
const tooltip4=document.querySelector("#tooltip4");
const popUp=document.querySelector("#pop-up");
const close=document.querySelector("#res-close");
const error1=document.querySelector("#error1");

const isNumeric=(num)=>{
    return !isNaN(num);
}

//event handlers for input fields

grs_income.addEventListener("input",()=>{
    if(!isNumeric(Number(grs_income.value))){
        submit.disabled=true;
       return tooltip1.style.visibility="visible"; 
    }
    tooltip1.style.visibility="hidden";
    submit.disabled=false;
})

ex_income.addEventListener("input",()=>{
    if(!isNumeric(Number(ex_income.value))){
        submit.disabled=true;
       return tooltip2.style.visibility="visible"; 
    }
    tooltip2.style.visibility="hidden";
    submit.disabled=false;
})

deduct.addEventListener("input",()=>{
    if(!isNumeric(Number(deduct.value))){
        submit.disabled=true;
       return tooltip4.style.visibility="visible"; 
    }
    tooltip4.style.visibility="hidden";
    submit.disabled=false;
})


submit.addEventListener("click",()=>{


    if(age_grp.value=="" || age_grp.value=="blank"){
        return tooltip3.style.visibility="visible";
    }
    else{
        tooltip3.style.visibility="hidden";
        submit.disabled=false;
    }
    
    const grs=Number(grs_income.value);
    const ex=Number(ex_income.value);
    const ded=Number(deduct.value);
    const net_income=grs+ex-ded;
    let tax=0;
    if(net_income<=800000){
        console.log("no-tax");
    }
    else{
        if(age_grp.value=="less_40"){
            tax=0.3*(net_income-800000);
            console.log(tax);
        }
        else if(age_grp.value=="bet_40_60"){
            tax=0.4*(net_income-800000);
            console.log(tax);
        }
        else if(age_grp.value=="more_60"){
            tax=0.1*(net_income-800000);
            console.log(tax);
        }
        
    }
    const income=net_income-tax;
    popUp.style.visibility="visible"
    document.getElementById("result").innerText=income;
    close.addEventListener("click",()=>{
        popUp.style.visibility="hidden";
    })
})


