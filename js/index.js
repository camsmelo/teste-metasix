const criaNovaLinha = (pergunta, ordem) => {
  const linhaNova = document.createElement("tr");
  const conteudo = `
            <tr>
                <td>${data.pergunta}</td>
                <td class="ordem">${data.ordem}</td>
                <td><img id="editar" src="./assets/icons/edit-solid.svg" alt="Campo para editar"></td>
                <td><img id="excluir" src="./assets/icons/trash-solid.svg" alt="Excluir..."></td>
            </tr>
`;
  linhaNova.innerHTML = conteudo;
  return linhaNova;
}

fetch("https://poc.metasix.solutions/parse/classes/FAQ", {
  method: "GET",
  headers: { "X-Parse-Application-Id": "br.com.metasix.poc" },
})
  .then((res) => {
    return res.json();
  })
  .then((data) => console.log(data));
