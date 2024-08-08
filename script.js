let Images = [ "img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg"];
const MainElement =document.getElementById("main-element");
let Imageindex = 0 ;
 function previmage(){

           if(Imageindex == 0){
             Imageindex=Images.length-1;
           }else{
            Imageindex--;
           }

           MainElement.src=Images[Imageindex];
 }
 function nextimage(){
    if(Imageindex == Images.length-1){
        Imageindex = 0 ;
    }else{
        Imageindex++ ;
    }
    MainElement.src=Images[Imageindex];
 }
  //  setInterval(nextimage,2000);