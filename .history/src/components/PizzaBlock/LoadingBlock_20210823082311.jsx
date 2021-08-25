import React from 'react';
import ContentLoader from 'react-content-loader';
function LoadingBlock() {
  return (
    <div>
      <ContentLoader
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <circle cx="127" cy="143" r="124" />
        <rect x="12" y="283" rx="0" ry="6" width="245" height="27" />
        <rect x="16" y="330" rx="0" ry="6" width="242" height="60" />
        <rect x="160" y="408" rx="0" ry="6" width="91" height="26" />
        <rect x="20" y="407" rx="0" ry="6" width="91" height="26" />
      </ContentLoader>
    </div>
  );
}

export  LoadingBlock;
