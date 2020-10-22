document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".burger-btn").addEventListener("click", function() {
        document.querySelectorAll('*[class^="burger"').forEach( item=> item.classList.toggle("show")
        )
    })
}) 