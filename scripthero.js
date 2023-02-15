//selecting all heroes
const fillterItem = document.querySelector(".items");
const fillterImg = document.querySelectorAll(".pic");

window.onload = ()=>{ //once window loaded
    fillterItem.onclick = (selectedItem)=>{
        if(selectedItem.target.classList.contains("item1")||("items2")||("items3")){
            fillterItem.querySelector(".active").classList.remove("active");
            selectedItem.target.classList.add("active");
            let filterName = selectedItem.target.getAttribute("data-name");
            fillterImg.forEach((pic)=>{
                let filteImages = pic.getAttribute("data-name");
                if((filteImages == filterName)||(filterName == "all")){
                    pic.classList.remove("hide");
                    pic.classList.add("show");
                }else{
                    pic.classList.add("hide");
                    pic.classList.remove("show");
                }
            });
        }
    }    
}

