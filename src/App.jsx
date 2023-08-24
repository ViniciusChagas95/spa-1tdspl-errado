import Cabecalho from "./components/Cabecalho";
import Conteudo from "./components/Conteudo";
import Rodape from "./components/Rodape";
import viteLogo from "./assets/vite.svg";

export default function App() {
  //Área declarativa
  // let nome = "João";
  let viteAlt = "Logo do Vite";

  return (
    <>
      {/* Vamos criar um cabeçalho com um header, um h1 com um título e uma lista ul com itens com links. */}
      <Cabecalho />

      {/* Vamos criar uma Seção com uma section, uma div com 2 parágrafos cada um com 3 linhas de lorem e depois dos parágrafos uma imagem. */}
      <Conteudo viteLogoProps={viteLogo} viteAltProps={viteAlt} />
      {/* Vamos criar um rodapé com uma div, uma lista ul e 3 itens com links para redes sociais, um parágrafo com o texto de direitos autorais e o código do símbolo de copyright. */}
      <Rodape />
    </>
  );
}
