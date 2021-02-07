import React, { useState, useEffect } from "react";
import "./index.scss";

interface Props {
  delay?: number;
  timeout?: number;
}

function Loading(props: Props) {
  const [pastDelay, setPastDelay] = useState(false);
  const [timedOut, setTimedOut] = useState(false);

  useEffect(() => {
    const delay = props.delay;
    const timeout = props.timeout;
    let delayTimer: number;
    let timeoutTimer: number;

    if (delay && delay > 0) {
      delayTimer = window.setTimeout(() => setPastDelay(true), delay);
    } else {
      setPastDelay(true);
    }

    if (timeout && timeout > 0) {
      timeoutTimer = window.setTimeout(() => setTimedOut(true), timeout);
    }

    return () => {
      if (delayTimer) {
        clearTimeout(delayTimer);
      }

      if (timeoutTimer) {
        clearTimeout(timeoutTimer);
      }
    };
  }, [props.delay, props.timeout]);

  function getContent() {
    if (timedOut) {
      return (
        <div className="Loading-content">
          <div className="Loading-error" />
          <div>Timed out while loading content</div>
        </div>
      );
    } else if (pastDelay) {
      return (
        <div className="Loading-content">
          <div className="Loading-spinner" />
          <div>Loading</div>
        </div>
      );
    }

    return null;
  }

  return <div className="Loading">{getContent()}</div>;
}

export default Loading;
