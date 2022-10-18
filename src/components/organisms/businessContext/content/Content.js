import React, { useContext } from "react";
import Image from "../../../../utils/Image";
import ImageUrl from "../../../../assets/mEZ3PoFGs_k.png";
import { useState } from "react";
import { useEffect } from "react";
import { getFormattedDate, timeAgo } from "../../../../utils/time";
import { StyledContent } from "./Content.styles";
import { AppContext } from "../../../../context/Context";

function Content() {
  const { activeBusinessContext: content } = useContext(AppContext);
  const [date, setDate] = useState({
    day: "",
    time: "",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (content) {
      const date = new Date(content.created_at);
      const day = timeAgo(date);
      const time = getFormattedDate(date, false, false, true);

      setDate({
        day,
        time,
      });

      setMessage(content.content);
    }
  }, [content]);

  if (!content) return null;

  return (
    <StyledContent>
      <p className="title">{content.title}</p>
      <div className="wrapper">
        <div className="image-container">
          <Image url={ImageUrl} alt={content.author.name} />
        </div>
        <div className="wrapper__content">
          <div className="wrapper__content__header">
            <p className="wrapper__content__header__author">
              {content.author.name}
            </p>
            <p>
              • {date.day} • {date.time}
            </p>
          </div>
          <div className="wrapper__content__message">{message}</div>
        </div>
      </div>
    </StyledContent>
  );
}

export default Content;
