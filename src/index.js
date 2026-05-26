const { app } = require('@azure/functions');

app.setup({
    enableHttpStream: true,
});

// deve fazer funcionar dnv
require('./functions/CalcularAluguel.js');