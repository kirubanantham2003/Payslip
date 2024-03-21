let val,hra,da,tvl,pf,gp,net;
const payment=()=>
{
    val=parseInt(document.getElementById("bp").value);
    hra=document.getElementById("hra").value=val*(10/100);
    da=document.getElementById("da").value=val*(5/100);
    tvl=document.getElementById("tvl").value=val*(15/100);
    pf=document.getElementById("pf").value=val*(15/100);
    gp=document.getElementById("gp").value=val+hra+da+tvl+pf;
    net=document.getElementById("np").value=gp-pf;
    
}
document.getElementById("bp").addEventListener("keyup",payment);
const tablebody=()=>
{
    document.getElementById("tbody").innerHTML+=`<tr>
    <td>${val}</td>
    <td>${hra}</td>
    <td>${da}</td>
    <td>${tvl}</td>
    <td>${pf}</td>
    <td>${gp}</td>
    <td>${net}</td>
    </tr>`;
    document.getElementById("bp").value="";
    document.getElementById("hra").value="";
    document.getElementById("da").value="";
    document.getElementById("tvl").value="";
    document.getElementById("pf").value="";
    document.getElementById("gp").value="";
    document.getElementById("np").value="";

}
document.getElementById("btn").addEventListener("click",tablebody);
