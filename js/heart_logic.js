(function () {
    const elements = document.querySelectorAll(".products__favorite");

    for (const element of elements) {
        element.addEventListener('click', function () {
            console.log(this)
        })
    }

}) ()

