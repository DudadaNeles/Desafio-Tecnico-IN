const booksByCategory = [
    {
    category: "Riqueza",
    books: [
    {
    title: "Os segredos da mente milionária",
    author: "T. Harv Eker",
    },
    {
    title: "O homem mais rico da Babilônia",
    author: "George S. Clason",
    },
    {
    title: "Pai rico, pai pobre",
    author: "Robert T. Kiyosaki e Sharon L. Lechter",
    },
    ],
    },
    {
    category: "Inteligência Emocional",
    books: [
    {
    title: "Você é Insubstituível",
    author: "Augusto Cury",
    },
    {
    title: "Ansiedade – Como enfrentar o mal do século",
    author: "Augusto Cury",
    
    },
    {
    title: "Os 7 hábitos das pessoas altamente eficazes",
    author: "Stephen R. Covey"
    }
    ]
    }
];

function mostraLivrosAutor (autor){
    var l = [];
    for (let i = 0; i < booksByCategory.length; i++){
        for (let j = 0; j < booksByCategory[i].books.length; j++){
            if (booksByCategory[i].books[j].author == autor) l.push(booksByCategory[i].books[j].title);
        }
    }
    return l;
}

var num_cat = booksByCategory.length;
var num_livros_por_cat = [];
var l_autores = [];

for (let i = 0; i < booksByCategory.length; i++){
    let l = [];
    l.push(booksByCategory[i].category);
    l.push(booksByCategory[i].books.length);
    num_livros_por_cat.push(l);
    for (let j = 0; j < booksByCategory[i].books.length; j++){
        if (!l_autores.includes(booksByCategory[i].books[j].author))l_autores.push(booksByCategory[i].books[j].author);
    }
}



console.log(`Numero de categorias = ${num_cat}`);
console.log(`Numero de livros em cada categoria = ${num_livros_por_cat}`);
console.log(`Numero de autores = ${l_autores.length}`);
console.log(`Livros do Augusto Cury = ${mostraLivrosAutor("Augusto Cury")}`);