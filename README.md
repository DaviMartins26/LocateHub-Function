# ⚡ LocateHub - Serverless Pricing Engine (Azure Function)

Este módulo é o "cérebro" de regras de negócio do ecossistema LocateHub. Ele utiliza uma **Azure Function (Node.js)** para realizar cálculos de orçamento de forma isolada e escalável.

## 🎯 Funcionalidades
* **Cálculo de Aluguel**: Recebe o preço diário e a quantidade de dias para retornar o valor total.
* **Enriquecimento de Dados**: Aplica logicamente descontos de 10% para locações superiores a 7 dias.
* **Gatilho HTTP**: Exposta via endpoint POST para fácil integração com o BFF.

## 🛠️ Tecnologias
* **Node.js**: Runtime de execução.
* **Azure Functions Core Tools v4**: Framework para desenvolvimento serverless.
* **JavaScript**: Lógica de programação.

## ⚙️ Regra de Negócio
A função aplica a seguinte lógica matemática:
1. `Total = Preço/Dia * Dias`
2. Se `Dias > 7`, então `Total = Total * 0.9` (10% de desconto).

## 🔧 Como Rodar Localmente
1. Certifique-se de ter o **Azure Functions Core Tools** instalado.
2. Na pasta raiz, execute:
   ```bash
   func start
3. O endpoint estará disponível em: http://localhost:7071/api/CalcularAluguel

## 👥 Desenvolvedores
* **Davi Martins**
* **Joshua Mendes**