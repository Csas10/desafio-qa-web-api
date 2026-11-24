# Casos manuais Web

21 casos completos, 7 suítes. Todos Not Run; nenhuma evidência manual alegada.

## Home

### WEB-HOM-01 — Carregar banner principal

Pré-condições: Navegador sem sessão.

1. Abrir a Home.
2. Conferir logo, menu e banner.

Esperado: Banner e navegação visíveis sem impedir uso da página.

Evidência a coletar: Print da Home com URL.

Status: Not Run.

### WEB-HOM-02 — Buscar produto a partir da Home

Pré-condições: Home aberta; produto Blue Top disponível.

1. Clicar Products no menu superior.
2. Buscar Blue Top em Search Product.
3. Conferir os resultados.

Esperado: Busca em Products retorna itens compatíveis. Não pressupõe campo de busca na Home.

Evidência a coletar: Print da navegação e resultados.

Status: Not Run.

### WEB-HOM-03 — Assinar newsletter

Pré-condições: Home aberta; email sintético exclusivo.

1. Rolar ao rodapé Subscription.
2. Informar email sintético válido.
3. Acionar assinatura.

Esperado: Mensagem confirma inscrição sem email real de terceiros.

Evidência a coletar: Print da confirmação.

Status: Not Run.

## Login

### WEB-LOG-01 — Autenticar credenciais válidas

Pré-condições: Conta sintética existente; sessão deslogada.

1. Abrir Signup / Login.
2. Informar credenciais da conta.
3. Clicar Login.

Esperado: Logged in as corresponde à conta e sessão está autenticada.

Evidência a coletar: Print da identificação sem senha.

Status: Not Run.

### WEB-LOG-02 — Rejeitar senha inválida

Pré-condições: Conta sintética existente; sessão deslogada.

1. Abrir login.
2. Informar email válido e senha incorreta.
3. Enviar formulário.

Esperado: Erro visível; nenhuma sessão autenticada é criada.

Evidência a coletar: Print do erro.

Status: Not Run.

### WEB-LOG-03 — Encerrar sessão

Pré-condições: Conta sintética autenticada.

1. Clicar Logout.
2. Conferir página e menu.

Esperado: Identificação autenticada desaparece e login volta a estar disponível.

Evidência a coletar: Print do estado deslogado.

Status: Not Run.

## Cadastro

### WEB-CAD-01 — Cadastrar novo usuário completo

Pré-condições: Sessão deslogada; email exclusivo e dados fictícios de conta/endereço.

1. Preencher New User Signup e avançar.
2. Informar todos os campos obrigatórios de conta/endereço.
3. Clicar Create Account e Continue.

Esperado: Conta criada com confirmação e identificação. Preservar para casos dependentes.

Evidência a coletar: Prints da confirmação e identificação sem senha.

Status: Not Run.

### WEB-CAD-02 — Rejeitar email existente

Pré-condições: Conta sintética existente; sessão deslogada.

1. Iniciar signup com o mesmo email.
2. Tentar avançar.

Esperado: Mensagem de duplicidade; não há segunda conta com o mesmo email.

Evidência a coletar: Print da duplicidade.

Status: Not Run.

### WEB-CAD-03 — Exigir campos obrigatórios

Pré-condições: Signup iniciado com email sintético exclusivo.

1. Na etapa de conta/endereço deixar um campo obrigatório vazio.
2. Tentar criar conta.
3. Registrar qual campo bloqueou a submissão.

Esperado: Validação indica o campo e não há confirmação de criação.

Evidência a coletar: Print da validação e nome do campo.

Status: Not Run.

## Página de Produto

### WEB-PRO-01 — Conferir detalhes do produto

Pré-condições: Products aberta.

1. Abrir View Product de um item.
2. Comparar nome e preço com listagem.
3. Conferir categoria, marca e disponibilidade.

Esperado: Detalhes correspondem ao item e campos essenciais estão visíveis.

Evidência a coletar: Print dos detalhes.

Status: Not Run.

### WEB-PRO-02 — Alterar quantidade e adicionar

Pré-condições: Carrinho vazio; detalhes do produto aberto e unitário anotado.

1. Definir Quantity como 2.
2. Adicionar ao carrinho.
3. Abrir View Cart.

Esperado: Quantidade 2 e subtotal igual a duas vezes o unitário.

