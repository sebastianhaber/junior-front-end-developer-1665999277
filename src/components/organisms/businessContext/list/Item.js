import { useState, useEffect } from "react";
import { BUSINESS_CONTEXT_STATUS } from "../../../../mocked/tasks";
import { getFormattedDate } from "../../../../utils/time";
import { StyledItem } from "./List.styles";

function Item({ item, ...props }) {
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");

  // get date
  useEffect(() => {
    const timestamp = new Date(item.created_at);
    setDate(getFormattedDate(timestamp, false, true));
  }, [item.created_at]);

  // substring title and content
  useEffect(() => {
    const shortMessage =
      item.content.length > 90
        ? `${item.content.substring(0, 90)}...`
        : item.content;
    const substrTitle =
      item.title.length > 40 ? `${item.title.substring(0, 40)}...` : item.title;

    setTitle(substrTitle);
    setMessage(shortMessage);
  }, [item.content, item.title]);

  return (
    <StyledItem
      new={item.status === BUSINESS_CONTEXT_STATUS.notRead}
      status={item.status}
      {...props}
    >
      <div className="heading">
        <p>
          {item.author.name} • {date}
        </p>
      </div>
      <div className="title">{title}</div>
      <div className="message">{message}</div>
    </StyledItem>
  );
}

export default Item;
