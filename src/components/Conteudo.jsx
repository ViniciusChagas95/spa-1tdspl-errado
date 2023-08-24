import reactLogo from "../assets/img/react.svg"

export default function Conteudo(props) {

    let reactAlt = "React Logo";

    return (
      <>
        <section>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
              impedit odit, laboriosam rem soluta hic sapiente eius architecto, ad
              eveniet atque facere ullam, fugiat error. Quaerat voluptates
              officiis possimus molestiae?
            </p>
            <p>
              Minus ab molestias ratione numquam magnam velit corporis temporibus
              tenetur, neque atque pariatur doloremque laborum vitae voluptatum
              porro architecto. Amet obcaecati quisquam officiis inventore libero
              exercitationem reiciendis atque temporibus? Libero?
            </p>
            <img src={reactLogo} alt="{reactAlt}" />
            <img src={props.viteLogoProps} alt="{props.viteAltProps}" />
          </div>

        </section>
      </>
    );
  }
  