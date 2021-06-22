import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@CarsApp/cars-app-header",
  app: () => System.import("@CarsApp/cars-app-header"),
  activeWhen: ["/"]
});

registerApplication({
  name: "@CarsApp/cars-app-sidebar",
  app: () => System.import("@CarsApp/cars-app-sidebar"),
  activeWhen: ["/"]
});

registerApplication({
  name: "@CarsApp/cars-app-feed",
  app: () => System.import("@CarsApp/cars-app-feed"),
  activeWhen: ["/feed"]
});

registerApplication({
  name: "@CarsApp/cars-app-form",
  app: () => System.import("@CarsApp/cars-app-form"),
  activeWhen: ["/form"]
});

start({
  urlRerouteOnly: true,
});
