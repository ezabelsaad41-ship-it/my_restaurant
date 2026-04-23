window.onload = function () {

    const orderForm = document.querySelector('#order form');
    orderForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('تم إرسال الطلب بنجاح');
    });

    const reserveForm = document.querySelector('#reserve form');
    reserveForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('تم حجز الطاولة بنجاح');
    });

    const lang = document.getElementById("lang");
    const title = document.getElementById("title");

    lang.addEventListener("change", function () {

        if (lang.value === "en") {
            title.innerText = "Restaurant";
            document.body.dir = "ltr";
        }

        if (lang.value === "ar") {
            title.innerText = "مطعم إيزا";
            document.body.dir = "rtl";
        }

    });

};