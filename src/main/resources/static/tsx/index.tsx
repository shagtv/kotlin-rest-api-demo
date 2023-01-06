import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Board from "./board";

const container = document.getElementById('container');
const root = ReactDOM.createRoot(container);
root.render(
    <Board />
);
