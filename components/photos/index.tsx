"use client";

import React, { useState } from "react";
import {
  GalleryImage,
  Parent,
  GalleryThumb,
  GalleryThumbnails,
} from "./styles";

const Photos = ({ photos }: { photos: string[] }) => {
  const [photo, setPhoto] = useState(photos[0]);
  return (
    <Parent>
      <GalleryImage>
        <img src={photo} alt="gallery" />
      </GalleryImage>
      <GalleryThumbnails>
        {photos.map((p, index) => (
          <GalleryThumb key={p} onClick={() => setPhoto(photos[index])}>
            <img src={p} alt="thumbnail" />
          </GalleryThumb>
        ))}
      </GalleryThumbnails>
    </Parent>
  );
};

export default Photos;
