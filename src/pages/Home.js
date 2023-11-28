import { Languages, Databases } from "../components";

const Home = () => {
  return (
    <>
      <head>
        <script
          type="text/javascript"
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        ></script>
      </head>

      <div className="App">
        <div data-netlify-identity-menu></div>

        <div data-netlify-identity-button>Login with Netlify Identity</div>
        
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
