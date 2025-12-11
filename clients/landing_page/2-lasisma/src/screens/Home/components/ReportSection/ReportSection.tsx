import React from "react";
import { ReportForm } from "../../../../components/ReportForm";
import { IconamoonArrowDown2Light1 } from "../../../../icons/IconamoonArrowDown2Light1";
import { CloudUploadIcon2 } from "../../../../icons/CloudUploadIcon2";

export const ReportContent = () => {
  return (
    <div className="report">
      <div className="stop-sign-image" />
      <ReportForm
        className="design-component-instance-node-2"
        override={
          <IconamoonArrowDown2Light1 className="iconamoon-arrow-down" />
        }
        override1={<CloudUploadIcon2 className="icon-instance-node-3" />}
      />
    </div>
  );
};

