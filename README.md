Aplicação React

Informações do Projeto
Development environment: Visual Studio Code
Version: 16.8

Requisitos para execução
•	NodeJs instalado
•	Utilizar algum editor para execução (ex. VS Code)

Instruções para execução
•	Abrir um editor de texto (ex. VS Code)
•	Selecionar o ficheiro referente ao projeto
•	Abrir um terminal no editor de texto (Ctrl + Shift + ç)
•	Digitar “npm start”


Estrutura utilizada no Projeto
•	Node_Modules – Ficheiros necessários do React e plugins adicionados ao projeto.
•	Public – Contém o índex.html
•	SRC – Arquivos referente ao projeto
o	Componentes – Arquivos com funções semelhantes a partialViews
o	Imagens – Imagens utilizadas no Projeto
o	Pages – Páginas disponíveis no Projeto e apresentadas no menu principal
o	Services – Arquivos com funções específicas (ex. hooks.js conexão com DB)
o	Shared – Armazena a NavBar e o Footer


Páginas

Home – Página que permite alternar entre 2 possíveis perfis de acesso, a qual retorna diferentes tipos de informações consoante ao perfil de acesso selecionado na MaterialUI. 

Relatório – Sem função

Viaturas – Lista que utiliza o plugin Material-UI e seria utilizado como modelo para edição dos registros. A API de referência foi: “http://jsonplaceholder.typicode.com/users”

Eventos – Lista que utiliza o plugin Material-UI com paginação, ordenação de campos e compactação de linhas. Os dados apresentados foram criados em um array.

Geofences – Lista simples de dados a partir de uma API. A API de referência foi: “https://jsonplaceholder.typicode.com/photos?albumId=1”

MaterialUI – Lista que utiliza o plugin Material-UI e apresenta diferentes queries em decorrência do utilizador, a partir do UserContext.js que foi definido na Home e repassado para todas as outras páginas na estrutura da NavBar. A API de referência foi: “https://jsonplaceholder.typicode.com/todos?userId=2” ou “https://jsonplaceholder.typicode.com/todos”

DataGrid – Lista que utiliza o plugin DataGrid e tem como principal funcionalidade a opção de filtro por coluna. Este componente utiliza-se do plugin faker, que foi implementado no arquivo createRowData.js e assim apresenta dados fictícios. 

ReactTable – Lista que utiliza o plugin ReactTable e apresenta uma lista mais completa com paginação, ordenação por campos, apresentação por diferentes quantidades de registros e filtro por conteúdo na tabela. A API de referência foi: “https://jsonplaceholder.typicode.com/todos”

About – Página que apresenta 2 componentes. 
•	AboutInfo: que utiliza a opção de useFetch acoplado em seu código.
•	AboutGroupList que listagem simples e que assim como outros componentes do sistema, utiliza a função Hooks.js para retornar os dados. 


Informações úteis
•	O projeto busca se utilizar de comandos do React Hooks.
•	Grande parte das páginas que retornam dados, utilizam o Hooks.js que se trata de um função React Hooks chamada “useFetch”. E a partir de uma URL retorna os dados e uma indicação true/false para dizer se os dados já foram carregados ou não.
•	O plugin utilizado para o roteamento do projeto foi o React Router e foi aplicado no arquivo NavBar.js.
•	Informações relacionadas ao tipo de utilizados foi o UserContext, que da forma que foi aplicado consegue ser lido em todas as páginas do projeto, sem a necessidade de ser repassado de componente para componente. 
