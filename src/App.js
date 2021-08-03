import "./App.css";
import Form from "./components/form/Form";
import Header from "./components/header/Header";

function App() {
    const showText = ({ text }) => {
        console.log(text);
    };

    return (
        <div className="App">
            <Header />
            <Form evSubmit={showText} />
        </div>
    );
}

export default App;
