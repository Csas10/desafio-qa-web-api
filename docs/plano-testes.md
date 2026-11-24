# Plano de testes da atividade final

## Objetivo e escopo

Verificar o fluxo de compra no Automation Exercise e os contratos das APIs de produto,
usuário e autenticação no DummyJSON. O monorepo contém duas aplicações independentes,
sem dependências instaladas na raiz e sem alterar o catálogo iTech.

São 21 casos manuais em 7 suítes: Home, Login, Cadastro, Página de Produto, Carrinho,
Checkout e Pagamento e Contato. A busca iniciada na Home usa o link Products e o campo
de busca dessa página: não pressupõe uma barra de busca que não existe na Home.

Dados pessoais, endereços e pagamento são exclusivamente fictícios. A automação não
realiza compra financeira nem usa cartão real. Não estão incluídos carga, stress,
integração de produção, IA, implantação ou novas funcionalidades dos sites testados.

## Preparação

Registrar SO, navegador/versão, data/hora/fuso e identificador de execução. Usar conta
sintética exclusiva, carrinho inicialmente vazio, preço unitário observado e quantidade
definida. Para casos que exigem conta existente, criar uma conta de teste antes da rodada.
Não reutilizar a sessão de um caso negativo como pré-condição de um caso positivo.

## Plano ponta a ponta no Testomat

Nome: Pedido de usuário autenticado.

1. WEB-CAD-01: cadastrar conta sintética pela interface.
2. WEB-LOG-03: deslogar a conta recém-criada.
3. WEB-LOG-01: autenticar a conta.
4. WEB-PRO-01: conferir o produto escolhido.
5. WEB-PRO-02: alterar quantidade para 2 e adicionar ao carrinho.
6. WEB-CAR-03: conferir unitário, quantidade, subtotal e soma.
7. WEB-CHK-02: conferir endereços e resumo.
8. WEB-CHK-03: concluir pedido com pagamento demonstrativo.
9. WEB-PAG-02: baixar e conferir a fatura.

Esse plano seleciona casos dentre os 21. Executar também uma rodada manual completa com
os 21 casos para cobrir negativos, Home e Contato, preparando pré-condições por caso.
WEB-PAG-01 é uma variação de pagamento em outro pedido sintético, não deve tentar pagar
novamente um pedido já finalizado. O E2E automatizado cobre WEB-CHK-03 e as verificações
intermediárias, cadastro e login pela interface. Apenas a limpeza da conta usa API.

## Execução manual e evidências

Para cada passo, registrar esperado e observado e capturar o estado relevante antes de
marcar Passed. Nome sugerido: run-id/WEB-CHK-03/03-confirmacao.png. Anexar evidência no caso
da Manual Run correspondente. Nunca usar screenshot de outra execução como comprovação.

Estados: Not Run, Passed, Failed ou Blocked. Falha exige esperado, observado, passos,
severidade, ambiente e evidência. Indisponibilidade ou falta de acesso deve ser Blocked,
não Passed. Rerun é uma nova tentativa identificada e não apaga falhas anteriores.

## Critérios de aceite

- 7 suítes, cada uma com pelo menos 3 casos detalhados.
- Uma rodada manual completa com evidências reais e falhas/bloqueios preservados.
- Fluxo Cypress/Cucumber executado e confirmação do pedido conferida.
- Newman executado, validando status, campos/tipos e tempo <2000 ms por request.
- Testomat compartilhado e acesso de correção verificado.
- Código com READMEs acessíveis no GitHub e vídeo de 3 a 5 minutos com execução real.

Um teste que recebe HTTP 200 em 2500 ms falha no requisito de tempo. Não elevar o limite
nem remover a asserção para aprovar. A latência de uma chamada não prova desempenho
estatístico ou disponibilidade do serviço. O status de entrega deve diferenciar artefatos
produzidos, execução tentada e execução aprovada.

## Riscos e limpeza

Sites de prática podem variar em dados, anúncios, consentimentos e disponibilidade.
Se houver proteção/CAPTCHA, não contornar: registrar bloqueio. Não usar force-click
nem silenciar globalmente erros para ocultar falhas. Excluir somente fixtures próprias
descartáveis; a automação faz uma tentativa de limpeza após o cenário. Revisar artefatos
antes de compartilhamento e não publicar tokens ou credenciais privadas.
