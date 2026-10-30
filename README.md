
![Tela do sistema](assets/captura-tela-sistema.png)


# Triagem Inteligente de Chamados de TI

Sistema desenvolvido para cadastrar e classificar chamados de suporte técnico de acordo com o nível de impacto e urgência, facilitando a organização e a identificação das prioridades de atendimento.

##  Funcionalidades

- Cadastro de chamados com nome do solicitante e descrição do problema.
- Seleção do nível de impacto e urgência.
- Classificação automática da prioridade.
- Exibição dos chamados cadastrados.
- Armazenamento dos dados no navegador utilizando `localStorage`.
- Identificação visual das prioridades por cores.

##  Regras de classificação

| Condição | Prioridade |
|---|---|
| Impacto 3 e urgência 3 | 🔴 Crítica |
| Impacto 3 ou urgência 3 | 🟠 Alta |
| Impacto 2 ou urgência 2 | 🔵 Média |
| Demais situações | 🟢 Baixa |

## 🛠️ Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- LocalStorage

##  Como executar o projeto

1. Faça o download ou clone este repositório.
2. Abra a pasta do projeto no Visual Studio Code.
3. Abra o arquivo `index.html` no navegador.
4. Preencha os dados do chamado.
5. Informe o impacto e a urgência.
6. Clique no botão de cadastro para visualizar a classificação.

##  Objetivo acadêmico

Projeto desenvolvido como atividade prática de lógica de programação e algoritmos, com o objetivo de aplicar conceitos de:

- Variáveis e tipos de dados.
- Estruturas condicionais (`if`, `else if` e `else`).
- Operadores lógicos (`&&` e `||`).
- Funções.
- Manipulação do DOM.
- Armazenamento de dados no navegador.

##  Desenvolvido por

**Francieli Duarte**

Projeto acadêmico — Triagem Inteligente de Chamados de TI.
