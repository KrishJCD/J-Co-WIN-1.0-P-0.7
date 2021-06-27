
var database;
var stateArray=new Array();
var xyz=new Array();
var c=0;

var vaccines=0;
function setup()
{
    createCanvas();
    database=firebase.database();


    
}



window.onload=function(){
    document.getElementsByClassName("book1")[0].onclick=function(){
        try{
    var selection = document.getElementById("state").value;
    fetchDetails();
    var stateRefVac=database.ref("States/"+selection);
    stateRefVac.on("value",(data)=>{
        vaccines=data.val();
    })
    c++;
    if(vaccines.vaccines===undefined)
        alert("Please Click on the Book Slot Button!!");
    if(c>1){
            console.log(vaccines.vaccines)
            database.ref("States/"+selection+'/').update({
                'vaccines':vaccines.vaccines-1
            })

            var stateRefVac=database.ref("States/"+selection);
            stateRefVac.on("value",(data)=>{
                vaccines=data.val();
            })

            alert("Vaccine Successfully Booked");
            window.open("homepage.html","_Black");
            window.close("book.html");

            }
        }
        catch(TypeError){}
    }
}

function fetchDetails()
{
    var stateRef= database.ref("States");
    stateRef.on("value",(data)=>{
        stateArray.push(data.val());
    })
}