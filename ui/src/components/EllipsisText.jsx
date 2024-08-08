import React, { useState } from "react";

function EllipsisText({ text, maxLength = 100, showReadMore = true }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const truncatedText = isExpanded ? text : text.slice(0, maxLength) + "... ";

  const handleReadMoreClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <p className="pdp-description-truncate-text">{truncatedText}</p>
      {showReadMore && !isExpanded && (
        <button
          className="pdp-description-ellipsis"
          onClick={handleReadMoreClick}
        >
          Read More
        </button>
      )}
      {showReadMore && isExpanded && (
        <button
          className="pdp-description-ellipsis"
          onClick={handleReadMoreClick}
        >
          Show Less
        </button>
      )}
    </div>
  );
}

export default EllipsisText;
