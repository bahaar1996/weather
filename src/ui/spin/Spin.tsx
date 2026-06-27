"use client";
import { Spin } from "antd";

type SpinProps = {
  styles?: string;
  size?: "small" | "medium" | "large";
};
const SpinComponent = ({ styles, size = "medium" }: SpinProps) => {
  return (
    <div className={styles}>
      <Spin size={size} />
    </div>
  );
};

export default SpinComponent;
