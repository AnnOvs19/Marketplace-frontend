export { auth as middleware } from "@/configs/auth";

export const configPrivateRoute = {
  matcher: [
    "/accountUser",
    "/editAccountUser",
    "/myOrders",
    "/accountSeller",
    "/editAccountSel",
    "/allOrdersClient",
    "/createMyProduct",
    "/createNewsArticle",
    "/editMyProduct/:id*",
    "/editNewsArticle/:id*",
    "/myProducts"
  ]
};
