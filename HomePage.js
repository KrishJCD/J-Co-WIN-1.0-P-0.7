

function setup()
{
    alert("Your Account has Been validated");
}

window.onload=function(){
    document.getElementsByClassName("logout")[0].onclick=function()
    {        
        
        window.open("index.html", "JCowin");
        window.close("homepage.html");
        
    }
    document.getElementById("info").onclick=function()
    {
        window.open("HelpLine/RegistrationGuide.pdf", "_blank");
    }
    document.getElementById("dont").onclick=function(){
        window.open("HelpLine/Dos_and_Donts_for_Citizens.pdf");
    }
    document.getElementById("register").onclick=function()
    {
        window.open("Book.html");
    }
}

