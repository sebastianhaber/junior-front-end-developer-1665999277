import React, { useState } from "react";
import { useEffect } from "react";
import { BUSINESS_CONTEXT_STATUS } from "../../../../mocked/tasks";
import { getFormattedDate } from "../../../../utils/time";
import { StyledItem } from "./List.styles";

function Item({ item, ...props }) {
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  // get date
  useEffect(() => {
    const timestamp = new Date(item.created_at);
    setDate(getFormattedDate(timestamp, false, true));
  }, [item.created_at]);

  // substring content
  useEffect(() => {
    const shortMessage = `${item.content.substring(0, 99)}...`;
    setMessage(shortMessage);
  }, [item.content]);

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
      <div className="title">{item.title}</div>
      <div className="message">{message}</div>
    </StyledItem>
  );
}

export default Item;
