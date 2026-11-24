# language: pt
@WEB-CHK-03 @pedido
Funcionalidade: Realização de pedido no Automation Exercise
  O usuário deve conferir os itens e endereços antes do pagamento demonstrativo.

  Cenário: Realizar pedido completo com cadastro e pagamento demonstrativo
    Dado que o usuário acessa a página inicial do Automation Exercise
    Quando realiza o cadastro de um novo usuário válido
    E realiza o login com credenciais válidas
    E adiciona o produto "Blue Top" ao carrinho com quantidade 2
    Então o carrinho deve apresentar produto quantidade e subtotal corretos
    Quando prossegue para o checkout confirmando o endereço
    E preenche os dados de pagamento fictícios
    Então o sistema deve exibir a confirmação "Order Placed!"
