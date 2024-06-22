import { Link } from "react-router-dom";
import ButtonCta from "../../components/Button";
import { Alert } from "@mui/material";

export default function PageNotFound() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>404 - Page Not Found</h1>
      <Alert variant="filled" severity="error" style={{ margin: "30px 0" }}>
        A pagina que você está tentando acessar não existe :(
      </Alert>

      <Link to="/home">
        <ButtonCta title="Voltar para home" />
      </Link>
    </div>
  );
}
