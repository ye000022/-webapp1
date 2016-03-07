document.addEventListener("DOMContentLoaded", init);

function init(ev){
    var pl = document.querySelectorAll(".page-link");
    [].forEach.call(pl, function(obj,index){
        obj.addEventListener("click",navigate);
    });

    var pages = document.querySelectorAll("[data-role=page]");
    [].forEach.call(pages,function(obj,index){
        obj.className = "inactive-page";
        if(index==0){
            obj.className = "active-page";
        }
        
        obj.addEventListener("animationend",pageAnimated);
    });
}

function pageAnimated(ev){
    var page = ev.target;
    if(page.className == "active-page"){
        console.log(ev.target.id,"has just appeared");
    }else{
        console.log(ev.target.id,"has just disappeared");
        ev.target.classList.add("hidden");
    }
}
function navigate(ev){
    ev.preventDefault();
    var btn = ev.target;
    var href = btn.href;
    var id = href.split("#")[1];
    var pages = document.querySelectorAll('[data-role="page"]');
    for(var p=0; p<pages.length; p++){
        if(pages[p].id ===id){
            pages[p].classList.remove("hidden");
            if(pages[p].className !=="active-page"){
                pages[p].className = "active-page";
            }
        }else{
            if(pages[p].className !=="inactive-page"){
                pages[p].className = "inactive-page";
            }
        }
    }
}
