const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const cursos = [
        {
            nome: 'Curso de Libras',
            preco: 49.90,
            descricao: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit sint ad vitae fugiat ducimus in tempore doloribus optio.',
            imagem: 'libras.jpg'
        },
        {
            nome: 'Reciclagem e Sustentabilidade',
            preco: 39.90,
            descricao: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit sint ad vitae fugiat ducimus in tempore doloribus optio.',
            imagem: 'reciclagem.jpg'
        },
        {
            nome: 'Direitos Humanos e Cidadania',
            preco: 39.90,
            descricao: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit sint ad vitae fugiat ducimus in tempore doloribus optio.',
            imagem: 'cidadania.jpg'
        },
        {
            nome: 'Desenvolvimento Urbano',
            preco: 44.90,
            descricao: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit sint ad vitae fugiat ducimus in tempore doloribus optio.',
            imagem: 'urbano.jpg'
        }
    ];
    
    res.render('index', { title: 'Impacta Sociedade', cursos });
});

app.use((req, res) => {
    res.status(404).render('404', { title: 'Página Não Encontrada' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));