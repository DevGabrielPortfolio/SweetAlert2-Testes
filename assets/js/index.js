const alertBasico = document.getElementById('alertBasico').addEventListener('click', ()=>{
    Swal.fire({
        title: "Alerta Básico!",
        text: "Este é um alerta simples",
        icon: "question"
      });
});

const alertSucesso = document.getElementById('alertSucesso').addEventListener('click', ()=>{
    Swal.fire({
        title: "Alerta Sucesso!",
        text: "Este é um alerta de sucesso",
        icon: "success",
        draggable: true
      });
});



const alertErro = document.getElementById('alertErro').addEventListener('click', ()=>{
    Swal.fire({
        icon: "error",
        title: "Alerta Erro!",
        text: "Este é um alerta de erro"
      });
});
