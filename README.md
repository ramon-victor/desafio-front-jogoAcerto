<h1 align="center">
DESAFIO FRONT-END
</h1>

## Introdução
<p>✏ Um desafio de desenvolvimento front-end, onde o usuário deverá acertar o número aleatório recebido por uma API. 
Vale ressaltar que o desafio não permite o uso de biblotecas (React, Bootstrap...), e a interface deverá seguir um layout pré-estabelecido.</p>

## Desafio
<p>Você deverá enviar uma requisição para receber um valor aleatório utilizando o
endpoint abaixo, com parâmetros especificando o limite inferior e superior. Para o modo padrão
de jogo, utilize o limite inferior como 1 e o limite superior como 300, conforme a URL abaixo: <br>
<a href="https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300">https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300</a>.</p>

<p> Você deverá informar em um texto acima do LED os resultados possíveis: <br>
- "Erro": quando houver erro na requisição; <br>
- "É menor": quando o palpite enviado é maior que o número obtido; <br>
- "É maior": quando o palpite enviado é menor que o número obtido; <br>
- "Você acertou!!!": quando o palpite enviado é igual ao número obtido.
</p>


<p>Além disso, deverá existir na tela um botão NOVA PARTIDA, cujo clique deverá criar uma
nova partida obtendo um novo número aleatório (o que implica em fazer uma nova requisição).</p>
<p>É importante mencionar que o número a ser adivinhado pelo usuário DEVE
impreterivelmente ser obtido por meio da requisição descrita anteriormente. O objetivo do
problema envolve testar a sua habilidade de lidar com requisições.</p>

## Especificações

### Segmentos:
<p>- O display pode conter números não-negativos de 1 a 3 algarismos. <br>
- O valor numérico exibido nos segmentos deve representar o palpite realizado ou
o status code obtido quando a requisição falhar. <br>
- Só deve ser apresentada a quantidade de algarismos necessária (O número 29
precisar ser exibido sem zero à esquerda). <br>
- Você deve implementar sua própria solução para exibir os segmentos. Não
serão aceitas bibliotecas de terceiros para esta etapa. Em especial, NÃO utilize
uma fonte pronta para exibir os segmentos. <br> </p>

### Botão NOVA PARTIDA:
<p>- O botão ficará visível apenas quando houve erro ao receber o número ou quando
o jogador acertou o palpite.</p>


### Campo de entrada: 
<p>- Mostrar o texto "Digite o palpite" como placeholder. <br>
- O valor deve aparecer nos segmentos assim que o botão ENVIAR for clicado e o
input deve ser resetado para o estado inicial. <br>
- O botão de enviar deverá ficar desabilitado quando houve erro ao receber o
número ou quando o jogador acertou o palpite. O usuário deve clicar em "NOVA
PARTIDA" neste caso. <br> </p>

## 📷 Layout proposto pelo desafio

<div  align="center">
<img width="450rem" src="https://user-images.githubusercontent.com/13617054/187114129-1b4c1de2-8563-49f0-9453-15aaa7b183fa.png"/>
</div>


