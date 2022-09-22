import "./assets/css/style.css";
import Images from "./components/Images";

const App = () => {
  return (
    <section className="flex justify-center">
      <div className="w-10/12">
        <div className="text-center">
          <Images />
        </div>
      </div>
    </section>
  );
};

export default App;
