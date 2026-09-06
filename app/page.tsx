export default function Home() {
  return (
    <main>
      <header className="navbar">
        <a className="logo" href="#home">
          <span className="logoBox">1</span>
          <span>MILLION</span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#games">Games</a>
          <a href="#offers">Offers</a>
          <a href="#about">About</a>
          <a href="#support">Support</a>
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
            OFFICIAL 1 MILLION PLATFORM
          </div>

          <h1>
            YOUR GAME.
            <br />
            <strong>YOUR MOMENT.</strong>
          </h1>

          <p>
            Welcome to <b>1 MILLION</b> — a modern gaming platform
            built for exciting experiences, premium design and
            mobile-first entertainment.
          </p>

          <div className="heroButtons">
            <button className="mainButton">
              Create account →
            </button>

            <a href="#games" className="secondaryButton">
              Explore games
            </a>
          </div>

          <div className="features">
            <span>● Secure platform</span>
            <span>● Mobile ready</span>
            <span>● Original games</span>
          </div>
        </div>

        <div className="gamePreview">
          <div className="previewTop">
            <span>1 MILLION ARCADE</span>

            <span className="demo">
              <i></i> COMING SOON
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
            GAME COMING SOON
          </button>

          <small>
            New original games are being prepared for 1 MILLION.
          </small>
        </div>
      </section>

      <section className="stats">
        <div>
          <strong>01</strong>
          <span>
            Premium
            <br />
            platform
          </span>
        </div>

        <div>
          <strong>24/7</strong>
          <span>
            Platform
            <br />
            availability
          </span>
        </div>

        <div>
          <strong>100%</strong>
          <span>
            Original
            <br />
            experience
          </span>
        </div>

        <div>
          <strong>∞</strong>
          <span>
            New
            <br />
            possibilities
          </span>
        </div>
      </section>

      <section id="games" className="gamesSection">
        <div className="sectionTitle">
          <div>
            <label>THE 1 MILLION ARCADE</label>

            <h2>
              Discover your
              <br />
              <strong>next game.</strong>
            </h2>
          </div>

          <p>
            Explore a growing collection of original games
            designed especially for the 1 MILLION platform.
          </p>
        </div>

        <div className="gamesGrid">
          <article className="gameCard">
            <div className="gameIcon">🐔</div>

            <label>COMING SOON</label>

            <h3>Chicken Run</h3>

            <p>
              A fast arcade crossing experience with
              rising multipliers.
            </p>

            <button>
              Coming soon →
            </button>
          </article>

          <article className="gameCard">
            <div className="gameIcon">🚀</div>

            <label>COMING SOON</label>

            <h3>Rocket</h3>

            <p>
              Watch the multiplier rise and test your
              timing in a fast arcade experience.
            </p>

            <button>
              Coming soon →
            </button>
          </article>

          <article className="gameCard">
            <div className="gameIcon">🎡</div>

            <label>COMING SOON</label>

            <h3>Lucky Wheel</h3>

            <p>
              A colorful wheel experience with exciting
              virtual rewards.
            </p>

            <button>
              Coming soon →
            </button>
          </article>
        </div>
      </section>

      <section id="offers" className="bottomBanner">
        <div>
          <label>WELCOME TO 1 MILLION</label>

          <h2>
            One platform.
            <br />
            <strong>Million possibilities.</strong>
          </h2>

          <p>
            Create your account and be ready for the next
            generation of 1 MILLION gaming experiences.
          </p>
        </div>

        <button className="mainButton">
          Create account
        </button>
      </section>

      <section id="about" className="gamesSection">
        <div className="sectionTitle">
          <div>
            <label>ABOUT 1 MILLION</label>

            <h2>
              Built for
              <br />
              <strong>the next level.</strong>
            </h2>
          </div>

          <p>
            1 MILLION is being developed as a modern,
            mobile-first gaming platform focused on
            original experiences, simple navigation and
            a premium user interface.
          </p>
        </div>
      </section>

      <section id="support" className="bottomBanner">
        <div>
          <label>NEED HELP?</label>

          <h2>
            We're here
            <br />
            <strong>for you.</strong>
          </h2>

          <p>
            Our support section will be available to help
            users with their accounts and platform questions.
          </p>
        </div>

        <button className="secondaryButton">
          Contact support
        </button>
      </section>

      <footer>
        <div className="logo">
          <span className="logoBox">1</span>
          <span>MILLION</span>
        </div>

        <div>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Responsible Play</a>
        </div>

        <p>
          © 2026 1 MILLION. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
