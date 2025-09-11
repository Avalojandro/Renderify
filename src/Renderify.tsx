import React from "react";
import { useEffect, useState } from "react";

type RenderifyProps = {
  condition: boolean;
  elseShow?: React.ReactNode;
  children: React.ReactNode;
  delay?: number;
  noDestroy?: boolean;
  onShow?: () => void;
  onHide?: () => void;
};

const Renderify: React.FC<RenderifyProps> = ({
  condition,
  elseShow = null,
  children,
  onShow,
  onHide,
  noDestroy = false,
  delay = 0,
}) => {
  const [shouldRender, setShouldRender] = useState(condition);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (delay > 0) {
      timeout = setTimeout(() => {
        setShouldRender(condition);
      }, delay);
    } else {
      setShouldRender(condition);
    }

    return () => clearTimeout(timeout);
  }, [condition, delay]);

  useEffect(() => {
    if (shouldRender) {
      onShow?.();
    } else {
      onHide?.();
    }
  }, [shouldRender]);

  const renderifyManager = () => {
    if (!noDestroy) {
      return shouldRender ? children : elseShow;
    }

    return (
      <>
        <div
          style={
            !shouldRender
              ? { display: "none" }
              : { display: "contents" }
          }
        >
          {children}
        </div>
        <div
          style={
            shouldRender
              ? { display: "none" }
              : { display: "contents" }
          }
        >
          {elseShow}
        </div>
      </>
    );
  };

  return <>{renderifyManager()}</>;
};

export default Renderify;