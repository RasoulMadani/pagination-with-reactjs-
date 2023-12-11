import usePaginatedFetch from "./usePaginatedFetch";

const url =
  "https://react-mini-projects-api.classbon.com/Programmer/programmers";
function App() {
  const [loading, programmers] = usePaginatedFetch(url, 3);
  return <div className="container"></div>;
}

export default App;
