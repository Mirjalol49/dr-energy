import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const hiddenStyles = {
  display: 'inline-block',
  position: 'absolute',
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  height: 1,
  width: 1,
  margin: -1,
  padding: 0,
  border: 0,
};

export function VisuallyHidden({ children, ...delegated }) {
  const [forceShow, setForceShow] = useState(false);

  useEffect(() => {
    if (import.meta.env.DEV) {
      const handleKeyDown = (ev) => {
        if (ev.key === 'Alt') {
          setForceShow(true);
        }
      };
      const handleKeyUp = (ev) => {
        if (ev.key === 'Alt') {
          setForceShow(false);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('keyup', handleKeyUp);
      };
    }
  }, []);

  if (forceShow) {
    return children;
  }

  return (
    <span style={hiddenStyles} {...delegated}>
      {children}
    </span>
  );
}

VisuallyHidden.propTypes = {
  children: PropTypes.node,
};
