document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav').classList.toggle('open');
})


function check_is_burger_active(){
    const burger = document.querySelector(".burger")
    return burger.classList.contains("active")
}

const elements = document.querySelectorAll(".nav__link");
for (const element of elements) {
    element.addEventListener('click', function () {
        if (check_is_burger_active()) {
            const burger = document.querySelector(".burger")
            burger.classList.toggle('active');
            document.querySelector('.nav').classList.toggle('open');
        }
    })


}

