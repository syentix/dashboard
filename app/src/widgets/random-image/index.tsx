import React from "react";

import useTriggerUpdate from "common/hooks/useTriggerUpdate";

import { WidgetProps } from "../index";

export { saga } from "./sagas";



const RandomImage: React.FC<Props> = ({
  id,
  meta,
  triggerUpdate,
  imageUrl,
  authorName,
  authorUrl,
}) => {
  useTriggerUpdate({ id, params: {}, meta, triggerUpdate }, []);

  return (
    <figure>
      <span className="text-1" style={{fontSize: 10}}>Photo by <a href={authorUrl+"?utm_source=dashboard&utm_medium=referral"}>{authorName}</a> on <a href="https://unsplash.com/?utm_source=dashboard&utm_medium=referral">Unsplash</a></span>
      <img
        src={imageUrl}
        className="h-full w-full object-fit-cover"
       alt={"Unsplash Photo by " + authorName}
      />
    </figure>
  );
};

interface Props extends WidgetProps {
  imageUrl: string;
  authorName: string;
  authorUrl: string;
}

export default RandomImage;