(function($) {
    let idform = "frmcontact";
    if ($(window).width() <= 991) {
        idform = "frmcontact2"
    }
    $(`#${idform}`).validate({
        rules: {
            name: "required",
            profesion: "required",
            ciudad: "required",
            idioma: "required",
            experiencia: "required",
            habilidad: "required",
            identidad: {
                required: true,
                number: true
            },
            domicilio: "required",
            nacimiento: {
                required: true,
                date: true
            },
            telf: {
                required: true,
                number: true
            },
            email: {
                required: true,
                email: true
            },
            mensaje: "required"
        },
        messages: {
            name: "Ingresa tu nombre.",
            email: {
                required: "Ingresa tu correo.",
                email: "Ingrese bien su correo."
            },
            ciudad: "Ingresa la ciudad.",
            idioma: "Ingresa idioma.",
            nacimiento: {
                required: "Ingresa tu fecha nacimiento",
                date: "Ingrese bien su fecha de nacimiento."
            },
            experiencia: "Ingresa experiencia laboral.",
            habilidad: "Ingresa su habilidad.",
            identidad: {
                required: "Ingresa tu dni.",
                number: "Ingrese bien su dni."
            },
            domicilio: "Ingresa tu dirección.",
            telf: {
                required: "Ingresa  tu celular.",
                number: "Ingrese bien su celular"
            },
            mensaje: "Ingresa el mensaje.",
            profesion: "Ingrese su profesión."
        },
        submitHandler: function(form) {
            let fk = $(form)
            let button = fk.find("button")
            let loader = fk.find(".enviando")
            let txtsend = fk.find(".text-ok")
            let txterror = fk.find(".text-error")
            loader.slideDown()
            button.attr("disabled", true)
            $.ajax({
                data: fk.serialize(),
                type: "POST",
                url: fk.attr("action"),
                timeout: 40000
            }).done(function(d) {
                if (d) {
                    txtsend.slideDown()
                } else {
                    txterror.slideDown()
                }
                fk.trigger("reset")
                loader.slideUp()
                button.attr("disabled", false)
            }).fail((function(d) {
                loader.slideUp()
                button.attr("disabled", false)
            }))
        }
    })
})(jQuery);