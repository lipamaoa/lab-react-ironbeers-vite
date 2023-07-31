import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="container">
      <Link to={"/beers"}>
        <img src="" alt="AllBears"/>
        <h1>All Beers</h1>
        </Link>
      <Link to={"/beers/random"}>
      <img src="" alt="RandomBears"/>
        <h1>Random Beer</h1>
        </Link>
      <Link to={"/beers/new"}>
      <img src="" alt="NewBears"/>
        <h1>New Beer</h1></Link>
    </div>
  );
}

export default HomePage;