Evidência a coletar: Prints da quantidade e linha do carrinho.

Status: Not Run.

### WEB-PRO-03 — Enviar avaliação do produto

Pré-condições: Produto aberto; nome/email sintéticos.

1. Preencher Write Your Review.
2. Informar nome, email e texto sintéticos.
3. Enviar avaliação.

Esperado: Mensagem de agradecimento confirma envio demonstrativo.

Evidência a coletar: Print da confirmação da review.

Status: Not Run.

## Carrinho

### WEB-CAR-01 — Adicionar produto

Pré-condições: Carrinho vazio.

1. Adicionar item pela listagem.
2. Abrir Cart.

Esperado: Item correto, unitário e quantidade 1 no carrinho.

Evidência a coletar: Print da linha incluída.

Status: Not Run.

### WEB-CAR-02 — Remover item

Pré-condições: Carrinho com exatamente um item.

1. Acionar remoção na linha do produto.
2. Aguardar atualização.

Esperado: Item removido; Cart is empty exibido.

Evidência a coletar: Prints antes/depois da remoção.

Status: Not Run.

### WEB-CAR-03 — Validar cálculo de valores

Pré-condições: Carrinho com preços conhecidos e quantidade maior que 1 em algum item.

1. Anotar unitários e quantidades.
2. Calcular subtotais e soma.
3. Comparar linhas e resumo do checkout quando autenticado.

Esperado: Cada subtotal é unitário vezes quantidade; total não inclui itens excluídos.

Evidência a coletar: Print do carrinho e cálculo em texto.

Status: Not Run.

## Checkout

### WEB-CHK-01 — Exigir autenticação

Pré-condições: Deslogado; carrinho com produto.

1. Abrir Cart.
2. Clicar Proceed To Checkout.

Esperado: Solicita login/cadastro e não permite concluir deslogado.

Evidência a coletar: Print do bloqueio/modal.

Status: Not Run.

### WEB-CHK-02 — Validar endereço de entrega

Pré-condições: Conta sintética autenticada, endereço conhecido e carrinho com produto.

1. Prosseguir ao checkout.
2. Comparar entrega/cobrança com a conta.
3. Conferir itens, quantidade e total.

Esperado: Endereços e resumo correspondem à execução.

Evidência a coletar: Print do checkout com dados sintéticos.

Status: Not Run.

### WEB-CHK-03 — Confirmar pedido autenticado

Pré-condições: Conta sintética autenticada, carrinho validado e dados fictícios de pagamento.

1. Conferir endereços e resumo.
2. Informar comentário e clicar Place Order.
3. Preencher pagamento demonstrativo.
4. Acionar Pay and Confirm Order.

Esperado: Order Placed e confirmação visíveis. Nenhum cartão real utilizado.

Evidência a coletar: Prints do carrinho, checkout e confirmação.

Status: Not Run.

## Pagamento e Contato

### WEB-PAG-01 — Finalizar com dados demonstrativos aceitos

Pré-condições: Outro pedido sintético pronto para pagamento; dados no formato aceito pelo site.

1. Preencher os campos de pagamento fictício.
2. Confirmar uma única vez.
3. Conferir a mensagem final.

Esperado: Pedido de prática confirmado, sem interpretar isso como validação bancária.

Evidência a coletar: Print da confirmação sem dados financeiros reais.

Status: Not Run.

### WEB-PAG-02 — Baixar fatura

Pré-condições: Pedido confirmado com Download Invoice disponível.

1. Clicar Download Invoice.
2. Verificar arquivo salvo.
3. Abrir e comparar itens, quantidade e valores ao pedido.

Esperado: Fatura real baixada e coerente. Não exigir PDF se o site servir outro formato.

Evidência a coletar: Arquivo baixado e conferência do conteúdo.

Status: Not Run.

### WEB-CON-01 — Enviar Contact Us

Pré-condições: Nome/email sintéticos e arquivo sem dados pessoais.

1. Abrir Contact Us.
2. Preencher dados sintéticos e mensagem.
3. Anexar arquivo de teste se necessário.
4. Enviar e confirmar o diálogo.

Esperado: Mensagem confirma envio e permite voltar à Home.

Evidência a coletar: Print da confirmação do contato.

Status: Not Run.
