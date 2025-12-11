import React from "react";
import { NewsCard } from "../../../../components/NewsCard";
import { ArrowUpRightIcon147 } from "../../../../icons/ArrowUpRightIcon147";
import { MaterialSymbolsLightTimerOutline27 } from "../../../../icons/MaterialSymbolsLightTimerOutline27";

export const NewsContent = () => {
  return (
    <>
      <div className="SEE-THE-FULL-STORY">
        <div className="text-wrapper-109">SEE MORE NEWS</div>
        <ArrowUpRightIcon147 className="icon-instance-node-2" color="#26824A" />
      </div>

      <div className="news-holder">
        <NewsCard
          className="design-component-instance-node-3"
          override={
            <MaterialSymbolsLightTimerOutline27 className="icon-instance-node-3" />
          }
        />
        <NewsCard
          className="design-component-instance-node-3"
          imageClassName="news-card-instance"
          override={
            <MaterialSymbolsLightTimerOutline27 className="icon-instance-node-3" />
          }
        />
        <NewsCard
          className="design-component-instance-node-3"
          imageClassName="news-card-2"
          override={
            <MaterialSymbolsLightTimerOutline27 className="icon-instance-node-3" />
          }
        />
        <NewsCard
          className="design-component-instance-node-3"
          imageClassName="news-card-3"
          override={
            <MaterialSymbolsLightTimerOutline27 className="icon-instance-node-3" />
          }
        />
      </div>

      <div className="sub-heading-4">
        <p className="text-wrapper-116">
          Read latest news and updates on our IUS policies
        </p>
      </div>

      <div className="heading-3">
        <p className="text-wrapper-117">Stay informed with the latest news</p>
      </div>
    </>
  );
};

