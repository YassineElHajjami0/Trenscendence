"use client";
import React, { useState, useEffect } from "react";
import "./store.css";
import "../globals.css";
import Image from "next/image";
import playerData from "../data/player-info.json";
import { TbShoppingBag } from "react-icons/tb";
import { FaRegSmileBeam } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { PlayerInfo } from "../Interfaces/playerInfoInterface";
import { userToken } from "@/app/Atoms/userToken";
import { useRecoilState, useRecoilValue } from "recoil";
import { loggedUser } from "../Atoms/logged";

interface itemsInterface {
  description: string;
  id: number;
  img: string;
  type: string;
  name: string;
  power: string;
  price: number;
  owned: boolean;
  choosed: boolean;
}

const Store = () => {
  //http://10.12.4.13:3001/users
  const [loading, setLoading] = useState(true);
  const userTok = useRecoilValue(userToken);
  const [popUpCannotBuy, setPopUpCannotBuy] = useState(false);
  const [choosedArticle, setChoosedArticle] = useState<itemsInterface>();
  const [items, setItems] = useState<itemsInterface[]>();
  const [selectedCategory, setselectedCategory] = useState("all");
  const all = playerData.avatarsAndPaddles;
  const playerPoints = playerData.statistic.points;
  const userId = useRecoilValue(loggedUser);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    const fetchedData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/useritems?userId=${userId}`,
          {
            headers: {
              Authorization: `Bearer ${userTok}`,
              "Content-Type": "application/json",
            },
          }
        );
        let data: itemsInterface[] = await response.json();
        data = data.filter((e) => e.type == "paddle" || e.type == "avatar");
        setChoosedArticle(data[0]);
        console.log("_______>>>", data);
        setItems(data);
        // setChoosedArticle({
        //   img: "av3.png",
        //   name: "Hero",
        //   description: "",
        //   price: 641,
        //   id: 7,
        //   power: "",
        //   type: "avatar",
        //   owned: true,
        //   choosed: false,
        // });
        // setItems([
        //   {
        //     img: "av3.png",
        //     name: "Hero",
        //     description: "",
        //     price: 641,
        //     id: 7,
        //     power: "",
        //     type: "avatar",
        //     owned: true,
        //     choosed: false,
        //   },
        //   {
        //     img: "av2.png",
        //     name: "HULK",
        //     description: "",
        //     price: 942,
        //     id: 6,
        //     power: "",
        //     type: "avatar",
        //     owned: false,
        //     choosed: false,
        //   },
        //   {
        //     img: "pd4.png",
        //     name: "fire",
        //     description:
        //       "Designed to broaden your playing horizons with an extended width",
        //     price: 50,
        //     id: 14,
        //     power: "+5% ball speed",
        //     type: "paddle",
        //     owned: false,
        //     choosed: false,
        //   },
        //   {
        //     img: "pd2.png",
        //     name: "nature",
        //     description:
        //       "Designed to broaden your playing horizons with an extended width",
        //     price: 520,
        //     id: 12,
        //     power: "+ 8% ball speed",
        //     type: "paddle",
        //     owned: false,
        //     choosed: false,
        //   },
        // ]);
      } catch (err) {
        console.error(">>>", err);
      }
    };

    fetchedData();
  }, []);

  const handleBuyArticle = async (id: number | undefined) => {
    if (choosedArticle?.price && playerPoints < choosedArticle?.price) {
      setPopUpCannotBuy(!popUpCannotBuy);
      setTimeout(() => {
        setPopUpCannotBuy(false);
      }, 5000);
    } else {
      const response = await fetch(`http://localhost:3000/useritems`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${userTok}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId,
          itemId: id,
          choosed: false,
        }),
      });
      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(`Failed to POST data. Error: ${errorResponse.message}`);
      }
    }
  };

  const handleChooseArticle = async (id: number) => {
    const response = await fetch(`http://localhost:3000/useritems`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${userTok}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
        itemId: id,
        choosed: true,
      }),
    });
    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(`Failed to PATCH data. Error: ${errorResponse.message}`);
    }
  };

  return (
    <>
      {loading ? (
        <div className="container">
          <div className="bat">
            <div className="handle">
              <div className="inner"></div>
            </div>
            <div className="front"></div>
          </div>
          <div className="ball"></div>
        </div>
      ) : (
        <div className="all">
          {popUpCannotBuy && (
            <span className="popUpCannotBuy">
              Your wallet balance is insufficient <br />
              to buy this article <br />
              Try winning more matches to increase <br />
              your wallet balance <br /> <FaRegSmileBeam className="smily" />{" "}
            </span>
          )}
          <h2>
            Store <FaBagShopping className="shop-icon" />
          </h2>
          <div className="storeContainer">
            <div className="choosedArticle">
              <Image
                src={
                  choosedArticle
                    ? choosedArticle.type === "avatar"
                      ? `http://localhost:3000/av/${choosedArticle.img}`
                      : `http://localhost:3000/pd/${choosedArticle.img}`
                    : ""
                }
                width={200}
                height={200}
                alt=""
              />
              <p className="name">{choosedArticle?.name}</p>
              <p className="description">{choosedArticle?.description}</p>
              <div className="price">
                {choosedArticle?.owned ? (
                  <>
                    <p>{choosedArticle?.price} $</p>
                    <p>
                      {choosedArticle?.choosed ? (
                        "choosed"
                      ) : (
                        <button
                          onClick={() => handleChooseArticle(choosedArticle.id)}
                        >
                          choose
                        </button>
                      )}
                    </p>
                  </>
                ) : (
                  <button
                    onClick={() => {
                      handleBuyArticle(choosedArticle?.id);
                    }}
                  >
                    Buy Now {choosedArticle?.price}$
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
                {items?.map((article) => {
                  if (
                    (selectedCategory == "avatars" ||
                      selectedCategory == "all") &&
                    article.type == "avatar"
                  ) {
                    return (
                      <div
                        key={article.img}
                        onClick={() => setChoosedArticle(article)}
                      >
                        <Image
                          className="img"
                          src={`http://localhost:3000/av/${article.img}`}
                          alt="avatar"
                          width={200}
                          height={200}
                        />

                        {article.owned ? (
                          ""
                        ) : (
                          <span className="notOwnedPrice">
                            {article.price} $
                          </span>
                        )}
                      </div>
                    );
                  } else if (
                    article.type == "paddle" &&
                    (selectedCategory == "paddles" || selectedCategory == "all")
                  ) {
                    return (
                      <div
                        key={article.id}
                        onClick={() => setChoosedArticle(article)}
                      >
                        <Image
                          className="img"
                          src={`http://localhost:3000/pd/${article.img}`}
                          alt="paddle"
                          width={200}
                          height={200}
                        />
                        {article.owned ? (
                          ""
                        ) : (
                          <span className="notOwnedPrice">
                            {article.price} $
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
      )}
    </>
  );
};

export default Store;
