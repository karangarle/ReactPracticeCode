import Navbar from "./Navbar";
import Page from "./Page";

function Section1(props) {
  return (
    <div className="h-screen w-full">
      <Navbar />
      <Page users={props.users} />
    </div>
  );
}

export default Section1;
