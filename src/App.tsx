import AxiosTest from "./components/Axios/AxiosTest";
import Bank from "./components/Bank/Bank";
import MouseOver from "./components/MouseOver/MouseOver";
import Selection from "./components/Select/Selection";

function App() {
  return (
    <div className="min-h-[800px] w-full relative">
    <div className="w-[500px] mx-auto border-2 border-gray-100 shadow-xl h-[500px] text-center mt-[100px]">
      <Bank /> 
      <Selection />
    {/* <AxiosTest /> */}
    </div>
    <MouseOver />
    </div>
  );
}

export default App;
