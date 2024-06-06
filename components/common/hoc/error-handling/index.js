import React from 'react';
import Custom404 from '@pages/404'; 

const withErrorHandling = (WrappedComponent) => {
    const ComponentWithErrorHandling = (props) => {
      if (!props.data) {
        return <Custom404 {...props} />;
      }
  
      return <WrappedComponent {...props} />;
    };
  
    return ComponentWithErrorHandling;
  };
  
  export default withErrorHandling;