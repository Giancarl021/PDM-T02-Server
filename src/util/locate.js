import { homedir } from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

// Busca pasta atual do arquivo
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Localiza arquivo ou diretório a partir da raíz do projeto
export default function (pathToFile, useCWD = false) {
    // Verifica se caminho passado é vazio
    if (!pathToFile) throw new Error('Empty path');

    // Substitui ~ por home do usuário e normaliza a string para "/" no lugar de "\"
    const _path = pathToFile.replace('~', homedir()).replace(/\\/g, '/');

    // Se caminho for absoluto, retorne ele
    if (path.isAbsolute(_path)) return _path;

    return (
        // Precisa da localização do processo ? Se sim, retorna a junção da mesma com o caminho informado, senão, retorna a partir da raíz do projeto
        useCWD ? path.resolve(process.cwd(), _path) : path.resolve(__dirname, '..', '..', _path).replace(/\\/g, '/')
    );
};