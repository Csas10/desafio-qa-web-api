const { Given, When, Then, After } = require('@badeball/cypress-cucumber-preprocessor');

let account;
let accountCreated = false;
let unitPrice;
let quantity;
const amount = (text) => Number(text.replace(/[^0-9.]/g, ''));
const parseBody = (body) => typeof body === 'string' ? JSON.parse(body) : body;

When('realiza o cadastro de um novo usuário válido', () => {
  accountCreated = false;
  account = {
    name: 'QA Final',
    email: `qa-${crypto.randomUUID()}@example.com`,
    password: `QaOnly-${crypto.randomUUID()}`,
    title: 'Mr', birth_date: '10', birth_month: '5', birth_year: '1990',
    firstname: 'QA', lastname: 'Final', company: 'Teste Academico',
    address1: 'Rua Sintetica 100', address2: 'Sala QA', country: 'Canada',
    zipcode: 'A1A1A1', state: 'Ontario', city: 'Toronto', mobile_number: '5550100000'
  };
  cy.get('a[href="/login"]').click();
  cy.get('[data-qa="signup-name"]').type(account.name);
  cy.get('[data-qa="signup-email"]').type(account.email, { log: false });
  cy.get('[data-qa="signup-button"]').click();
  cy.get('#id_gender1').check();
  cy.get('[data-qa="password"]').type(account.password, { log: false });
  cy.get('[data-qa="days"]').select(account.birth_date);
  cy.get('[data-qa="months"]').select(account.birth_month);
  cy.get('[data-qa="years"]').select(account.birth_year);
  const fields = { first_name: account.firstname, last_name: account.lastname,
    company: account.company, address: account.address1, address2: account.address2,
    state: account.state, city: account.city, zipcode: account.zipcode,
    mobile_number: account.mobile_number };
  for (const [name, value] of Object.entries(fields)) cy.get(`[data-qa="${name}"]`).type(value);
  cy.get('[data-qa="country"]').select(account.country);
  cy.get('[data-qa="create-account"]').click();
  cy.get('[data-qa="account-created"]').should('be.visible').then(() => { accountCreated = true; });
  cy.screenshot('02-conta-criada', { capture: 'viewport' });
  cy.get('[data-qa="continue-button"]').click();
  cy.contains('Logged in as').should('contain.text', account.name);
  // Exercita login em sessão deslogada após comprovar cadastro pela interface.
  cy.get('a[href="/logout"]').click();
  cy.location('pathname').should('eq', '/login');
});

Given('que o usuário acessa a página inicial do Automation Exercise', () => {
  cy.visit('/');
  cy.get('#slider').should('be.visible');
  cy.get('a[href="/login"]').should('be.visible');
  cy.screenshot('01-home', { capture: 'viewport' });
});

When('realiza o login com credenciais válidas', () => {
  cy.get('a[href="/login"]').click();
  cy.get('[data-qa="login-email"]').type(account.email, { log: false });
  cy.get('[data-qa="login-password"]').type(account.password, { log: false });
  cy.get('[data-qa="login-button"]').click();
  cy.contains('Logged in as').should('contain.text', account.name);
  cy.visit('/view_cart');
  cy.contains('Cart is empty!').should('be.visible');
});

When('adiciona o produto {string} ao carrinho com quantidade {int}', (name, qty) => {
  quantity = qty;
  cy.visit('/products');
  cy.get('#search_product').type(name);
  cy.get('#submit_search').click();
  cy.contains('.product-image-wrapper', name).first().within(() => {
    cy.contains('View Product').click();
  });
  cy.get('.product-information h2').should('have.text', name);
  cy.get('.product-information > span > span').invoke('text').then((text) => {
    unitPrice = amount(text);
    expect(unitPrice).to.be.greaterThan(0);
  });
  cy.get('#quantity').clear().type(String(qty));
  cy.contains('.product-information button', 'Add to cart').click();
  cy.get('#cartModal').should('be.visible').within(() => cy.contains('View Cart').click());
});

Then('o carrinho deve apresentar produto quantidade e subtotal corretos', () => {
  cy.get('#cart_info_table tbody tr').should('have.length', 1);
  cy.get('#cart_info_table tbody tr').first().within(() => {
    cy.get('.cart_description').should('contain.text', 'Blue Top');
    cy.get('.cart_quantity button').should('have.text', String(quantity));
    cy.get('.cart_price').invoke('text').then((text) => expect(amount(text)).to.eq(unitPrice));
    cy.get('.cart_total_price').invoke('text').then((text) => expect(amount(text)).to.eq(unitPrice * quantity));
  });
  cy.screenshot('03-carrinho', { capture: 'viewport' });
});

When('prossegue para o checkout confirmando o endereço', () => {
  cy.contains('Proceed To Checkout').click();
  cy.location('pathname').should('eq', '/checkout');
  for (const selector of ['#address_delivery', '#address_invoice']) {
    cy.get(selector).should('contain.text', account.address1)
      .and('contain.text', account.city).and('contain.text', account.zipcode)
      .and('contain.text', account.country);
  }
  cy.get('#cart_info').should('contain.text', 'Blue Top');
  cy.get('.cart_total_price').last().invoke('text')
    .then((text) => expect(amount(text)).to.eq(unitPrice * quantity));
  cy.get('textarea[name="message"]').type('Pedido de pratica academica. Dados sinteticos.');
  cy.screenshot('04-checkout', { capture: 'viewport' });
  cy.contains('Place Order').click();
});

When('preenche os dados de pagamento fictícios', () => {
  cy.location('pathname').should('eq', '/payment');
  // Números demonstrativos: não representam cartão real nem transação financeira.
  cy.get('[data-qa="name-on-card"]').type('QA FINAL');
  cy.get('[data-qa="card-number"]').type('4242424242424242', { log: false });
  cy.get('[data-qa="cvc"]').type('123', { log: false });
  cy.get('[data-qa="expiry-month"]').type('12');
  cy.get('[data-qa="expiry-year"]').type('2030');
  cy.get('[data-qa="pay-button"]').click();
});

Then('o sistema deve exibir a confirmação {string}', (message) => {
  cy.get('[data-qa="order-placed"]').should('be.visible')
    .invoke('text').then((text) => expect(text.trim().toLowerCase()).to.eq(message.toLowerCase()));
  cy.contains('Congratulations! Your order has been confirmed!').should('be.visible');
  cy.screenshot('05-pedido-confirmado', { capture: 'viewport' });
});

After(() => {
  if (accountCreated) {
    // Exclui somente a fixture descartável criada por ESTA execução.
    cy.request({ method: 'DELETE', url: '/api/deleteAccount', form: true,
      body: { email: account.email, password: account.password }, log: false })
      .then((response) => {
        expect(response.status, 'HTTP de limpeza').to.eq(200);
        expect(parseBody(response.body).responseCode, 'fixture removida').to.eq(200);
      });
  }
});
