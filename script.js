//Triagem Inteligente de Chamados

//1. Análise do problema: entradas, processamento, saídas, variáveis, tipos de dados e regras lógicas.

//2. Fluxograma completo utilizando corretamente a simbologia de início/fim, entrada/saída, processamento, decisão e fluxo.

//3. Pseudocódigo completo com variáveis, entrada/saída, expressões, decisões e repetição para analisar mais de um chamado.

//4. Implementação do algoritmo coerente com o pseudocódigo, utilizando JavaScript nas turmas de Back-End e Front-End, e a linguagem indicada pelo tutor na turma de Mobile Flutter.

//5. Evidências de teste com, no mínimo, quatro cenários: um para prioridade crítica, um para alta, um para média e um para baixa.


const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = document.getElementById("name").value;
  const description = document.getElementById("description").value;

  const impacto = Number(document.getElementById("impact").value);
  const urgencia = Number(document.getElementById("urgent").value);
  const lista = document.getElementById("lista")
  let classificacao;

  if(impacto > 3 || urgencia > 3){
    alert("digite de 1 à 3 para definir o grau de prioridade")
    return;

  }

  if (impacto === 3 && urgencia === 3) {
    classificacao = "Crítica";
    
  } else if (impacto === 3 || urgencia === 3) {
    classificacao = "Alta";
  } else if (impacto === 2 || urgencia === 2) {
    classificacao = "Média";
  } else {
    classificacao = "Baixa";
  }

  document.getElementById("priority").textContent = classificacao;
  
 

   const chamado = {
    nome: nome,
    descricao: description,
    impacto: impacto,
    urgencia: urgencia,
    classificacao: classificacao
   };

     const listaSolicitante = JSON.parse(
  localStorage.getItem("ListaSolicitante") || "[]"
);

   listaSolicitante.push(chamado);



   localStorage.setItem("ListaSolicitante", JSON.stringify(listaSolicitante));
  
  

  lista.innerHTML = "";

  const chamadoDiv = document.createElement("p");


  chamadoDiv.textContent =
    `Nome: ${item.nome} | ` +
    `Descrição do problema:: ${item.descricao} | ` +
    `Prioridade: ${item.classificacao}` ;

  lista.appendChild(chamadoDiv);

    
 

  alert(
    `Nome do solicitante: ${nome}\n` +
    `Descrição do problema: ${description}\n` +
    `Prioridade: ${classificacao}`
  );
 


});



function exibirCor(item, chamadoDiv){
  if (item.classificacao === "Crítica") {
      chamadoDiv.style.color = "red";

    } else if (item.classificacao === "Alta") {
      chamadoDiv.style.color = "orange";

    } else if (item.classificacao === "Média") {
      chamadoDiv.style.color = "blue";

    } else {
      chamadoDiv.style.color = "green";
    }

  
}


function exibirChamados() {
  const lista = document.getElementById("lista");

  const listaSolicitante = JSON.parse(
    localStorage.getItem("ListaSolicitante") || "[]"
  
  );

  lista.innerHTML = "";

  listaSolicitante.forEach((item) => {
    const chamadoDiv = document.createElement("p");

   exibirCor(item, chamadoDiv)

    chamadoDiv.textContent =
      `Nome: ${item.nome} | ` +
      `Descrição: ${item.descricao} | ` +
      `Prioridade: ${item.classificacao}`;

    lista.appendChild(chamadoDiv);
  });

  localStorage.setItem(
  "ListaSolicitante",
  JSON.stringify(listaSolicitante)
); 
}




  exibirChamados();