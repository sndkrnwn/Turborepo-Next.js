import { Button } from "~fe-sfreport-client/antam/prompt/button";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Button appName="client" className={styles.secondary}>
        Button from fe-sfreport-client
      </Button>
    </div>
  );
}
