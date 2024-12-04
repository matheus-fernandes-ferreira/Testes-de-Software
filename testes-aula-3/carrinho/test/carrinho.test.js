import Carrinho from '../carrinho'
import Item from '../item'

describe("Tastes de ocarrinho", () => {
    it("Deve inicializar vazio", () => {
        const carrinho = new Carrinho();

        expect(carrinho.subtotal).toBeNull()
    });
    it("Deve ter itens", () => {
        const item = new Item('Caderno', 4, 5)
        const item2 = new Item('Lapis', 2, 10)

        const carrinho = new Carrinho()
        carrinho.adiciona(item)
        carrinho.adiciona(item2)

        expect(typeof carrinho).toBe('object')  //verifica se o carrinho deixou de estar vazio retornando um objeto
        expect(carrinho.itens[0]).toBe(item)    //Verifica se os itens foram adicionados ao carrinho
        expect(carrinho.itens[1]).toBe(item2)
        expect(carrinho.itens).toContain(item)
    })
    it('Deve ter a propriedade total na inicializacao', () => {
        const carrinho = new Carrinho()
        expect(carrinho).toHaveProperty('itens')
    })
    it('Deve calcular o subtotal', () => {
        const item1 = new Item('Laranja', 3, 12)
        const item2 = new Item('Morango', 8, 8)

        const carrinho = new Carrinho()
        carrinho.adiciona(item1)
        carrinho.adiciona(item2)

        // const resultado = carrinho.calculaTotal()
        // expect(resultado).toBe(100)

        expect(carrinho.calculaTotal()).toBe(100)
        expect(carrinho.finalizaCompra().total).toBe(100)
    })
    it("Deve exibir erro se o carrinho estiver vazio", () => {
        const carrinho = new Carrinho()

        expect(carrinho).toBeEmpty()
        // expect(carrinho.finalizaCompra()).toThrow(Eror)


    })
})