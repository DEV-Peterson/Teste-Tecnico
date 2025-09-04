# Uso de IA

**Ferramenta utilizada**: ChatGPT (modelo GPT-5)

### Onde utilizei
- Estrutura inicial de pastas e organização do projeto.
- Código base da API (.NET minimal API).
- Código base do frontend com React + Redux Toolkit (RTK Query).
- Rascunho de README e deste arquivo.

### Como validei/adaptei
- Ajustei a tipagem (`DateOnly?`) e padrão camelCase nos retornos.
- Testei mentalmente o fluxo: filtro por nome, validação do campo obrigatório e adaptação do legado.
- Configurei CORS para compatibilidade com o Vite.

### O que descartei/modifiquei
- Não incluí banco de dados (desafio pede lista em memória).
- Usei minimal API em vez de controllers para manter simples.
- Preferi RTK Query ao invés de slices manuais para reduzir boilerplate.

### Riscos/limitações
- Porta do backend pode variar, exigindo ajuste manual no `.env.local` do frontend.
- Parser de datas do legado aceita múltiplos formatos, mas pode precisar de ajustes em cenários reais.
