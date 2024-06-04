import "./App.css";
import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Rooms from "./Rooms";
import Layout from "./Layout";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">홈</Link>
        <Link to="/photo">사진</Link>
        <Link to="/rooms">방소개</Link>

        <br />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/photo" element={<Photo />} />
          <Route path="/rooms" element={<Layout />}>
            <Route path=":id" element={<Rooms />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function Home({ match }) {
  return <h2>여기는 홈페이지 입니다.</h2>;
}

function Photo({ match }) {
  return <h2>여기는 사진방 입니다.</h2>;
}
