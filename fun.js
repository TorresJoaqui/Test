if(screen.height < 800)
    {
        var element = document.getElementById("contacto");
        element.style = "display: none";
        var element2 = document.getElementById("img2");
        element2.style = "display: none";
    }


function menu()
{
    var menues = document.getElementById("oculto");
    
    
    var estado = localStorage.getItem("menu");
    
    if(estado == 0)
        {
            menues.style = "display: block";
            localStorage.setItem("menu", 1);
        }
    else
        {
            menues.style = "display: none";
            localStorage.setItem("menu", 0);
        }
    
    
    
}