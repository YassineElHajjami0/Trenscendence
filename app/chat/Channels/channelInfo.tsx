import channelsData from "../../data/channels_list.json";
import { CHANNEL_DATA } from "@/app/Interfaces/channelDataInterface";
import PlayerData from "../../data/player-info.json";
import Image from "next/image";
import "./channelChat.css";
import { GiCancel } from "react-icons/gi";
import { BsThreeDotsVertical } from "react-icons/bs";

type CHANNELUSER = {
  id: number;
  type: string;
  name: string;
  avatar: string;
};

const ChannelInfo = ({ selectedChannel }: { selectedChannel: number }) => {
  let selectedChannelData: CHANNEL_DATA | undefined = channelsData.find((e) => {
    return e.channel_id === selectedChannel;
  });
  let channelOwner: CHANNELUSER | undefined = selectedChannelData?.members.find(
    (e) => e.type == "owner"
  );
  let channelAdmins: CHANNELUSER[] | undefined =
    selectedChannelData?.members.filter((e) => e.type == "admin");
  let channelNormalUsers: CHANNELUSER[] | undefined =
    selectedChannelData?.members.filter((e) => e.type == "user");
  let myTypeInTheChannel = selectedChannelData?.members.find(
    (e) => e.id === PlayerData.uid
  );
  const handleRemoveAdminClick = (id: number) => {};
  const handleAdminClick = (id: number) => {};
  const handleKickClick = (id: number) => {};
  const handleBlockClick = (id: number) => {};
  const handleMuteClick = (id: number) => {};
  console.log("myTypeInTheChannel=>", myTypeInTheChannel);
  return (
    <div className="selectedChannelData">
      <div className="ChannelImage">
        <Image
          src={selectedChannelData?.avatar ?? "/default.png"}
          width={100}
          height={100}
          alt="avatar"
        />
      </div>
      <h3 className="channelName">{selectedChannelData?.channel_name}</h3>
      <p className="topic">{selectedChannelData?.topic}</p>

      <div className="members">
        {channelOwner != undefined ? (
          <div className="owner">
            <div className="imageNameContainer">
              <div className="userPic">
                <Image
                  className="pic"
                  src={channelOwner.avatar}
                  width={50}
                  height={50}
                  alt="avatar"
                />
              </div>
              <div className="name">{channelOwner.name}</div>
            </div>
            <div className="status">
              <span className="type">{channelOwner.type}</span>
            </div>
          </div>
        ) : (
          ""
        )}
        {channelAdmins?.map((adminUser) => {
          return (
            <div className="admin" key={adminUser.id}>
              <div className="imageNameContainer">
                <div className="userPic">
                  <Image
                    className="pic"
                    src={adminUser.avatar}
                    width={50}
                    height={50}
                    alt="avatar"
                  />
                </div>
                <div className="name">{adminUser.name}</div>
              </div>
              <div className="status">
                <span className="type">{adminUser.type}</span>
                {myTypeInTheChannel?.type === "owner" ? (
                  <>
                    <span className="actionsBtn">
                      {myTypeInTheChannel?.type === "owner" ? (
                        <BsThreeDotsVertical className="btn" />
                      ) : (
                        ""
                      )}
                      <span className="actions">
                        <ul>
                          <li>
                            {myTypeInTheChannel?.type === "owner" ? (
                              <li
                                onClick={() =>
                                  handleRemoveAdminClick(adminUser.id)
                                }
                              >
                                Rm Admin
                              </li>
                            ) : (
                              ""
                            )}
                          </li>
                          <li onClick={() => handleKickClick(adminUser.id)}>
                            kick
                          </li>
                          <li onClick={() => handleBlockClick(adminUser.id)}>
                            Block
                          </li>
                          <li onClick={() => handleMuteClick(adminUser.id)}>
                            Mute
                          </li>
                        </ul>
                      </span>
                    </span>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          );
        })}
        {channelNormalUsers?.map((normalUser) => {
          return (
            <div className="user" key={normalUser.id}>
              <div className="imageNameContainer">
                <div className="userPic">
                  <Image
                    className="pic"
                    src={normalUser.avatar}
                    width={50}
                    height={50}
                    alt="avatar"
                  />
                </div>
                <div className="name">{normalUser.name}</div>
              </div>
              <div className="actionsBtn">
                {myTypeInTheChannel?.type === "owner" ||
                myTypeInTheChannel?.type === "admin" ? (
                  <BsThreeDotsVertical />
                ) : (
                  ""
                )}
                {myTypeInTheChannel?.type === "owner" ||
                myTypeInTheChannel?.type === "admin" ? (
                  <span className="actions">
                    <ul>
                      <li>
                        {myTypeInTheChannel?.type === "owner" ? (
                          <li onClick={() => handleAdminClick(normalUser.id)}>
                            Admin
                          </li>
                        ) : (
                          ""
                        )}
                      </li>
                      <li onClick={() => handleKickClick(normalUser.id)}>
                        kick
                      </li>
                      <li onClick={() => handleBlockClick(normalUser.id)}>
                        Block
                      </li>
                      <li onClick={() => handleMuteClick(normalUser.id)}>
                        Mute
                      </li>
                    </ul>
                  </span>
                ) : (
                  ""
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="leaveBtn">
        <GiCancel className="cancelBtn" />
        <p>Leave {selectedChannelData?.channel_name}</p>
      </div>
    </div>
  );
};

export default ChannelInfo;
