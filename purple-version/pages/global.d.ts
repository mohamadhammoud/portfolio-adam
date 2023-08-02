interface Window {
  threejsToys: {
    neonCursor: (options: {
      el: HTMLElement;
      shaderPoints?: number;
      curvePoints?: number;
      curveLerp?: number;
      radius1?: number;
      radius2?: number;
      velocityTreshold?: number;
      sleepRadiusX?: number;
      sleepRadiusY?: number;
      sleepTimeCoefX?: number;
      sleepTimeCoefY?: number;
    }) => void;
    // add any other properties you might need from the threejs-toys library here
  };
}
//   This will declare the threejsToys property on the Window object for your entire application, including any client-side code that runs in the browser.

//   Make sure to import this file in any component that uses the threejsToys library, and TypeScript should no longer complain about the missing property.
