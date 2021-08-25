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
        <circle cx="132" cy="142" r="124" />
        <rect x="0" y="283" rx="6" ry="6" width="245" height="27" />
 
        <rect x="0" y="418" rx="6" ry="6" width="91" height="31" />
        <rect x="137" y="408" rx="25" ry="25" width="140" height="46" />
      </ContentLoader>
    </div>
  );
}

export default LoadingBlock;
