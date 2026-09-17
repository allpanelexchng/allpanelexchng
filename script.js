
/* =========================================
   WHATSAPP NUMBER
========================================= */

/*
   Apna WhatsApp number yahan dalein.

   Example:
   India number:
  +919111086286

   + sign, spaces aur dashes nahi lagane hain.
*/

const whatsappNumber = "+919111086286";


/* =========================================
   OPEN WHATSAPP
========================================= */

function openWhatsApp(event) {

    /*
       Link/button ka default action stop karein
    */

    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }


    /*
       WhatsApp message
    */

    const message =
        "Hello, I need more information.";


    /*
       WhatsApp URL
    */

    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(message);


    /*
       Open WhatsApp
    */

    window.open(whatsappURL, "_blank");
}


/* =========================================
   CLICK ANYWHERE ON PAGE
========================================= */

document.addEventListener("click", function () {

    /*
       Page par kahin bhi click hone par
       WhatsApp open hoga.
    */

    const message =
        "Hello, I need more information.";

    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(message);

    window.open(whatsappURL, "_blank");

});

