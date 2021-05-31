import { build as buildEnvironment } from './src/services/environment.js';
import app from './src/app.js';

// Criar ambiente, depois iniciar servidor Node
buildEnvironment().then(() => {
    // Buscar porta das variáveis de ambiente ou, por padrão, a 80
    const port = process.env.PORT || 80;
    // Iniciar servidor Node
    app.listen(port, () => console.log(`Listening on port ${port}`));
});