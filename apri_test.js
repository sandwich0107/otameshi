function tokei()
{
    dt = new Date();
    h = dt.getHours();
    m =dt.getMinutes();
    s =dt.getSeconds();
    var str=h+"."+m+":"+s;
    document.title=str;
//    document.myForm.myText.value=str;

    document.getElementById("tokei").innerHTML=str;
    window.status=str;
}
