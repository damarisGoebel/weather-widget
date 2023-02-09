import styles from "./Main.module.css";

export const Main = () => {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <img
            className={styles.headerImage}
            alt="krieg-in-ukraine-thema-bild"
            data-alt="krieg-in-ukraine-thema-bild"
            data-src="https://img.zeit.de/politik/2022-08/krieg-in-ukraine-thema-bild/panorama"
            data-ratio="3.5"
            decoding="async"
            data-mobile-src="https://img.zeit.de/politik/2022-08/krieg-in-ukraine-thema-bild/cinema"
            data-mobile-ratio="2.33333333333"
            src="https://img.zeit.de/politik/2022-08/krieg-in-ukraine-thema-bild/panorama__1000x280__desktop__scale_2"
          />
          <h1 className={styles.headerHeadline}>
            <span className="header-image__title">Krieg in der Ukraine</span>
          </h1>
        </div>
      </header>
      <div className={styles.markup} data-ct-area="manualtopic" data-ct-row="1">
        <div className={styles.markupText}>
          <ul className={styles.list}>
            <li>
              Seit dem 24. Februar 2022 führt{" "}
              <a
                className={styles.link}
                href="https://www.zeit.de/thema/russland"
              >
                Russland
              </a>{" "}
              einen Angriffskrieg gegen die Ukraine. Russische Truppen versuchen
              mit schwerem Artilleriebeschuss, Luftangriffen und Bodentruppen,
              Teile des Landes unter ihre Kontrolle zu bringen. Die gesamte
              Ukraine befindet sich seitdem im Kriegszustand.
            </li>
            <li>
              <a
                className={styles.link}
                href="https://www.zeit.de/politik/ausland/karte-ukraine-krieg-russland-frontverlauf-truppenbewegungen"
              >
                Wo die Fronten in der Ukraine verlaufen, können Sie auf unserer
                fortlaufend aktualisierten Karte sehen
              </a>
              .
            </li>
            <li>
              Der russische Präsident{" "}
              <a
                className={styles.link}
                href="https://www.zeit.de/thema/wladimir-putin"
              >
                Wladimir Putin
              </a>{" "}
              reagierte auf eine ukrainische Gegenoffensive Ende September mit
              einer völkerrechtswidrigen Annexion der vier russisch
              kontrollierten Gebiete Luhansk, Donezk, Saporischschja und
              Cherson.{" "}
            </li>
            <li>
              Die Ukraine beantragte daraufhin einen beschleunigten Beitritt zum
              westlichen Verteidigungsbündnis{" "}
              <a className={styles.link} href="https://www.zeit.de/thema/nato">
                Nato
              </a>
              . Das Land ist außerdem EU-Beitrittskandidat.
            </li>
            <li>
              Deutschland und weitere westliche Verbündete liefern nach langer
              Debatte neben Waffen zur Verteidigung auch Kampfpanzer an die
              Ukraine. Russland wertete das als Kriegsbeteiligung.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};
