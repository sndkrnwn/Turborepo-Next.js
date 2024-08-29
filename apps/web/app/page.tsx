import { Button } from "@repo/ui/button";
import { Button as ButtonTest } from "fe-sfreport-client/antam/prompt/button";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Button appName="web" className={styles.secondary}>
        Button from @repo-ui path
      </Button>
      <ButtonTest appName="client" className={styles.secondary}>
        Button from fe-sfreport-client
      </ButtonTest>
    </div>
  );
}
