/* ==========================================================
   CERTIFICATIONS
   ========================================================== */
.certs {
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 0;
  padding: var(--pad);
  background: var(--lime);
  border-top: var(--border);
}

.certs__list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.cert-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  min-height: 110px;
  padding: 16px;
  background: #EEEEEE;
  border: var(--border);
  box-shadow: var(--shadow);
  transition: transform .12s ease, box-shadow .12s ease;
}
.certs__list li:nth-child(2) .cert-card { background: #DDDDDD; }
.certs__list li:nth-child(3) .cert-card { background: #CCCCCC; }

.cert-card:hover {
  transform: translate(-2px, -2px);
  box-shadow: 7px 7px 0 var(--black);
}
.cert-card:active {
  transform: translate(3px, 3px);
  box-shadow: 2px 2px 0 var(--black);
}

.cert-card > i { font-size: 1.4rem; }
.cert-card h3  { font-size: 1rem; }
.cert-card span {
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
}

/* botão no fundo da coluna, largura total */
.certs__all {
  width: 100%;
  margin-top: auto;
  justify-content: space-between;
  text-align: left;
}