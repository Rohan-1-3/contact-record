import logo from "../images/logo.png";

export default function Index() {
    return (
      <p id="zero-state">
        <img src={logo} alt="Logo"/>
        Habibi Connects is a powerful tool designed to help you organize and manage your contacts seamlessly. Keep track of important details, such as names, images, Twitter handles, and notes for each contact.
        <br />
        <div>
          Check out{" "}
          <a href="https://reactrouter.com">
            its features
          </a>.
        </div>
      </p>
    );
  }