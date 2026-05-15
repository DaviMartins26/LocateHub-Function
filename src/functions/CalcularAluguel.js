const { app } = require('@azure/functions');

app.http('CalcularAluguel', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        // Lendo os dados que o BFF vai enviar
        const data = await request.json();
        const { precoDia, dias } = data;

        // Regra de negócio isolada
        const total = precoDia * dias;
        const temDesconto = dias > 7;
        const valorFinal = temDesconto ? total * 0.9 : total;

        return { 
            jsonBody: { 
                valorFinal,
                mensagem: temDesconto ? "Desconto de 10% aplicado!" : "Preço padrão calculado."
            } 
        };
    }
});