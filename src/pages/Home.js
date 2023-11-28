import { Languages, Databases } from "../components";

const Home = () => {
  return (
    <>
      <head>
        <title>Chriss Quartz - Portfolio</title>
      </head>

      <div className="App">
        <main>
          <div style={{ marginLeft: "50px" }}>
            <h1>Hello, there 👋</h1>
            <h2>
              I'm <strong class="bolded">Quartz</strong> and I'm a{" "}
              <strong class="bolded">full stack developer</strong> 📚
            </h2>
            <br />
            <br />
            <h3>Some of the Programming languages I know include:</h3>
            <Languages></Languages>
            <br />
            <br />
            <h3>I am proficient in the following Databases:</h3>
            <Databases></Databases>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
