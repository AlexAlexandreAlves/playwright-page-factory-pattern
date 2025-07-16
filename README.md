# Page Factory Pattern com Playwright

Este projeto é uma suíte de testes automatizados utilizando [Playwright](https://playwright.dev/) para validar fluxos de autenticação e cadastro em uma aplicação web. O projeto adota o padrão **Page Factory Pattern** para organizar e simplificar a criação e o gerenciamento dos objetos de página, tornando os testes mais legíveis, reutilizáveis e de fácil manutenção.

## Contexto

O objetivo deste repositório é demonstrar como estruturar testes automatizados de ponta a ponta (E2E) utilizando o padrão de projeto **Page Factory Pattern**. Esse padrão centraliza a criação dos objetos de página em uma única classe ou função "fábrica", facilitando a injeção de dependências e o reaproveitamento dos objetos de página nos testes.

## Sobre o Page Factory Pattern

O **Page Factory Pattern** é uma evolução do Page Object Model, onde a criação dos objetos de página é feita por meio de uma fábrica centralizada. Isso permite instanciar e gerenciar facilmente múltiplos objetos de página, além de facilitar a manutenção e a escalabilidade dos testes.

**Exemplo:**
```typescript
const factory = new PageFactory(page);
const loginPage = factory.getLoginPage();
await loginPage.login("email@teste.com", "senha");
```

## Estrutura do Projeto

- `ui/pages/`: Page Objects com os elementos e ações de cada página.
- `ui/factories/`: Fábricas responsáveis por criar e fornecer instâncias dos Page Objects.
- `tests/`: Arquivos de teste automatizados.
- `playwright.config.ts`: Configuração do Playwright (incluindo baseURL).

## Comandos Essenciais

- **Executar todos os testes:**
  ```
  npx playwright test
  ```

- **Executar testes em modo UI interativo:**
  ```
  npx playwright test --ui
  ```

- **Executar testes em um navegador específico:**
  ```
  npx playwright test --project=chromium
  ```

- **Executar um arquivo de teste específico:**
  ```
  npx playwright test tests/login.test.ts
  ```

- **Executar em modo debug:**
  ```
  npx playwright test --debug
  ```

- **Gerar testes automaticamente com Codegen:**
  ```
  npx playwright codegen
  ```

## Requisitos

- Node.js instalado
- Dependências instaladas com:
  ```
  npm install
  ```

## Observações

- O projeto utiliza `baseURL` configurado no `playwright.config.ts`, permitindo o uso de caminhos relativos nos testes.
- Como a aplicação de exemplo não possui banco de dados persistente, os dados criados existem apenas durante a sessão.