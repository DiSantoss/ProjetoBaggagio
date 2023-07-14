document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita o comportamento padrão do envio do formulário

  const login = document.getElementById("loginInput").value;

  // Faz a requisição HTTP para a API do GitHub
  fetch(`https://api.github.com/users/${login}`)
    .then(response => {
      if (response.ok) {
        return response.json(); // Converte a resposta para JSON
      } else {
        throw new Error("Usuário não encontrado"); // Lança um erro se a resposta não for bem-sucedida
      }
    })
    .then(data => {
      // Armazena as informações do usuário no localStorage
      localStorage.setItem("usuario", JSON.stringify(data));


      // Redireciona para a página home após o login
      window.location.href = "/projeto/paginaHome/home.html";
    
    })
    .catch(error => {
      // Trata o erro caso o usuário não seja encontrado
      console.error(error);
      alert("Usuário não encontrado");
    });
});