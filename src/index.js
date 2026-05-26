const { app } = require('@azure/functions');

app.setup({
    enableHttpStream: true,
});

// deve fazer funcionar
require('./CalcularAluguel.js');