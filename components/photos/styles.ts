import styled from "styled-components";

export const GalleryImage = styled.div`
  width: 100%;
  height: 83%;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const Parent = styled.div`
  height: 500px;
  width: 70%;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 960px) {
    width: 50%;
  }
  @media (max-width: 750px) {
    width: 90%;
  }
`;

export const GalleryThumbnails = styled.ul`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  list-style: none;
  height: 12%;
`;

export const GalleryThumb = styled.li`
  width: 100%;
  cursor: pointer;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
