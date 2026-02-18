// Import the React library, which is necessary to create React components
import React from 'react';

// Import the AnimatedCursor component from the react-animated-cursor package
import AnimatedCursor from 'react-animated-cursor';

// Define a functional component called AnimateCursor
const AnimateCursor = () => {
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: '#00C853'
        }}
        outerStyle={{
          border: '3px solid #00C853'
        }}
        clickScale={1.5}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
          '.MuiButton-root',
          '.MuiCard-root',
          '.cursor-pointer'
        ]}
      />
    </>
  );
};

// Export the AnimateCursor component as the default export from this module
export default AnimateCursor;
