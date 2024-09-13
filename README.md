# Gerenciador de Estudos 2024

Este projeto é um aplicativo React que ajuda a organizar seus estudos ao longo da semana, permitindo que você defina o que vai estudar em diferentes períodos (manhã, tarde e noite) para cada dia da semana.

## Funcionalidades

- Seleção de dia da semana (Segunda a Domingo)
- Escolha do período (manhã, tarde, noite)
- Adição de atividades de estudo para cada período
- Visualização dos estudos programados para cada dia da semana

## Como executar o projeto

Este projeto foi criado com [Create React App](https://github.com/facebook/create-react-app).

### Scripts disponíveis

No diretório do projeto, você pode rodar:

### `npm start`

Executa o aplicativo no modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo no seu navegador.

A página será recarregada automaticamente se você fizer alterações no código.\
Você também verá erros de lint no console.

### `npm test`

Executa o test runner no modo interativo de observação.\
Veja a seção sobre [execução de testes](https://facebook.github.io/create-react-app/docs/running-tests) para mais informações.

### `npm run build`

Constrói o aplicativo para produção na pasta `build`.\
A construção é otimizada para melhor performance em produção.

Os arquivos são minificados e os nomes de arquivo incluem os hashes.\
O app está pronto para ser publicado!

Veja a seção sobre [deployment](https://facebook.github.io/create-react-app/docs/deployment) para mais informações.

### `npm run eject`

**Nota: esta é uma operação irreversível.** Uma vez que você executar `eject`, você não poderá voltar atrás!

Se você não estiver satisfeito com as configurações de build e ferramentas, você pode `eject` a qualquer momento. Este comando removerá a dependência de build única do seu projeto.

Ao fazer isso, todas as configurações e dependências transitivas (Webpack, Babel, ESLint, etc.) serão copiadas diretamente para o seu projeto, dando controle total sobre elas. 

### Exemplo de uso

Ao rodar o projeto, você verá uma interface onde pode escolher o dia da semana, o período (manhã, tarde ou noite) e o assunto que deseja estudar. Após adicionar a atividade, ela será exibida na lista correspondente ao dia e ao período.

Por exemplo, você pode adicionar "Matemática" para estudar na "Manhã" de "Segunda-feira" e, em seguida, visualizar essa atividade na página.

### Estrutura do Código

O código principal está localizado no arquivo `App.js` e utiliza os seguintes conceitos:

- **useState**: Gerenciamento de estado para armazenar os estudos de cada dia da semana.
- **Eventos de formulário**: Manipulação de inputs para adicionar atividades de estudo.
- **Mapeamento de dias da semana**: Renderização dinâmica dos dias e períodos da semana.

### Personalização

Você pode personalizar o aplicativo facilmente alterando o layout e adicionando mais funcionalidades, como a edição ou remoção de atividades, integração com banco de dados, ou até mesmo um sistema de lembretes para cada estudo programado.

## Contribuições

Sinta-se à vontade para fazer um fork deste repositório e enviar Pull Requests. Todos os tipos de melhorias são bem-vindos!

## Licença

Este projeto está licenciado sob a licença MIT.
