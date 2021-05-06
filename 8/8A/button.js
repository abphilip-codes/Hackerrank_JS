var a = document.getElementById("btn");
a.addEventListener("click",function() 
    {
        var b = this.innerHTML;
        this.innerHTML = parseInt(b)+1;
    }
);