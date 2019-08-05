import Header from "./Header";
import Meta from "../components/Meta";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

const Layout = props => (
  <div style={layoutStyle}>
    <Meta />
    <Header />
    {props.children}
  </div>
);

export default Layout;
