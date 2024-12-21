import Register from './Components/AuthModule/Register/Register'
import BookDatabase from './Components/BookDatabase/BookDatabaseMain/BookDatabase';
import RegisterBook from './Components/BookDatabase/RegisterBook/RegisterBook';
import "./App.css";

function App() {
  return (
    <>

    {/* <Register/> */}
    <BookDatabase/>
    {/* <RegisterBook/> */}
      {/* <h1 className="title">Developer Instructions</h1>
      <div className="content">
        <h2>Component Folder Structure</h2>
        <ul>
          <li>
            Each module should be in a well-named folder under the components
            directory.
          </li>
          <li>Example:</li>
          <ul>
            <li>
              Home Page - <strong>HomeModule</strong> folder
            </li>
            <li>
              Login and Register - <strong>AuthModule</strong> folder
            </li>
            <li>
              Navbar and Footer - <strong>CommonModule</strong> folder
            </li>
          </ul>
          <li>Avoid creating unnecessary folders.</li>
        </ul>

        <h2>Images</h2>
        <ul>
          <li>
            Place images in the public folder in recommended SVG format whenever
            possible.
          </li>
          <li>
            If a non-SVG image is necessary, use a dedicated local folder.
          </li>
        </ul>

        <h2>Code Quality</h2>
        <ul>
          <li>Ensure the code is accurate and efficient.</li>
          <li>Write minimal and clean CSS. Avoid excessive styling.</li>
        </ul>

        <h2>GitHub PR Rules</h2>
        <ul>
          <li>
            Follow the organization's GitHub pull request rules while creating
            PRs.
          </li>
        </ul>

        <h2>Queries or Doubts</h2>
        <ul>
          <li>
            For any issues, contact <strong>Parnab Bagchi</strong>.
          </li>
        </ul>
      </div> */}
    </>
  );
}

export default App;
