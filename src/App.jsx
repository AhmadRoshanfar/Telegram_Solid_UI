import { createEffect, onMount } from "solid-js";
import styles from "./App.module.css";
import logo from "./logo.svg";

// const telegram = window.Telegram.WebApp;
function App() {
  // const initTelegram = () => {
  //   telegram.ready();
  //   // telegram.SettingsButton.show();
  //   // telegram.BackButton.show();
  //   telegram.MainButton.text = "Pay :)";
  //   telegram.MainButton.show();
  //   telegram.MainButton.onClick(telegram.sendData("HELLO"));
  // };

  // onMount(() => {
  //   // telegramRef.current = document.querySelector("#main_page");
  //   createEffect(initTelegram);
  // });

  return (
    <div>
      <h1>HELLOOOO</h1>
    </div>
  );
}

export default App;
