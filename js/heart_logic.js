(function () {
    const elements = document.querySelectorAll(".products__favorite");

    for (const element of elements) {
        element.addEventListener('click', function () {
            this.classList.toggle("products__favorite-active")
            if (this.classList.contains("products__favorite-active")) {
                this.innerHTML = '<img src="img/favorite_active.svg" alt="">'
                console.log(2)
            } else {
                this.innerHTML = '<img src="img/favorite.svg" alt="">'
                console.log(1)
            }

        })
    }

}) ()

