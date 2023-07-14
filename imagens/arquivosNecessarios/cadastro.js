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

/* mensagem se quer editar ou excluir */

const btnEditar = document.getElementById('editartabela')
const btnExcluir = document.getElementById('excluirtabela')
const btnInfo = document.getElementById('informacaotabela')

btnEditar.addEventListener('click', () => {
  alert('Você realmente deseja editar o usuário ?')
})

btnExcluir.addEventListener('click', () => {
  alert('Você realmente deseja excluir o usuário ?')
})

btnInfo.addEventListener('click', () => {
  alert('Você realmente deseja Informações do usuario ?')
})