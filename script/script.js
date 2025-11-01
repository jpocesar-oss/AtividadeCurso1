

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const senha = document.querySelector("#senha");
  const confirmaSenha = document.querySelector("#confirmaSenha");
  const nome = document.querySelector("#nome");
  const email = document.querySelector('input[type="email"]');
  const genero = document.querySelector("#genero");
  const tel = document.querySelector("#tel");
  const dataNasc = document.querySelector("#dataNasc");
  const cep = document.querySelector("#cep");
  const endereco = document.querySelector("#endereço");
  const fieldset = document.querySelector("fieldset");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); 

    if (
      !nome.value.trim() ||
      !email.value.trim() ||
      !senha.value.trim() ||
      !confirmaSenha.value.trim() ||
      !tel.value.trim() ||
      !dataNasc.value.trim() ||
      !cep.value.trim() ||
      !endereco.value.trim() ||
      !genero.value.trim()
    ) {
      alert("Todos os campos devem ser preenchidos!");
      return;
    }


    if (senha.value.length < 5) {
      alert("A senha deve conter no mínimo 5 dígitos.");
      return;
    }

    if (senha.value !== confirmaSenha.value) {
      alert("A confirmação de senha não coincide com a senha digitada.");
      return;
    }

    const nascimento = new Date(dataNasc.value);
    const hoje = new Date();
    const idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();
    const dia = hoje.getDate() - nascimento.getDate();

    if (idade < 18 || (idade === 18 && (mes < 0 || (mes === 0 && dia < 0)))) {
      alert("É necessário ter pelo menos 18 anos para se cadastrar.");
      return;
    }

    fieldset.style.backgroundColor = "#d4edda";
    fieldset.style.border = "2px solid #155724";
    fieldset.style.color = "#155724";
    fieldset.style.textAlign = "center";
    fieldset.innerHTML = "<h2>Cadastro concluído!</h2>";

    setTimeout(() => {
      location.reload();
    }, 3000);
  });
});