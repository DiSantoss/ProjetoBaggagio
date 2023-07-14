document.addEventListener("DOMContentLoaded", function() {
  const usuarioLogado = localStorage.getItem("usuario");

  if (!usuarioLogado) {
    // Se o usuário não estiver logado, redireciona para a página de login
    window.location.href = "login.html";
  } else {
    // Se o usuário estiver logado, exiba as informações necessárias
    const usuario = JSON.parse(usuarioLogado);

    // Atualize as tags HTML com os valores do usuário
    document.getElementById("nome").textContent = usuario.name;
    document.getElementById("imgUsuario").src = usuario.avatar_url;
  }

  const cadastrarLink = document.querySelector(".cadastrar a");
  const formularioDiv = document.querySelector(".formulario");

  cadastrarLink.addEventListener("click", function(event) {
    event.preventDefault();
    formularioDiv.style.display = "block";
  });

  const formulario = document.getElementById("cadastroForm");
  const voltarBtn = document.getElementById("voltarBtn");

  voltarBtn.addEventListener("click", function() {
    formulario.reset();
    formularioDiv.style.display = "none";
  });

  formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(formulario);
    const usuario = {};

    for (let [key, value] of formData) {
      usuario[key] = value;
    }

    const params = new URLSearchParams(usuario).toString();
    window.location.href = `/projeto/paginaDeCadastro/cadastro.html?${params}`;
  });
});



/* para deixar escondida a class "semUsuarios" quando necessário */

document.addEventListener("DOMContentLoaded", function() {
  const cadastrarLink = document.querySelector(".cadastrar a");
  const semUsuariosDiv = document.querySelector(".semUsuarios");
  const voltarBtn = document.getElementById("voltarBtn");

  cadastrarLink.addEventListener("click", function(event) {
    event.preventDefault();
    semUsuariosDiv.style.display = "none";
  });

  voltarBtn.addEventListener("click", function() {
    semUsuariosDiv.style.display = "block";
  });
});