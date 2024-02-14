"use client";
import React, { useState } from "react";
import "./store.css";
import playerData from "../data/player-info.json";
import { TbShoppingBag } from "react-icons/tb";
import { FaRegSmileBeam } from "react-icons/fa";

const Store = () => {
  const player_data: any = playerData["my-data"];
  const [popUpCannotBuy, setPopUpCannotBuy] = useState(false)
  const [choosedArticle, setChoosedArticle] = useState(
    player_data.avatarsAndPaddles[0]
  );
  const [selectedCategory, setselectedCategory] = useState("all");
  const all = player_data.avatarsAndPaddles;
  const playerPoints = player_data.statistic.points;

  const handleBuyArticle = (id: any) => {
    const searchArticle = all.filter((e:any) => e.id == id)
    console.log("parseInt(playerPoints) => " , parseInt(playerPoints));
    console.log("parseInt(searchArticle.price) => " , searchArticle);
    if (parseInt(playerPoints)  < parseInt(searchArticle[0].price) ) {
      console.log("thats true")
      setPopUpCannotBuy(!popUpCannotBuy)
      setTimeout(() => {setPopUpCannotBuy(!popUpCannotBuy)}, 10000);
    }
    else {
      /*  Waiting ayoub to learn and tell us how he want the data to be sent to him   */
    }
  };

  return (
    <div className="all">
      {popUpCannotBuy &&
        <span className="popUpCannotBuy">Your wallet balance is insufficient <br />
        to buy this article <br/>Try winning more matches to increase <br/>
         your wallet balance <br/> <FaRegSmileBeam className="smily"/> </span>
      }
      <h2>
        Store <TbShoppingBag className="shop-icon" />
      </h2>
      <div className="storeContainer">
        <div className="choosedArticle">
          <img
            src={
              choosedArticle.avatar == undefined
                ? choosedArticle.paddle
                : choosedArticle.avatar
            }
            alt=""
          />
          <p className="name">{choosedArticle.name}</p>
          <p className="description">{choosedArticle.description}</p>
          <div className="price">
            {choosedArticle.owned == "yes" ? (
              <p>{choosedArticle.price}</p>
            ) : (
              <button onClick={() => handleBuyArticle(choosedArticle.id)}>
                Buy Now {choosedArticle.price}
              </button>
            )}
          </div>
        </div>
        <div className="allArticles">
          <div className="select">
            <div>
              <label htmlFor="articlesType">Choose Article </label>
              <select
                title=""
                name="articlesType"
                id="articlesType"
                value={selectedCategory}
                onChange={(e) => setselectedCategory(e.target.value)}
              >
                <option value="all">all</option>
                <option value="avatars">avatars</option>
                <option value="paddles">paddles</option>
              </select>
            </div>
            <p className="player-points"> {playerPoints} $</p>
          </div>
          <div className="articles">
            {Object.keys(all).map((article) => {
              if (
                all[article].avatar != undefined &&
                (selectedCategory == "avatars" || selectedCategory == "all")
              ) {
                return (
                  <div
                    key={all[article].avatar}
                    onClick={() => setChoosedArticle(all[article])}
                  >
                    <img src={all[article].avatar} alt="avatar" />

                    {all[article].owned == "yes" ? (
                      ""
                    ) : (
                      <span className="notOwnedPrice">
                        {all[article].price} $
                      </span>
                    )}
                  </div>
                );
              } else if (
                all[article].paddle != undefined &&
                (selectedCategory == "paddles" || selectedCategory == "all")
              ) {
                return (
                  <div
                    key={all[article].paddle}
                    onClick={() => setChoosedArticle(all[article])}
                  >
                    <img src={all[article].paddle} alt="paddle" />
                    {all[article].owned == "yes" ? (
                      ""
                    ) : (
                      <span className="notOwnedPrice">
                        {all[article].price} $
                      </span>
                    )}
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
