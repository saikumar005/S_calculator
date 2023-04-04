function removeLeadingZeros(res)
{
    while(res.charAt(0)=='0' && res.length>=1)
    {
        res=res.substr(1);
    }
    return res;

}
function appendToResult(val)
{
    let res=document.getElementById("result").innerHTML;
    res=removeLeadingZeros(res);
    res+=val;
    document.getElementById("result").innerHTML=res;
}
function compute()
{
    let x=document.getElementById("result").innerHTML;

    x=eval(x);

    document.getElementById("result").innerHTML=x;
}
function clearScreen()
{
    document.getElementById("result").innerHTML='';
}