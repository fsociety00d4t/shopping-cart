import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>This Link doesn't exist!</h1>
      <Link to="/">You can go back to homePage.</Link>
    </div>
  );
};

export default ErrorPage;
