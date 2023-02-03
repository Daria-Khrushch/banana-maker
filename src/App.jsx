import "./styles/main.scss";
import { useState } from "react";

function App() {
  const [eyes, setEyes] = useState("");
  const [mouth, setMouth] = useState("");
  const [hat, setHat] = useState("");
  const [clothes, setClothes] = useState("");
  const [skin, setSkin] = useState("");
  const [font, setFont] = useState("");

  return (
    <div className="App">
      <header>
        <p>Make your banana!</p>
      </header>
      <div className="container">
        <div className="canvas">
          {font && (
            <img
              src={require(`./img/font/${font}`)}
              alt="skin_black"
              className="image"
            />
          )}
          {skin && (
            <img
              src={require(`./img/skin/${skin}`)}
              alt="skin"
              className="image"
            />
          )}
          {hat && (
            <img
              src={require(`./img/hats/${hat}`)}
              alt="hat"
              className="image"
            />
          )}
          {mouth && (
            <img
              src={require(`./img/mouth/${mouth}`)}
              alt="mouth"
              className="image"
            />
          )}
          {eyes && (
            <img
              src={require(`./img/eyes/${eyes}`)}
              alt="eyes"
              className="image"
            />
          )}
          {clothes && (
            <img
              src={require(`./img/clothes/${clothes}`)}
              alt="clothes"
              className="image"
            />
          )}
        </div>

        <div className="attributes">
          <form>
            <label>
              <select
                value={eyes}
                onChange={(event) => setEyes(event.target.value)}
              >
                <option value="" selected disabled>
                  Select eyes
                </option>
                <option value="eyes_1_brown.png">Brown eyes</option>
                <option value="eyes_1_yellow.png">Yellow eyes</option>
                <option value="eyes_2.png">Eyes 2</option>
                <option value="eyes_3.png">Eyes 3</option>
                <option value="eyes_4.png">Eyes 4</option>
                <option value="eyes_5.png">Eyes 5</option>
                <option value="glasses.png">Glasses</option>
                <option value="glasses_blur.png">Blur glasses</option>
              </select>

              <select
                value={mouth}
                onChange={(event) => setMouth(event.target.value)}
              >
                <option value="" selected disabled>
                  Select mouth
                </option>
                <option value="mouth_1.png">Mouth 1</option>
                <option value="mouth_1_with_club.png">Mouth 1 with club</option>
                <option value="mouth_2.png">Mouth 2</option>
                <option value="mouth_2_with_diamond.png">
                  Mouth 2 with diamond
                </option>
                <option value="mouth_3.png">Mouth 3</option>
                <option value="mouth_3_with_heart.png">
                  Mouth 3 with heart
                </option>
                <option value="mouth_4.png">Mouth 4</option>
                <option value="mouth_4_with_club.png">Mouth 4 with club</option>
                <option value="mouth_5.png">Mouth 5</option>
                <option value="mouth_5_with_diamond.png">
                  Mouth 5 with diamond
                </option>
                <option value="mustache_1.png">Mustache 1</option>
                <option value="mustache_1_with_heart.png">
                  Mustache 1 with heart
                </option>
                <option value="mustache_2.png">Mustache 2</option>
                <option value="mustache_2_with_spade.png">
                  Mustache 2 with spade
                </option>
                <option value="tobacco_pipe_1.png">Tobacco pipe</option>
              </select>

              <select
                value={hat}
                onChange={(event) => setHat(event.target.value)}
              >
                <option value="" selected disabled>
                  Select hat
                </option>
                <option value="bowler_hat_black.png">Bowler hat black</option>
                <option value="bowler_hat_brown.png">Bowler hat brown</option>
                <option value="hat_1.png">Hat 1</option>
                <option value="hat_2.png">Hat 2</option>
                <option value="hat_2_black.png">Hat 2 black</option>
                <option value="hat_2_skcol.png">Hat 2 skcol</option>
                <option value="hat_blue.png">Hat blue</option>
                <option value="pirate_black.png">Pirate black</option>
                <option value="pirate_purple.png">Pirate purple</option>
              </select>

              <select
                value={clothes}
                onChange={(event) => setClothes(event.target.value)}
              >
                <option value="" selected disabled>
                  Select clothes
                </option>
                <option value="baloon_green.png">Baloon green</option>
                <option value="baloon_heart_red.png">Baloon heart red</option>
                <option value="baloon_heart_yellow.png">
                  Baloon heart yellow
                </option>
                <option value="baloon_long_dark_purple.png">
                  Baloon long dark purple
                </option>
                <option value="baloon_long_purple.png">
                  Baloon long purple
                </option>
                <option value="baloon_long_yellow.png">
                  Baloon long yellow
                </option>
                <option value="baloon_red.png">Baloon red</option>
                <option value="bandana_blue.png">Bandana blue</option>
                <option value="bandana_green.png">Bandana green</option>
                <option value="bandana_red.png">Bandana red</option>
                <option value="chain_$.png">Chain $</option>
                <option value="chain_B.png">Chain B</option>
                <option value="scarf_green.png">Scarf green</option>
                <option value="scarf_red.png">Scarf red</option>
              </select>

              <select
                value={skin}
                onChange={(event) => setSkin(event.target.value)}
              >
                <option value="" selected disabled>
                  Select skin
                </option>
                <option value="black.png">Black</option>
                <option value="dark_yellow.png">Dark yellow</option>
                <option value="darkest_yellow.png">Darkest yellow</option>
                <option value="skin_carrot.png">Skin carrot</option>
                <option value="skin_orange.png">Skin orange</option>
                <option value="skin_pink.png">Skin pink</option>
                <option value="skin_yellow.png">Skin yellow</option>
              </select>

              <select
                value={font}
                onChange={(event) => setFont(event.target.value)}
              >
                <option value="" selected disabled>
                  Select font
                </option>
                <option value="blue.png">Blue</option>
                <option value="blue_with_purple_circles.png">
                  Blue with purple circles
                </option>
                <option value="blue_with_purple_waves.png">
                  Blue with purple waves
                </option>
                <option value="blue_with_white_circles.png">
                  Blue with white circles
                </option>
                <option value="blue_with_white_waves.png">
                  Blue with white waves
                </option>
                <option value="light_blue.png">Light blue</option>
                <option value="light_blue_rou.png">Light blue rou</option>
                <option value="light_blue_rou_invert.png">
                  Light blue rou invert
                </option>
                <option value="light_green.png">Light green</option>
                <option value="light_green_rou.png">Light green rou</option>
                <option value="light_green_rou_invert.png">
                  Light green rou invert
                </option>
                <option value="light_yellow.png">Light yellow</option>
                <option value="light_yellow_rou.png">Light yellow rou</option>
                <option value="light_yellow_rou_invert.png">
                  Light yellow rou invert
                </option>
                <option value="peach.png">Peach</option>
                <option value="peach_rou.png">Peach rou</option>
                <option value="peach_rou_invert.png">Peach rou invert</option>
                <option value="pink.png">Pink</option>
                <option value="pink_rou.png">Pink rou</option>
                <option value="pink_rou_invert.png">Pink rou invert</option>
                <option value="pink_with_purple_circles.png">
                  Pink with purple circles
                </option>
                <option value="pink_with_purple_waves.png">
                  Pink with purple waves
                </option>
                <option value="pink_with_white_circles.png">
                  Pink with white circles
                </option>
                <option value="pink_with_white_waves.png">
                  Pink with white waves
                </option>
                <option value="purple.png">Purple</option>
                <option value="purple_rou.png">Purple rou</option>
                <option value="purple_rou_invert.png">Purple rou invert</option>
                <option value="purple_pink.png">Purple-pink</option>
                <option value="purple_pink_rou.png">Purple-pink rou</option>
                <option value="purple_pink_rou_invert.png">
                  Purple-pink rou invert
                </option>
                <option value="purple_with_blue_waves.png">
                  purple with blue waves
                </option>
                <option value="purple_with_pink_circles.png">
                  Purple with pink circles
                </option>
                <option value="purple_with_pink_waves.png">
                  Purple with pink waves
                </option>
                <option value="purple_with_white_waves.png">
                  Purple with white waves
                </option>
                <option value="purple_with_white_circles.png">
                  Pink with white purple
                </option>
              </select>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
