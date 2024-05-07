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
import { useRouter } from "next/router";

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

interface dataInterface {
  avatar: string;
  banner: string;
  username: string;
  email: string;
  oldPassword: string;
  newPassword: string;
  confirmedPassword: string;
  bio: string;
  twoFA: boolean;
  wallet: number;
}

const Store = () => {
  //http://10.12.4.13:3001/users
  const [loading, setLoading] = useState(true);
  const userTok = useRecoilValue(userToken);
  const [popUpCannotBuy, setPopUpCannotBuy] = useState(false);
  const [choosedArticle, setChoosedArticle] = useState<itemsInterface>();
  const [prevchoosedArticle, setPrevChoosedArticle] = useState<number>();
  const [items, setItems] = useState<itemsInterface[]>();
  const [selectedCategory, setselectedCategory] = useState("all");
  const [userData, setUserData] = useState<dataInterface>();
  const all = playerData.avatarsAndPaddles;
  const playerPoints = playerData.statistic.points;
  const userId = useRecoilValue(loggedUser);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    const fetchedData = async () => {
      try {
        const responseUser = await fetch(
          `http://localhost:3000/users/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${userTok}`,
              "Content-Type": "application/json",
            },
          }
        );
        const dataofUser = await responseUser.json();
        console.log("data of user : ", dataofUser);
        setUserData(dataofUser);

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
        
        let oldestChoosedArticle:itemsInterface| undefined = data.find(e => e.choosed == true)
        setPrevChoosedArticle(oldestChoosedArticle?.id);
        console.log("_______>>>", data);
        setItems(data);
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
      })
        .then(() => {
          console.log(">>>>>>>>>>>>>>>baaa3>>>>>>>>>>");
          const updatedItems = items?.map((item) => {
            if (item.id === id) {
              return {
                ...item,
                owned: true,
              };
            }
            return item;
          });
          setItems(updatedItems);
          const updatedchoosedArticle: any = {
            ...choosedArticle,
            owned: true,
          };
          setChoosedArticle(updatedchoosedArticle);
        })
        .catch((errorResponse) => {
          throw new Error(
            `Failed to POST data. Error: ${errorResponse.message}`
          );
        });
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
        oldId: choosedArticle?.id,
      }),
    })
      .then(() => {
        console.log(">>>>>>>>>>>>>>>baaa3>>>>>>>>>>");
        const updatedItems = items?.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              choosed: true,
            };
          }
          return { ...item, choosed: false };
        });
        setItems(updatedItems);
        const updatedchoosedArticle: any = {
          ...choosedArticle,
          choosed: true,
        };
        setChoosedArticle(updatedchoosedArticle);
        setPrevChoosedArticle(updatedchoosedArticle.id);
      })
      .catch((errorResponse) => {
        throw new Error(`Failed to POST data. Error: ${errorResponse.message}`);
      });
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
                <p className="player-points"> {userData?.wallet} $</p>
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
