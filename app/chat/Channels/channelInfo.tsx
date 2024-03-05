import channelsData from "../../data/channels_list.json";
import { CHANNEL_DATA } from "@/app/Interfaces/channelDataInterface";
import Image from "next/image";
import "./channelChat.css";
import { GiCancel } from "react-icons/gi";

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
  console.log("MMMMMMM", channelNormalUsers);
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
            <div className="status">{channelOwner.type}</div>
          </div>
        ) : (
          ""
        )}
        {channelAdmins?.map((adminUser) => {
          return (
            <div className="admin" key={adminUser.avatar}>
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
              <div className="status">{adminUser.type}</div>
            </div>
          );
        })}
        {channelNormalUsers?.map((normalUser) => {
          return (
            <div className="user" key={normalUser.avatar}>
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
