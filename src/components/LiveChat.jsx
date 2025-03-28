import React, { useEffect } from "react";

const LiveChat = () => {
  useEffect(() => {
    window.__lc = window.__lc || {};
    window.__lc.license = 19093997;
    window.__lc.integration_name = "manual_onboarding";
    window.__lc.product_name = "livechat";

    const script = document.createElement("script");
    script.async = true;
    script.type = "text/javascript";
    script.src = "https://cdn.livechatinc.com/tracking.js";
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null; // This component only loads the script, no UI needed
};

export default LiveChat;
