import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.overlay}>
          <div className={styles.content}>
            <div className={styles.logo}>
              <img
                src="/icons/logo.svg"
                alt="Thabho Logo"
                width={258}
                height={64}
              />
            </div>
            <h1 className={styles.title}>Ready to know about us?</h1>
            <p className={styles.description}>
              Stay tuned by following us on our social handles
            </p>
            <div className={styles.socialIcons}>
              <a href="#" className={styles.socialIcon} aria-label="Facebook">
                <img
                  src="/icons/fb.svg"
                  alt="Facebook Logo"
                  width={32}
                  height={32}
                />
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Twitter">
                <img
                  src="/icons/x.svg"
                  alt="Twitter Logo"
                  width={32}
                  height={32}
                />
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Instagram">
                <img
                  src="/icons/insta.svg"
                  alt="Instagram Logo"
                  width={32}
                  height={32}
                />
              </a>
              <a href="#" className={styles.socialIcon} aria-label="YouTube">
                <img
                  src="/icons/yt.svg"
                  alt="Youtube Logo"
                  width={32}
                  height={32}
                />
              </a>
            </div>
            <div className={styles.hashtag}>#NOWIKNOW</div>
          </div>
        </div>
      </main>
    </div>
  );
}
