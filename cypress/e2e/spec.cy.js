describe("Pizza Project Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("should navigate to the order page and find the form", () => {
    cy.contains("button", "ACIKTIM").click();
    cy.url().should("include", "/order");
    cy.get("form").should("be.visible");
  });

  it("should disable the checkout button with invalid inputs", () => {
    cy.contains("button", "ACIKTIM").click();

    //Boyut ve kalinlik bos oldugunda submit disabled
    cy.get('input[type="checkbox"][value="Sucuk"]').click();
    cy.get('input[type="checkbox"][value="Mantar"]').click();
    cy.get('input[type="checkbox"][value="Zeytin"]').click();
    cy.get('input[type="checkbox"][value="Domates"]').click();

    cy.contains("label", "İsim - Soyad:").next("input").type("aa");

    cy.get("button").contains("SİPARİŞ VER").should("be.disabled");
  });

  it("should submit the form with valid inputs and show success message", () => {
    cy.contains("button", "ACIKTIM").click();

    cy.get('input[type="radio"][value="s"]').click();
    cy.get("#pizza-hamur").select("standart");

    cy.get('input[type="checkbox"][value="Sucuk"]').click();
    cy.get('input[type="checkbox"][value="Mantar"]').click();
    cy.get('input[type="checkbox"][value="Zeytin"]').click();
    cy.get('input[type="checkbox"][value="Domates"]').click();
    cy.get('input[type="checkbox"][value="Sosis"]').click();

    cy.contains("label", "İsim - Soyad:").next("input").type("John Doe");
    cy.contains("label", "Siparis Notu")
      .next("p")
      .next("textarea")
      .type("Speed it up!");

    cy.get("button").contains("SİPARİŞ VER").click();
    
    cy.url().should("include", "/success");
    cy.contains("h2","TEBRIKLER!").should("be.visible");
    
  });
});
