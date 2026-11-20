<main>

  <!-- ============ HERO ============ -->
  <section class="hero" aria-labelledby="hero-title">

    <div class="hero__left">
      <span class="tag">Hey, I'm Germano 👋</span>

      <h1 id="hero-title">Software<br>Developer</h1>

      <p class="hero__text">
        Estudante de Engenharia Informática em Luanda. Construo aplicações web
        e transformo ideias em produtos com código limpo e eficiente.
      </p>

      <div class="hero__actions">
        <a href="#projects" class="btn btn--lime">
          View my work <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
        </a>
        <!-- TODO: confirma o nome do teu PDF em assets/ (minúsculas, sem espaços) -->
        <a href="assets/cv-germano.pdf" class="btn btn--white" download>
          Download resume <i class="fa-solid fa-arrow-down" aria-hidden="true"></i>
        </a>
      </div>

      <div class="hero__social">
        <p class="hero__social-label">Connect with me</p>
        <ul>
          <li><a class="icon-btn" href="https://github.com/O-TEU-USER" target="_blank" rel="noopener" aria-label="GitHub"><i class="fa-brands fa-github" aria-hidden="true"></i></a></li>
          <li><a class="icon-btn" href="https://www.linkedin.com/in/O-TEU-PERFIL" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in" aria-hidden="true"></i></a></li>
          <li><a class="icon-btn" href="mailto:o-teu-email@exemplo.com" aria-label="Email"><i class="fa-solid fa-envelope" aria-hidden="true"></i></a></li>
        </ul>
      </div>
    </div>

    <div class="hero__right">
      <div class="photo">
        <!-- TODO: troca por assets/foto.jpg (minúsculas!). Enquanto não tens, usa o placeholder. -->
        <img src="https://placehold.co/400x500/png?text=Foto" alt="Retrato de Germano Mualevangue" width="400" height="500">
      </div>

      <div class="code-card" aria-label="Resumo em formato de código">
<pre><code><span class="c-key">const</span> <span class="c-var">developer</span> = {
  <span class="c-prop">code</span>: <span class="c-str">'JavaScript'</span>,
  <span class="c-prop">build</span>: <span class="c-str">'Web apps'</span>,
  <span class="c-prop">deploy</span>: <span class="c-str">'GitHub Pages'</span>,
  <span class="c-prop">passion</span>: <span class="c-str">'Solving problems'</span>
};</code></pre>
      </div>
    </div>

  </section>

</main>



/* ==========================================================
   10. HERO
   ========================================================== */
.hero {
  display: grid;
  grid-template-columns: 1fr;          /* mobile: 1 coluna */
}

/* ---------- Coluna esquerda: papel quadriculado ---------- */
.hero__left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: var(--pad);
  background-color: var(--white);
  background-image:
    linear-gradient(rgba(0,0,0,.12) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,0,0,.12) 1px, transparent 1px);
  background-size: 24px 24px;
}

.hero__text {
  max-width: 34ch;
  font-size: 0.9rem;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.hero__social-label {
  margin-bottom: 8px;
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
}
.hero__social ul {
  display: flex;
  gap: 12px;
}

/* ---------- Coluna direita: rosa + foto ---------- */
.hero__right {
  position: relative;
  display: grid;
  place-items: center;
  padding: clamp(32px, 6vw, 64px) var(--pad);
  background: var(--pink);
  border-top: var(--border);           /* mobile: separa das de cima */
}

.photo {
  position: relative;
  width: min(100%, 320px);
  aspect-ratio: 4 / 5;
  margin-bottom: 80px;                 /* espaço para o cartão sobreposto */
  background: var(--black);
  border: var(--border);
  box-shadow: 8px 8px 0 var(--black);
}
/* moldura verde-lima desfasada atrás da foto */
.photo::before {
  content: "";
  position: absolute;
  inset: -16px 16px 16px -16px;        /* sobe e vai para a esquerda... */
  background: var(--lime);
  border: var(--border);
  z-index: -1;
}
.photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* ---------- Cartão de código ---------- */
.code-card {
  position: absolute;
  right: clamp(16px, 8%, 48px);
  bottom: clamp(24px, 6%, 48px);
  padding: 14px 18px;
  background: var(--purple);
  color: var(--white);
  border: var(--border);
  box-shadow: var(--shadow);
  font-size: 0.7rem;
  line-height: 1.7;
}
.code-card pre {
  margin: 0;
  font-family: var(--font-body);
  white-space: pre;
}
.c-key  { color: #FF9AB5; }
.c-var  { color: #C4F04D; }
.c-prop { color: #FF9AB5; }
.c-str  { color: #E8FFB0; }

/* ---------- Desktop (>= 768px): 2 colunas ---------- */
@media (min-width: 768px) {
  .hero { grid-template-columns: 1fr 1fr; }
  .hero__right { border-top: 0; border-left: var(--border); }
}