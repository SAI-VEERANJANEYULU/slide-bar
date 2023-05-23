const left=document.querySelector(".left");
const right=document.querySelector(".right");
const slider=document.querySelector(".slider");
const images=document.querySelectorAll(".image");
const bottom=document.querySelector(".bottom")

let slideNumber = 1;

const length = images.length;

const nextslide =()=>{
    slider.style.transform=`translateX(-${slideNumber * 800}px)`;
    slideNumber++;
}

const prevslide =()=>{
    slider.style.transform=`translateX(-${(slideNumber-2) * 800}px)`;
    slideNumber--;
}
const getfirstslide =()=>{
    slider.style.transform=`translateX(0px)`;
        slideNumber=1;

    
}
const getlastslide =()=>{
    slider.style.transform=`translateX(-${(length-1)*800}px)`;
        slideNumber=length;

    
}
const changecolor=()=>{
    resetBg()
    buttons[slideNumber-1].style.backgroundColor="white"
}


right.addEventListener("click",()=>{
    slideNumber < length ? nextslide() :  getfirstslide();
   changecolor()

        
    
});

left.addEventListener("click",()=>{
    slideNumber > 1 ? prevslide() :  getlastslide();
   changecolor()

        
    
});

for(let i=0;i<length;i++){
    const div = document.createElement("div")
    div.className="button"
    bottom.appendChild(div)
}

const buttons = document.querySelectorAll(".button")
buttons[0].style.backgroundColor="white";

buttons.forEach((button,i)=>{
    button.addEventListener("click",()=>{
        resetBg()
slider.style.transform=`translateX(-${i*800}px)`;
slideNumber=i+1;
button.style.backgroundColor="white"

    })
})
const resetBg =()=>{
    buttons.forEach((button)=>{
        button.style.backgroundColor="transparent";
    });
};