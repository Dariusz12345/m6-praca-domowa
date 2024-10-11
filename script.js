//W programowaniu obiektowym, this najczęściej odnosi się do obiektu, w którym funkcja jest zdefiniowana, co pozwala na dostęp do właściwości i metod tego obiektu.


const pies = {
    rasa: 'owczarek',
    wiek: 4,
    getRasa(){
        return this.rasa // przykład wykonania this
    }

}
console.log(pies.getRasa())




const ksiazka = {
    autor: 'Stephen King',
    getAutor() {
     return this.autor; // przykład wykonania this
    }
}

console.log(ksiazka.getAutor());



const osoba = {
    username: 'Maciej',
    showName(){
        return this.username; // przykład wykonania this
    }
}

console.log(osoba.showName())




const polkaNaksiazki = {
    authors: [],
    getAuthors(){
        return this.authors
    },
    addAuthor(newAuthor){
     this.authors.push(newAuthor)
    }
}

polkaNaksiazki.addAuthor('Dariusz')
console.log(polkaNaksiazki.getAuthors());

