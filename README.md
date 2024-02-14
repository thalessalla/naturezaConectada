<div align="center">


### Landing Page em React - Squad 5 <hr>

Natureza Conectada


<img align="center"  src="./src/assets/logo.png" alt="Logotipo da aplicação Natureza Conectada"><br>

Conectando pessoas à natureza, uma semente por vez.

</div>
  
***
<div align="center">

### Desenvolvido Por:

 #### Camila Gonçalves <br> 
  [Linkedin](https://www.linkedin.com/in/camilanpgoncalves/) | [Github](https://github.com/CamilaVerso)
 
   #### Thales Salla <br> 
  [Linkedin](https://www.linkedin.com/in/thales-salla/) | [Github](https://github.com/thalessalla)
  <br>
  <hr>
</div>

# Informações Importantes 

## Banco de Dados 

Estamos utilizando o *json-server* portanto para que seja possível testar o formulário de cadastro e *login* se faz necessário rodar o comando `npm run backend`
<hr>


## Atualizações Task 05

Até o presente momento estamos usando o *db.json* para rodar algumas funcionalidades, portanto para que seja possível vizualizar/acessar todas as funcionalidades implementadas pelo *Vercel* se faz necessário clonar o repositório, instalar as dependências e rodar o banco de dados utilizando o comando `npm run backend`

Obs: *UserPage* - área logada.

Atualizações nas telas que já estavam prontas:

* [Cadastre-se](https://natureza-conectada-cup7.vercel.app/signup) - Tela dedicada ao usuário.
  - Nesta tela, é possível realizar o cadastro do usuário (Lembrando que para funcionar é necessário rodar o banco de dados);
      * Funcionalidades:
        - Os *inputs* dedicados para a **Cidade**, **Rua** e **UF** são preenchidos automaticamente após ser preenchido o campo **CEP**, pois estamos consumindo a *API viaCep*; 
        - Após ser cadastrado, é apresentada um *alert* dando as boas vindas à aplicação. (Não foi implementado o redirecionamento, porque estava interferindo no funcionamento do cadastro);
       
  - Todos os *inputs* possuem verificação e limite de caracteres.
            
    Esta página é acessada através do *Header* em **Cadastre-se**, e também pelo botão **Cadastre-se** na *Home*.

* [Login](https://natureza-conectada-cup7.vercel.app/login) - Tela dedicada ao usuário.
  - Aqui o usuário cadastrado pode efetuar o *login* (Lembrando que para funcionar é necessário rodar o banco de dados);
       * Funcionalidades:
          - Após digitar o endereço de *email* e a *senha* que foram cadastrados na tela **Cadastre-se**, o usuário é direcionado para a área logada - *UserPage*.
        
<hr>

Foram criadas as seguinte páginas:

* [UserPage](https://natureza-conectada-cup7.vercel.app/userPage) - Tela dedicada ao usuário.
  - Nesta tela, damos as boas-vindas para os usuários;
  - O nome do usuário é renderizado dinâmicamente a partir do *login* realizado;
  - Configuramos o *tabIndex*.
    
       * Funcionalidades disponíveis:
  - O usuário pode clicar no botão **Configurar Perfil**, ele será redirecionado para a página *Config*;
  - Ao final da página clicando no botão **Pedir**, ele será redirecionado para a página **Resultado** onde poderá escolher a sua muda.
 
    Esta página é acessada após realizar o *login*.
 
* [Config](https://natureza-conectada-cup7.vercel.app/config) - Tela dedicada ao usuário.
  - Criada para que o usuário possa editar seus dados e a sua senha, o formulário de editar dados conta com todas as verificações. No momento, encontra-se estática não sendo possível fazer uso dessa funcionalidade. Ela pode ser acessada através do link acima, ou pela navegação do site a partir da *UserPage* pelo botão **Configurar Perfil**.

* [Resultado](https://natureza-conectada-cup7.vercel.app/resultado) - Tela dedicada ao usuário.
  - Criada com o intuito de mostrar ao usuário quais as mudas indicadas para a sua região (Indicará sempre em 3 tamanhos).
  - Esta página é renderizada a partir das informações contidas no banco de dados (neste  caso no *db.json*),
  - Possui um botão em cada tipo de muda (*card*), com a funcionalidade de selecionar a muda que deseja. Após selecionar o botão muda a funcionalidade, sendo possível remover a seleção.
  - Ao clicar em **Continuar** o usuário é redirecionado para a página de Confirmação.

    * Funcionalidade prevista( ainda não implementada):
  - O botão voltar levará o usuário para a página *UserPage*.  
  
A página de Resultado pode ser acessada através do link acima (lembrando que sem rodar o banco de dados, os cards não serão renderizados), ou pela navegação do site a partir do botão **Pedir** presente na *UserPage*.

* [Confirmation](https://natureza-conectada-cup7.vercel.app/confirmation) - Tela dedicada ao usuário.
  - Criada para que o usuário possa verificar e confirmar os dados do seu pedido.
  - No momento encontra-se estática, porém as funcionalidades previstas para essa página são:
     - Remover o item escolhido;
     - Escolher o endereço onde será realizada a entrega.
        
  Funcionalidades que podem ser utilizadas no *Vercel*
  - Voltar para a página de **Resultado** para escolher outras mudas;

A página de Confirmação pode ser acessada através do link acima, ou pela navegação do site a partir da **Resultado** pelo botão **Continuar**.
 
* [Obrigado](https://natureza-conectada-cup7.vercel.app/obrigado) - Tela dedicada ao usuário.
  - Criada para agradecer o usuário por ter adquirido sua muda;
  - Conta com a funcionalidade de retornar para a *Home*.

    
* [AdminPage](https://natureza-conectada-cup7.vercel.app/admin) - Tela dedicada ao Administrador.
  - Criada para que o Administrador possa editar os dados dos usuários e informações das Mudas.
  - É possível ver a lista de usuários e a lista de mudas disponíveis através dos botões localizados à esquerda na tela.

     * Funcionalidades previstas( ainda não implementada):
  - O administrador terá a possibilidade de ativar o endereço de entrega dos usuários indicando também o Ecossistema que aquele endereço pertence. Esta informação se faz importante porque é ela que irá definir as mudas que serão renderizadas para os usuários na tela **Resultado**;
  - Para as mudas, será possível mudar seu *status* para ativa(disponível) ou inativa(indisponível);

     No momento esta tela está estática e o seu acesso se faz somente pelo link. 

<hr>
## Atualizações Task 04

Para a task 04 nos concentramos em resolver questões levantadas na correção da task 03, que foram as seguintes: 
<br>
<br>
* **Identação**;
   - Descobrimos que a extensão *Prettier* não estava funcionando como deveria.
* ***Imports* que não estavam sendo utilizados**;
   - Excluímos os *imports* que não estavam sendo utilizados.
* ***Padding* nos *inputs* de cadastro**;
   - Aumentamos o *padding* tanto nos *inputs* de cadastro quanto na tela de *login*.
* **Revisar mensagem de erro nos campos dos formulários**;
   - Melhoramos as mensagens de erro deixando-as mais informativas.
* **Formulário de *login* *logando* sem consultar os dados na *API***;
   - Modificamos a lógica para que a mesma apresentasse o comportamento esperado.
<br>

  Além destas modificações conseguimos utilizar o *MaterialUI* e implementamos o *menu hamburguer*.
  
<hr>

## Rotas 

Ao se cadastrar ou efetuar o login, o usuário ainda não é direcionado para a *Userpage* (página de usuário), porque ainda não aprendemos sobre rotas privadas. Porém, o usuário recebe uma confirmação visual através de um alerta (*alert*).

## Responsividade

Todas as páginas são responsivas. 
Para acessar a *userpage* se faz necessário realizar a rota manualmente através da barra do navegador ou [cliando aqui.](https://natureza-conectada-cup7.vercel.app/userpage)

## Dados Lighthouse

Para alcançar os resultados reais, se faz necessário realizar o uso da ferramenta *Lighthouse* em **aba anônima**, abaixo os resultados alcançados:
<br>

*Landing Page*:

<img src="./src/assets/LP.webp">
<br>
<br>

*Login*

<img src="./src/assets/login.webp">
<br>
<br>

*Signup*

<img src="./src/assets/signup.webp">
<br>
<br>

*Userpage*

<img src="./src/assets/userpage.webp">
<br>
<br>
<hr>
<hr>
<hr>

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
