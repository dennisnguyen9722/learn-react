import React from "react";
import PropTypes from "prop-types";
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "Bolero Hay Nhất",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/1/5/9/2/159226aaebc0421c28d4921c041dc862.jpg",
    },
    {
      id: 2,
      name: "Bolero Mới Nhất",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/7/6/c/7/76c747ffc5ad50f1bba57934eaec1213.jpg",
    },
    {
      id: 3,
      name: "Liên Khúc Nhạc Vàng",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/c/4/9/a/c49ac241fec9f01bf2f8398b9da66e95.jpg",
    },
  ];

  return (
    <div>
      <h2>Có thể bạn sẽ thích đấy</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
