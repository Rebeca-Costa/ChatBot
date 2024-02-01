document.addEventListener('DOMContentLoaded', function () { //inicia uma função
    const floatingButton = document.getElementById('floating-button'); //faz referencia a um elemento de acordo com o id
    const chatBox = document.getElementById('chatBox');
    const chatMessages = document.getElementById('chatMessages');
    const inputMessage = document.getElementById('userInput');
    const chatBButton = document.querySelector('.chatB');

    floatingButton.addEventListener('click', function () { //Evento quando o botão é clicado
        chatBox.style.display = (chatBox.style.display === 'none' || chatBox.style.display === '') ? 'block' : 'none'; // block/none - faz a caixa do chat aparecer ou desaparecer
    });

    if (chatBButton) {
        chatBButton.addEventListener('click', enviarMensagem);
    }

    // Mensagens iniciais
    chatMessages.innerHTML += `<p><strong>Bot:</strong> Ola! Eu sou o Question Bot.</p>`;
    chatMessages.innerHTML += `<p><strong>Bot:</strong> Antes de comecarmos, por favor, digite seu nome:</p>`;
});

            let nome = '';// variavel vazia
            let step = 0;// variavel com valor inicial 0

          function enviarMensagem() {
              const inputMessage = document.getElementById('userInput'); // campo onde o usuário envia as mensagens
              const chatMessages = document.getElementById('chatMessages'); // campo que contém as mensagens

              const mensagem = inputMessage.value;
              if (mensagem.trim() !== '') { // verifica se a mensagem não esta vazia
                  chatMessages.innerHTML += `<p><strong>Voce:</strong> ${mensagem}</p>`; // exibe a mensagem enviada pelo usuário

                  if (step === 0) {
                      nome = mensagem; // Opções de resposta
                      chatMessages.innerHTML += `<p><strong>Bot:</strong> Muito prazer ${nome}, como eu posso ajudar voce hoje?</p>`;
                      chatMessages.innerHTML += `<p><strong>Bot:</strong> <br>[1] - Como entrar em contato com a Rebeca Costa? <br>[2] - Onde posso ver os projetos da Rebeca Costa? <br>[3] - Qual o Linkedin da Rebeca Costa? <br>[4] - Encerrar conversa</p>`;
                      step++; // Indica que a conversa avançou
                  } else {
                      processarResposta(mensagem); // lida com a resposta
                  }

                  inputMessage.value = '';
              }
          }

          function processarResposta(resposta) {
              const chatMessages = document.getElementById('chatMessages');

              switch (resposta) { // 'switch' - lida com diferentes respostas
                // '1, 2, 3, 4' respostas específicas para cada caso
                  case '1':
                      chatMessages.innerHTML += `<p><strong>Bot:</strong> ${nome}, voce pode entrar em contato com ela atraves do <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rebecacostadesa@gmail.com" target="_blank">email</a></p>`;
                      chatMessages.innerHTML += `<p><strong>Bot:</strong> ${nome}, posso ajudar em mais alguma coisa?<br>[1] - Como entrar em contato com a Rebeca Costa? <br>[2] - Onde posso ver os projetos da Rebeca Costa? <br>[3] - Qual o Linkedin da Rebeca Costa? <br>[4] - Encerrar conversa</p>`;
                      break; // fim de cada caso
                  case '2':
                      chatMessages.innerHTML += `<p><strong>Bot:</strong> ${nome}, voce pode ver os projetos dela ao final desta pagina ou acessando o <a href="https://github.com/Rebeca-Costa" target="_blank">github</a></p>`;
                      chatMessages.innerHTML += `<p><strong>Bot:</strong> ${nome}, posso ajudar em mais alguma coisa?<br>[1] - Como entrar em contato com a Rebeca Costa? <br>[2] - Onde posso ver os projetos da Rebeca Costa? <br>[3] - Qual o Linkedin da Rebeca Costa? <br>[4] - Encerrar conversa</p>`;
                      break;
                  case '3':
                      chatMessages.innerHTML += `<p><strong>Bot:</strong> ${nome}, o linkedin dela e <a href="https://www.linkedin.com/in/rebeca-costa-48ab2921a/" target="_blank">este</a></p>`;
                      chatMessages.innerHTML += `<p><strong>Bot:</strong> ${nome}, posso ajudar em mais alguma coisa?<br>[1] - Como entrar em contato com a Rebeca Costa? <br>[2] - Onde posso ver os projetos da Rebeca Costa? <br>[3] - Qual o Linkedin da Rebeca Costa? <br>[4] - Encerrar conversa</p>`;
                      break;
                  case '4':
                      chatMessages.innerHTML += `<p><strong>Bot:</strong> Tudo bem, espero que eu tenha te ajudado. Ate a proxima</p>`;
                      break;
                  default:
                      chatMessages.innerHTML += `<p><strong>Bot:</strong> Digite apenas as opcoes 1, 2, 3 ou 4</p>`;
              }
          }