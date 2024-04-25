import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['button-example']: ButtonWebComponent;
    }
  }
}

interface ButtonWebComponent extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  label?: string;
  onClick?: () => void;
}
