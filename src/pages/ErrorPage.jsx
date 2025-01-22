import { NavLink, useRouteError } from "react-router-dom";

const ErrorPage = () => {

  const error = useRouteError()
  console.log(error);
  return (
    <>
    <h1>Oops! An error occurred.</h1>
    {error && <p>{error.data}</p>}
     <NavLink to={-1}><button>Go Back</button></NavLink>
    </>
  );
};

export default ErrorPage;