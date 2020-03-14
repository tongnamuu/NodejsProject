import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "My Video Player";
  res.locals.routes = routes;
  next();
};
