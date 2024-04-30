import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['button-example']: ButtonWebComponent;
      ['module-example']: ModuleWebComponent;
    }
  }
}

interface ButtonWebComponent extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  label?: string;
  onClick?: () => void;
}

interface ModuleWebComponent extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {}
