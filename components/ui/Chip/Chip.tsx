import { FC, PropsWithChildren } from "react";
import styles from "./Chip.module.scss";

interface IProps {
  fontSize?: string;
}

export const Chip: FC<PropsWithChildren<IProps>> = ({
  fontSize,
  children,
  ...props
}) => {
  return (
    <div {...props} style={{ fontSize: fontSize }} className={styles.chip}>
      {children}
    </div>
  );
};
