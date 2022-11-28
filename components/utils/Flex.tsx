import { CSSProperties, ReactNode } from "react";

const Flex = ({
  children,
  style,
}: {
  children: ReactNode;
  style?: CSSProperties;
}) => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      ...style,
    }}
  >
    {children}
  </div>
);

export default Flex;
