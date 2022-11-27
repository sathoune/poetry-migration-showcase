import { ReactNode } from "react";

const Lif = ({ children }: { children: ReactNode }) => {
  return <li className="fragment">{children}</li>;
};

export default Lif;
