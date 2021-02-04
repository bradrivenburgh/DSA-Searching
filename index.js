"use strict";

function App() {
  const [data] = React.useState([
    89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 
    48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 
    93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 
    64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 
    31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 
    46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5,
  ]);
  const [valueLin, setValueLin] = React.useState("");
  const [valueBin, setValueBin] = React.useState("");
  const [count, setCount] = React.useState(0);
  const [found, setFound] = React.useState(false);

  const prepValue = (val) => {
    let prepped = val.trim();
    prepped = Number(prepped);
    return prepped;
  };

  const linearSearch = (val) => {
    const array = data;

    let count = 0;
    for (let i = 0; i < array.length; i++) {
      count++;
      if (array[i] == val) {
        setCount(count);
        setFound(true);
        return true;
      }
    }
    setCount(count);
    return false;
  };

  const binarySearch = (
    val,
    array = data.sort((a, b) => a - b),
    start = 0,
    end = data.length,
    count = 0
  ) => {
    if (start > end) {
      return false;
    }
    count++;
    setCount(count);

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    if (item === val) {
      setCount(count);
      setFound(true);
      return true;
    } else if (item < val) {
      return binarySearch(val, array, index + 1, end, count);
    } else if (item > val) {
      return binarySearch(val, array, start, index - 1, count);
    }
  };

  const handleChange = (e) => {
    e.target.name === "linear"
      ? setValueLin(e.target.value)
      : setValueBin(e.target.value);
  };

  const handleSubmitLin = (e) => {
    e.preventDefault();
    setFound(false);
    setCount(0);
    const val = prepValue(valueLin);
    setValueLin("");
    linearSearch(val);
  };

  const handleSubmitBin = (e) => {
    e.preventDefault();
    setFound(false);
    setCount(0);
    const val = prepValue(valueBin);
    setValueBin("");
    binarySearch(val);
  };

  return (
    <main>
      <header>
        <h1>Search Algorithms</h1>
      </header>
      <section>
        <form onSubmit={handleSubmitLin}>
          <label>
            Linear Search:
            <br />
            <input
              type='text'
              onChange={handleChange}
              name='linear'
              value={valueLin}
            />
          </label>
          <button>Submit</button>
        </form>
        <br />
        <form onSubmit={handleSubmitBin}>
          <label>
            Binary Search:
            <br />
            <input
              type='text'
              onChange={handleChange}
              name='binary'
              value={valueBin}
            />
          </label>
          <button>Submit</button>
        </form>
      </section>
      <section>
        {count > 0 && found && <p>The item was found after {count} tries</p>}
        {count > 0 && !found && (
          <p>The item was not found after {count} tries</p>
        )}
      </section>
    </main>
  );
}

ReactDOM.render(<App />, document.querySelector("#application-root"));
