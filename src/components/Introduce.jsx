import React from "react";
import "./introduce.css";
import { useContext } from "react";
import { ContextLanguage } from "../context/LanguageContexts";
const Introduce = () => {
const{content}=useContext(ContextLanguage)
  return (
    <div className="introduce">
      <div className="introduce-section">
        <div className="introduce-name">
          <span className="introduce-line"></span>
          <span className="introduce-text">{content.name}</span>
        </div>
        <h1 className="introduce-title">
          {content.title}
        </h1>
        <p className="introduce-description">
          {content.description}
        </p>

        <div className="introduce-links">
          <a className="introduce-btn introduce-btn-primary" href="#">Hire me</a>
          <a className="introduce-btn" href="https://github.com/Burak-Alkan" target="blank">{content.github}</a>
          <a className="introduce-btn" href="https://www.linkedin.com/in/burak-alkan-62b2a5300/">{content.linkedin}</a>
        </div>
      </div>
      <div className="introduce-image">
        <img
          src="https://s3-alpha-sig.figma.com/img/76b0/6993/b04fd1fa29a883e2f4b8b8577a5c82eb?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QTelsWQE2xJeArmel9m7fDxPlbrToce5rgebsrLh4y2esqTR-y~kbBtfqpNY76Q5fyj1-~XSyUtT6FwPt0jrtb17EgjG5xVRLLAYN3etO7QL0pOOrVZHTjgeY~D7CDlV3aCzSLjV5P5xjuXBT7PTOidhgbrF073AzB6MfQYGHV34DsbqKO9HO2aabodN4hJG1xAxMtCoO0PPd7W6nTOQKS2lUylUz6CzcBuovlmEz08ERvErpCONiWSLDTgVAL0YyRWgYuk3TV4k58x5JftIH52FmYRi5DiFhodh5LU808-nHe3Uk1DfQ0u1pBf~8GAmCiABLmwhY~MepNQXk4hzlQ__"
          alt="Profile"
        />
      </div>
    </div>
  );
};

export default Introduce;
