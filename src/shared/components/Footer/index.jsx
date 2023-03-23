import { Code } from "phosphor-react";
import { Container_Footer } from "./styled";

export const Footer = () => {
  return (
    <Container_Footer>
      <Code size={50} weight="duotone" />
      <span>
        Made with ♥️ and <b>React.js</b>.
      </span>
    </Container_Footer>
  );
};
