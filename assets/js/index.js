const alertBasico = document.getElementById('alertBasico').addEventListener('click', () => {
    Swal.fire({
        title: "Alerta Básico!",
        text: "Este é um alerta simples",
        icon: "question"
    });
});

const alertSucesso = document.getElementById('alertSucesso').addEventListener('click', () => {
    Swal.fire({
        title: "Alerta Sucesso!",
        text: "Este é um alerta de sucesso",
        icon: "success",
        draggable: true
    });
});


const alertErro = document.getElementById('alertErro').addEventListener('click', () => {
    Swal.fire({
        icon: "error",
        title: "Alerta Erro!",
        text: "Este é um alerta de erro"
    });
});


const alertAviso = document.getElementById('alertAviso').addEventListener('click', () => {
    Swal.fire({
        title: "Alerta Aviso",
        text: "Este é um alerta de aviso",
        icon: "warning"
    });
});


const alertInfo = document.getElementById('alertInfo').addEventListener('click', () => {
    Swal.fire({
        title: "Alerta informação",
        text: "Este é um alerta de informação",
        icon: "info"
    });
});


const alertConirm = document.getElementById('alertConirm').addEventListener('click', () => {
    Swal.fire({
        title: "alerta confirmação",
        text: "Confirmar?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        }
    });
});


const alertTimer = document.getElementById('alertTimer').addEventListener('click', () => {
    let timerInterval;
    Swal.fire({
        title: "processando seus dados",
        text: "Aguarde, pegue um café!",
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
                timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval);
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
        }
    });
});


const alertInput = document.getElementById('alertInput').addEventListener('click', () => {
    Swal.fire({
        title: "Digite seu nome:",
        input: "text",
        inputPlaceholder: 'Seu nome aqui',
        showCancelButton: true,
        confirmButtonText: "Enviar",
        cancelButtonText: "Cancelar",
        showLoaderOnConfirm: true,
    }).then((result) => {
        if (result.isConfirmed && result.value) {
            Swal.fire(`Olá, ${result.value}!`, `Seu nome for recebido`)
        }
    })
});


const alertHtml = document.getElementById('alertHtml').addEventListener('click', () => {
    Swal.fire({
        title: "<strong><u>alerta com HTML</u></strong>",
        icon: "info",
        html: `
          testando <b>negrito</b>,
          <a href="#" autofocus>links</a>,
          teste
        `,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: `
          <i class="fa fa-thumbs-up"></i> Great!
        `,
        confirmButtonAriaLabel: "Thumbs up, great!",
        cancelButtonText: `
          <i class="fa fa-thumbs-down"></i> Cancel
        `,
        cancelButtonAriaLabel: "Thumbs down"
    });
});