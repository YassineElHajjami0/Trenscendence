"use client";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";
import { IoCameraReverse } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";
import "./channelChat.css";

type FormFields = {
  name: string;
  topic: string;
  status: string;
  myFile: FileList | null | File;
};

interface popupProps {
  setShowPopUpCreateChannel: React.Dispatch<React.SetStateAction<boolean>>;
}

const PopupCreateChannel: React.FC<popupProps> = ({
  setShowPopUpCreateChannel,
}) => {
  const [selectedChannelPicture, setSelectedChannelPicture] = useState(
    "/channelDefaultImage.png"
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    setShowPopUpCreateChannel(false);
    setSelectedChannelPicture("/channelDefaultImage.png");
    console.log(data);
    reset();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      let file = URL.createObjectURL(files[0]);
      console.log("fiel>>>>>>>", file);

      setSelectedChannelPicture(file);
      reset({ myFile: files[0] });
    }
  };

  return (
    <div className="popupContainer">
      <button
        className="cancelBtn"
        onClick={() => {
          setShowPopUpCreateChannel(false);
          reset();
        }}
      >
        <MdOutlineCancel />
      </button>
      <h3>create channel</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="imageContainer">
          <Image
            className="img"
            src={selectedChannelPicture}
            width={130}
            height={130}
            alt=""
          />
          <div className="chooseImageBtn">
            <label htmlFor="file-upload" className="">
              <IoCameraReverse />
            </label>
            <input
              type="file"
              id="file-upload"
              className="custom-file-input"
              accept=".jpg , .png , .jpeg"
              {...register("myFile")}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className="nameInput">
          <label htmlFor="channelName">channel name</label>
          <input
            {...register("name", {
              required: "name is required",
              minLength: {
                value: 3,
                message: "name must have at least 3 characters",
              },
              maxLength: 25,
            })}
            type="text"
            name="name"
            id="channelName"
            placeholder="name"
          />
        </div>
        <div className="errorMsg">{errors.name?.message}</div>
        <div className="topicInput">
          <label htmlFor="channeltopic">channel topic</label>
          <input
            {...register("topic", {
              required: "topic is required",
              minLength: {
                value: 3,
                message: "topic must have at least 3 characters",
              },
              maxLength: 50,
            })}
            type="text"
            name="topic"
            id="channeltopic"
            placeholder="topic"
          />
        </div>
        <div className="errorMsg">{errors.topic?.message}</div>
        <div className="channelType">
          <div>
            <input
              type="radio"
              id="public"
              value="public"
              {...register("status")}
              defaultChecked
            />
            <label htmlFor="public">public</label>
          </div>
          <div>
            <input
              type="radio"
              id="private"
              value="private"
              {...register("status")}
            />
            <label htmlFor="private">private</label>
          </div>
          <div>
            <input
              type="radio"
              id="protected"
              value="protected"
              {...register("status")}
            />
            <label htmlFor="protected">protected</label>
          </div>
        </div>
        <button
          className="createChannelBtn"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "creating..." : "create"}
        </button>
      </form>
    </div>
  );
};

export default PopupCreateChannel;
