# Desafio Cypress
Automação web utilizando Node.js e Cypress

## Relatório de Bugs — Sistema de Aluguel de Carro

---

## BUG-001 — Input de "número de dias" muito grande quebra o layout do modal
- **Severidade:** Alta  
- **Status:** Aberto  
- **Área:** UI/Frontend  

**Pré-condições:**  
- Usuário autenticado (admin.com / 123456)  
- Pelo menos um veículo com status "disponível"  

**Passos para reprodução:**  
1. Acesse a Dashboard e clique em "Alugar" em um veículo disponível  
2. No modal de aluguel, insira um número de dias extremamente grande (ex.: 999999999)  

**Resultado esperado:**  
O input deve limitar ou formatar o valor, mantendo o layout do modal intacto.  

**Resultado atual:**  
O modal se quebra; campos e botões "vazam" para fora do contêiner.    

---

## BUG-002 — Sistema permite aluguel com número de dias absurdamente grande
- **Severidade:** Crítica  
- **Status:** Aberto  
- **Área:** Regra de Negócio/Backend  

**Pré-condições:**  
- Usuário autenticado  
- Veículo com status "disponível"  

**Passos para reprodução:**  
1. Abrir o modal de aluguel  
2. Preencher "dias" com valor muito alto (ex.: 1000000)  
3. Confirmar o aluguel e finalizar o pagamento  

**Resultado esperado:**  
O sistema deve validar um limite razoável de dias e rejeitar valores fora da política.  

**Resultado atual:**  
O aluguel é concluído normalmente, gerando receita e ocupando o veículo.  

---

## BUG-003 — Cupom fixo de R$50 aplicado incorretamente
- **Severidade:** Crítica  
- **Status:** Aberto  
- **Área:** Checkout/Cálculo  

**Pré-condições:**  
- Veículo com diária R$100  
- Aluguel de 2 dias (subtotal R$200)  
- Cupom "50" (desconto fixo de R$50)  

**Passos para reprodução:**  
1. Ir ao pagamento com subtotal R$200  
2. Aplicar cupom "50"  

**Resultado esperado:**  
Total = Subtotal - 50 = R$150  

**Resultado atual:**  
Total exibido como R$50.  

---

## BUG-004 — Cupom aplicado sobre a diária e não sobre o subtotal
- **Severidade:** Alta  
- **Status:** Aberto  
- **Área:** Checkout/Cálculo  

**Pré-condições:**  
- Veículo com diária R$200  
- Aluguel de 2 dias (subtotal R$400)  
- Cupom fixo R$50  

**Passos para reprodução:**  
1. Ir ao pagamento com subtotal R$400  
2. Aplicar cupom R$50  

**Resultado esperado:**  
Total = 2×200 - 50 = R$350  

**Resultado atual:**  
Desconto aplicado apenas sobre a diária (R$200 - 50), ignorando multiplicador de dias.  

**Sugestões:**  
Corrigir base de cálculo para usar subtotal antes de impostos/taxas; incluir testes automatizados.

---

## BUG-005 — Dashboard não atualiza "Receita total" após aluguéis
- **Severidade:** Alta  
- **Status:** Aberto  
- **Área:** Dashboard/Métricas  

**Pré-condições:**  
- Histórico de aluguéis concluídos no período  

**Passos para reprodução:**  
1. Observar valor de "Receita total"  
2. Concluir um novo aluguel  
3. Voltar à Dashboard  

**Resultado esperado:**  
O valor deve refletir o novo aluguel.  

**Resultado atual:**  
O valor permanece inalterado.  

---

## BUG-006 — Contador "Veículos alugados" não incrementa
- **Severidade:** Alta  
- **Status:** Aberto  
- **Área:** Dashboard/Métricas  

**Pré-condições:**  
- Múltiplos aluguéis finalizados  

**Passos para reprodução:**  
1. Realizar vários aluguéis  
2. Observar contador "Veículos alugados"  

**Resultado esperado:**  
O contador deve representar o total atual de veículos alugados.  

**Resultado atual:**  
Valor permanece em 1 mesmo após múltiplos aluguéis.  


---

## BUG-007 — Cancelamento do último aluguel torna todos os veículos indisponíveis
- **Severidade:** Crítica  
- **Status:** Aberto  
- **Área:** Fluxo de Aluguel/Disponibilidade  

**Pré-condições:**  
- Apenas 1 veículo disponível  

**Passos para reprodução:**  
1. Iniciar o aluguel do último veículo  
2. Cancelar antes de finalizar o pagamento  

**Resultado esperado:**  
O veículo retorna ao status "disponível" e os demais não são afetados.  

**Resultado atual:**  
Todos os veículos ficam "indisponíveis", travando o sistema.  

---

## BUG-008 — Veículo muda para "alugado" antes da conclusão do pagamento
- **Severidade:** Alta  
- **Status:** Aberto  
- **Área:** Fluxo de Aluguel/Status  

**Pré-condições:**  
- Veículo disponível para aluguel  

**Passos para reprodução:**  
1. Selecionar veículo disponível  
2. Informar número de dias e confirmar antes do pagamento  

**Resultado esperado:**  
Status muda para "alugado" apenas após confirmação do pagamento.  

**Resultado atual:**  
Status muda imediatamente após confirmar os dias, antes do pagamento.  
