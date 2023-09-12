import { ListaProdutos } from "../components/ListaProdutos";

export default function Produtos() {

  return (
    <div>
        <h1>Produtos de INFORMÁTICA - FIPAPI</h1>
        <p>Os Melhores Produtos do Mercado</p>
        
        <table style={{borderCollapse:"collapse" , border:"2px solid #ffffff"}}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NOME</th>
                    <th>DESCRIÇÃO</th>
                    <th>PREÇO</th>
                </tr>
            </thead>

            <tbody>
                {ListaProdutos.map((produto,indice)=>(

                      <tr key={indice}>
                        <td>{produto.id}</td>
                        <td>{produto.nome}</td>
                        <td>{produto.desc}</td>
                        <td>{produto.preco}</td>
                      </tr>

                ))}
            </tbody>

            <tfoot>
                <tr>
                    <td colSpan={3}>PRODUTOS</td>
                </tr>
            </tfoot>
        </table>
        


    </div>
  )
}
