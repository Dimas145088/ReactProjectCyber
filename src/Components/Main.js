import React from "react";
import Cyber from "../img_main/Rectangle 61.jpg";
import Cyber1 from "../img_main/Rectangle 62.jpg";
import Cyber2 from "../img_main/Rectangle 63.jpg";
import Line from "../img_main/22 1.jpg";
import Line2 from "../img_main/22 2.jpg";
import { ReactComponent as Promotion } from "../img_main/Group 215.svg";
import Player from "../img_main/Player.svg";
import Monitor from "../img_main/Monitor.svg"
import LogoFull from "../img_main/Logo2.svg"
import Full from "../img_main/color_lens.svg"
import Full2 from "../img_main/auto_awesome.svg"
import Full3 from "../img_main/auto_awesome_motion.svg"
import Buy from "../img_main/BuyTheGame.jpg"
import Disk from "../img_main/disk.svg"
import Wysiwyg from "../img_main/wysiwyg.svg"
import Collections from "../img_main/collections.svg"
import Frame from "../img_main/Frame 13.svg"
import Xbox from "../img_main/xbox-one-3 logo.svg"
import Stadia from "../img_main/stadia logo.svg"
import PlayStation from "../img_main/Playstation logo.svg"

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input:'',
      submit:''
    }

    this.HandleSubmit = this.HandleSubmit.bind(this)
    this.HandleChange = this.HandleChange.bind(this)

  }

  HandleSubmit(event){
    event.preventDefault()
    this.setState({
      submit:this.state.input,
      input:''
    })
  }

  HandleChange(event){
    this.setState({
      input:event.target.value
    })
  }

  render() {
    return (
      <main className="main">
        <div className="container">
          <p className="text">Найт-Сити изменит тебя навсегда!</p>
          <p className="text_cyber">
            <span className="cyber_span">Cyberpunk 2077</span> — приключенческая
            ролевая игра, действие которой происходит в мегаполисе Найт-Сити,
            где власть, роскошь и модификации тела ценятся выше всего. Ты
            играешь за V, наёмника в поисках устройства, позволяющего обрести
            бессмертие. Ты сможешь менять киберимпланты, навыки и стиль игры
            своего персонажа, исследуя открытый мир, где твои поступки влияют на
            ход сюжета и всё, что тебя окружает.
          </p>
          <div className="img_cyber">
            <div className="img_cyber_block">
              <img className="img_cyber_cyber" src={Cyber1}></img>
              <img className="img_cyber_cyber" src={Cyber2}></img>
            </div>
            <img className="img_cyber_cyber1" src={Cyber}></img>
          </div>
        </div>
        <img className="img_line" src={Line}></img>
        <div className="game">
          <div className="container promotion">
            <div className="svg_promotion">
              <Promotion />
              <p className="svg_promotion_text">Играй и выигрывай!</p>
            </div>
            <p className="text_promotion">Играй в <span className="cyber_span">Cyberpunk 2077</span> и получи возможность выиграть консоль <span className="cyber_span">Xbox Series X</span> или <span className="cyber_span">Sony PlayStation 5!</span> Заполни форму ниже и приложи скриншот о покупке игры. Итоги розыгрыша будут подведены 1 февраля. Удачи! ;)</p>
            <div className="form_play_menu">
              <form onSubmit={this.HandleSubmit} className="input_form">
                <input value={this.state.input} onChange={this.HandleChange} placeholder="Как тебя зовут?" className="input_name"></input>
                <input type="email" placeholder="Твой email" className="input_name"></input>
                <div className="screenshot">
                  <p className="text_screenshot">Прикрепить скриншот</p>
                  <div className="text_screenshot_format">.png / .jpg / .pdf</div>
                </div>
                <button className="btn_form" type="submit">Отправить</button>
                <div className="checkbox">
                  <input type="checkbox"></input>
                  <p className="text_checkbox">Согласен на обработку персональных данных</p>
                </div>
              </form>
              <div className="player">
                <img className="player_img" src={Player}></img>
              </div>
            </div>
          </div>
        </div>
        <img src={Line2} className="img_line2"></img>
        <div className="full_immersion">
          <div className="container full_menu">
            <div className="full">
              <img className="img_full" src={Monitor}></img>
              <img className="img_full2" src={LogoFull}></img>
            </div>
            <div className="immersion">
              <p className="text_immersion">Полное погружение вместе с HP</p>
              <p className="text_immersion2">Погрузись в современные экшен-игры с реалистичным изображением с помощью монитора с диагональю 23,8 дюйма, созданном для отображения максимально насыщенных цветов. Успевай реагировать на любые события с временем отклика 1 мс и частотой в 144 Гц!
              </p>
              <p><img className="img_immersion" src={Full}></img>Яркие насыщенные цвета</p>
              <p><img className="img_immersion" src={Full2}></img>Кристальная четкость изображения</p>
              <p className="text_img_immersion"><img className="img_immersion" src={Full3}></img>Быстрые движения и плавный геймплей</p>
              <button className="btn_immersion">Подробнее</button>
            </div>
          </div>
        </div>
        <div className="buy_the_game">
            <div className="btgL">
              <img src={Buy} className="buy_the_game_img"></img>
            </div>
            <div className="btgR">
              <div className="container">
                <p className="text_the_game">Купить игру Cyberpunk 2077</p>
                <p className="text_complect">В комплект входит:</p>
                <p className="text_game_img"><img className="img_the_game" src={Disk}></img>Футляр с игровыми дисками</p>
                <p className="text_game_img"><img className="img_the_game" src={Wysiwyg}></img>Футляр с кодом для загрузки игры и дисками (pc)</p>
                <p className="text_game_img"><img className="img_the_game" src={Collections}></img>Справочник с информацией об игровом мире</p>
                <p className="text_complect comp">Выберите платформу:</p>
                <div className="platform">
                  <div className="frame_xbox">
                    <img className="frame" src={Frame}></img>
                    <img className="stadia" src={Stadia}></img>
                  </div>
                  <div className="frame_xbox ">
                    <img className="xbox" src={Xbox}></img>
                    <img className="playstation" src={PlayStation}></img>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </main>
    );
  }
}

export default Main;
