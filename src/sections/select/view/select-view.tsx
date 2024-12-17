import styles from './Home.module.css';
import Link from 'next/link';

export function SelectTemplate() {
  return (
    <div className={styles.container}>
      {/* Header Section */}
      <header className={styles.header}>
        <img
          className={styles.image}
          src="/images/landing.png" // Replace with the correct image path
          alt="Themes preview"
        />
        <div className={styles.overlayContent}>
          <span className={styles.tag}>Compilations</span>
          <h1 className={styles.title}>5 Best Themes for your business</h1>
          <p className={styles.description}>
            Whether you are a designer looking for the best themes for your
            clients or a new website/blog owner, there are numerous theme
            marketplaces to cover your needs. [...]
          </p>
        </div>
      </header>

      {/* Content Section */}
      <main className={styles.content}>
        <div>
          <ul>
            <li>
              <b>Make a list of the features</b> you need (integrated page
              builder, SEO optimization, browser compatibility, [...].)
            </li>
            <li>
              <b>Pay attention to responsiveness</b> — nowadays, you should opt
              for mobile-friendly themes only.
            </li>
            <li>
              <b>Opt for lightweight</b>, simple themes — such templates are
              usually more powerful as they do not affect the speed of your
              website.
            </li>
            <li>
              <b>Make sure that the theme has the visual appearance</b> you want
              — find themes that match your branding elements (colors, logo,
              industry, etc.).
            </li>
            <li>
              <b>Keep readability in mind</b> — a font that is difficult to read
              will affect readability (especially on mobile devices) and hurt
              traffic.
            </li>
            <li>
              <b>Test the themes</b> before you start customizing them — even
              (most) premium themes offer a trial period.
            </li>
          </ul>
          <p>
            Following these simple steps will ensure that the theme you choose
            will benefit your website in the long run.
          </p>
        </div>
        <div className={styles.themesContainer}>
          <h2 className={styles.sectionTitle}>5 Best Third-Party Themes</h2>
          <div className={styles.theme}>
            <h3>1. Template1</h3>
            <p>
              If you are looking for a simple and fashion theme, this one is the
              best for you.<br /> If you are looking for a simple and fashion theme, this
              one is the best for you. <br />If you are looking for a simple and fashion
              theme, this one is the best for you.
            </p>
            <Link href="/">
            <img
              src="/images/landing.png" // Replace with the actual image path
              alt="Template 1 preview"
              className={styles.themeImage}
            />
            </Link>
          </div>
          <div className={styles.theme}>
            <h3>2. Template2</h3>
            <p>
              If you are looking for a simple and fashion theme, this one is the
              best for you.<br /> If you are looking for a simple and fashion theme, this
              one is the best for you. <br />If you are looking for a simple and fashion
              theme, this one is the best for you.
            </p>
            <Link href="/template_1">
            <img
              src="/images/landing.png" // Replace with the actual image path
              alt="Template 1 preview"
              className={styles.themeImage}
            />
            </Link>
          </div>
          <div className={styles.theme}>
            <h3>3. Template3</h3>
            <p>
              If you are looking for a simple and fashion theme, this one is the
              best for you.<br /> If you are looking for a simple and fashion theme, this
              one is the best for you. <br />If you are looking for a simple and fashion
              theme, this one is the best for you.
            </p>
            <Link href="/template_2">
            <img
              src="/images/landing.png" // Replace with the actual image path
              alt="Template 1 preview"
              className={styles.themeImage}
            />
            </Link>
          </div>
          <div className={styles.theme}>
            <h3>4. Template4</h3>
            <p>
              If you are looking for a simple and fashion theme, this one is the
              best for you.<br /> If you are looking for a simple and fashion theme, this
              one is the best for you. <br />If you are looking for a simple and fashion
              theme, this one is the best for you.
            </p>
            <Link href="/template_3">
            <img
              src="/images/landing.png" // Replace with the actual image path
              alt="Template 1 preview"
              className={styles.themeImage}
            />
            </Link>
          </div>
          <div className={styles.theme}>
            <h3>5. Template5</h3>
            <p>
              If you are looking for a simple and fashion theme, this one is the
              best for you.<br /> If you are looking for a simple and fashion theme, this
              one is the best for you. <br />If you are looking for a simple and fashion
              theme, this one is the best for you.
            </p>
            <Link href="/template_4">
            <img
              src="/images/landing.png" // Replace with the actual image path
              alt="Template 1 preview"
              className={styles.themeImage}
            />
            </Link>
          </div>
        </div>
      </main>
      <div className={styles.readNextContainer}>
        <div className={styles.readNextSub}>
          <h2 className={styles.readNextTitle}>Read Next</h2>
            <div className={styles.readNextCards}>
              {/* Card 1 */}
              <div className={styles.readNextCard}>
                <img
                  src="/images/landing.png" // Replace with the actual image path
                  alt="Exciting New Tools"
                  className={styles.readNextCardImage}
                />
                <div className={styles.readNextCardContent}>
                  <h3>Exciting New Tools For Designers, November 2024</h3>
                  <p>
                    Welcome to our latest toolkit collection. As always, we've aimed
                    for a range of apps, utilities, and services to help make life a
                    little easier for...
                  </p>
                  <div className={styles.readNextCardFooter}>
                    <span>PADDI MACDONNELL</span>
                    <span>NOVEMBER 26, 2024</span>
                    <a href="#" className={styles.readNextCardArrow}>
                      →
                    </a>
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div className={styles.readNextCard}>
                <img
                  src="/images/landing.png" // Replace with the actual image path
                  alt="20 Best New Websites"
                  className={styles.readNextCardImage}
                />
                <div className={styles.readNextCardContent}>
                  <h3>20 Best New Websites, October 2024</h3>
                  <p>
                    Something we're seeing more and more of is the "customizable" site.
                    Most often, this means a button to swap between dark and light
                    themes...
                  </p>
                  <div className={styles.readNextCardFooter}>
                    <span>PADDI MACDONNELL</span>
                    <span>OCTOBER 14, 2024</span>
                    <a href="#" className={styles.readNextCardArrow}>
                      →
                    </a>
                  </div>
                </div>
              </div>
              {/* Card 3 */}
              <div className={styles.readNextCard}>
                <img
                  src="/images/landing.png" // Replace with the actual image path
                  alt="Monster Madness"
                  className={styles.readNextCardImage}
                />
                <div className={styles.readNextCardContent}>
                  <h3>Exciting New Tools For Designers, October 2024</h3>
                  <p>
                    We've got goodies for designers, developers, SEO-ers, content
                    managers, and those of you who wear multiple hats. And, of course,
                    it...
                  </p>
                  <div className={styles.readNextCardFooter}>
                    <span>PADDI MACDONNELL</span>
                    <span>OCTOBER 7, 2024</span>
                    <a href="#" className={styles.readNextCardArrow}>
                      →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
