import { build as buildEnvironment } from './src/services/environment.js';
import app from './src/app.js';

const port = process.env.PORT || 80;

buildEnvironment().then(() => app.listen(port, () => console.log(`Listening on port ${port}`)));