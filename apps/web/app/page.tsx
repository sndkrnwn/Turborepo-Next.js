import { Button } from "@repo/ui/button";
import { ButtonClient } from "@client/custom/button";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Button appName="web" className={styles.secondary}>
        Button from @repo-ui path
      </Button>
      <ButtonClient appName="web" className={styles.secondary}>
        Button from @client-custom path
      </ButtonClient>
    </div>
  );
}
