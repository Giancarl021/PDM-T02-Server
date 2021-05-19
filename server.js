import { build as buildEnvironment } from './src/services/environment.js';
import app from './src/app.js';

buildEnvironment().then(() => {
    const port = process.env.PORT || 80;
    app.listen(port, () => console.log(`Listening on port ${port}`));
});