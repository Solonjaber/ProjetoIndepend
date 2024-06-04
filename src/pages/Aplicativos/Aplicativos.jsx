// https://react-icons.github.io/react-icons/
import React from "react";
import "./Aplicativos.css";
import { BsBellFill, BsChatSquareDots, BsCalendar } from "react-icons/bs";
import { CgClipboard } from "react-icons/cg";

const Aplicativos = () => {
  return (
    <div>
      <div className="intro">
        <div className="itemapp1">
          <div className="definicao">
            <h1>Aplicativos</h1>
            <br />
            <p>
              Bem vindo a nossa página de aplicativos! Aqui você visualiza as
              principais ferramentas do nosso sistema. Se sinta a vontade para
              explorar cada um deles.
            </p>
          </div>
        </div>
        <div className="itemapp2">
          <img
            src={require("../../imagem/undraw_progressive_app_m-9-ms.svg")}
            alt="Aplicativos"
          />
        </div>
      </div>

      <nav className="aplication">
        <div className="conteudo">
          <div className="container">
            <label>Notificar</label>
            <a className="notificaapp" href="#notificacaoapp">
              {/* <i className="bx bxs-bell-ring icon"></i> */}
              <BsBellFill className="icon" />
            </a>
            <p>Enviar notificação sobre um OKR específico</p>
          </div>

          <div className="container">
            <label>Relatório</label>
            <a href="#">
              {/* <i className="bx bx-spreadsheet icon"></i> */}
              <CgClipboard className="icon" />
            </a>
            <p>Verificar relátorio das pautas de reuniões</p>
          </div>

          <div className="container">
            <label>Debate</label>
            <a href="#">
              {/* <i className="bx bxs-chat icon"></i> */}
              <BsChatSquareDots className="icon" />
            </a>
            <p>Discutir os OKR's</p>
          </div>

          <div className="container">
            <label>Feedback</label>
            <a href="#">
              {/* <i className="bx bxs-calendar icon"></i> */}
              <BsCalendar className="icon" />
            </a>
            <p>
              Escrever uma cobrança, elogio ou atenção relacionadas aos OKR's
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Aplicativos;
