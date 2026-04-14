import type { FC } from "react";
import { useRoutes } from "react-router-dom";
import Main from "../pages/main";

const Router: FC = () => {
    const routes = [
        {
            path: '/',
            element: <Main />
        }
    ]

    const element = useRoutes(routes);

    return element;
}

export default Router;