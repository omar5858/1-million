export default function Home() {
  return (
    <main>
      <header className="navbar">
        <a className="logo" href="#">
          <span className="logoBox">1</span>
          <span>MILLION</span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#games">Games</a>
          <a href="#about">About</a>
        </nav>

        <div className="navButtons">
          <button className="login">Log in</button>
          <button className="register">Create account</button>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="heroContent">
          <div className="badge">
            <span></span>
            NEW PLATFORM
          </div>

          <h1>
            PLAY BIG.
            <br />
            <strong>WIN BIG.</strong>
          </h1>

          <p>
            Welcome to <b>1 MILLION</b> — a modern gaming platform
            designed for fast, exciting and premium experiences.
          </p>

          <div className="heroButtons">
            <a href="#games" className="mainButton">
              Explore Games →
            </a>

            <button className="secondaryButton">
              How it works
            </button>
          </div>

          <div className="features">
            <span>● Secure platform</span>
            <span>● Fair-play focused</span>
            <span>● Mobile ready</span>
          </div>
        </div>

        <div className="gamePreview">
          <div className="previewTop">
            <span>FEATURED GAME</span>
            <span className="demo">
              <i></i> DEMO
            </span>
          </div>

          <div className="chicken">🐔</div>

          <div className="road">
            <div className="roadLine line1"></div>
            <div className="roadLine line2"></div>
            <div className="roadLine line3"></div>

            <span className="car car1">🚗</span>
            <span className="car car2">🚙</span>

            <span className="smallChicken">🐔</span>
          </div>

          <div className="multiplier">
            1.00<span>x</span>
          </div>

          <button className="demoButton">
            PLAY DEMO
          </button>

          <small>
            Virtual demo only — no real-money play is enabled.
          </small>
        </div>
      </section>

      <section className="stats">
        <div>
          <strong>01</strong>
          <span>Premium<br />experience</span>
        </div>

        <div>
          <strong>24/7</strong>
          <span>Platform<br />availability</span>
        </div>

        <div>
          <strong>100%</strong>
          <span>Original<br />game design</span>
        </div>

        <div>
          <strong>∞</strong>
          <span>Room to<br />grow</span>
        </div>
      </section>

      <section id="games" className="gamesSection">
        <div className="sectionTitle">
          <div>
            <label>THE ARCADE</label>

            <h2>
              Games made to
              <br />
              <strong>stand out.</strong>
            </h2>
          </div>

          <p>
            Discover exciting games and new experiences
            coming soon to 1 MILLION.
          </p>
        </div>

        <div className="gamesGrid">
          <article className="gameCard">
            <div className="gameIcon">🐔</div>
            <label>COMING SOON</label>
            <h3>Chicken Run</h3>
            <p>
              A fast arcade crossing game with rising
              multipliers.
            </p>
            <button>View game →</button>
          </article>

          <article className="gameCard">
            <div className="gameIcon">🚀</div>
            <label>COMING SOON</label>
            <h3>Rocket</h3>
            <p>
              Watch the multiplier rise in this fast-paced
              arcade game.
            </p>
            <button>View game →</button>
          </article>

          <article className="gameCard">
            <div className="gameIcon">🎡</div>
            <label>COMING SOON</label>
            <h3>Lucky Wheel</h3>
            <p>
              Spin the wheel and discover virtual rewards.
            </p>
            <button>View game →</button>
          </article>
        </div>
      </section>

      <section id="about" className="bottomBanner">
        <div>
          <label>BUILT FOR THE NEXT LEVEL</label>

          <h2>
            One brand.
            <br />
            <strong>Million possibilities.</strong>
          </h2>
        </div>

        <button className="mainButton">
          Create account
        </button>
      </section>

      <footer>
        <div className="logo">
          <span className="logoBox">1</span>
          <span>MILLION</span>
        </div>

        <p>
          © 2026 1 MILLION. Demo interface.
        </p>
      </footer>
    </main>
  );
}
