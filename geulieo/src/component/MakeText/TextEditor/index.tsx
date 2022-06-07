import React, { FC } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { imageStateValue } from "../../../modules/atom/TextEditor";
import ChangeStyle from "./ChangeStyle";
import TextInput from "./TextInput";

const TextEditor: FC = () => {
  const imageState = useRecoilValue(imageStateValue);

  return (
    <>
      {imageState.url ? (
        <Container>
          <ImageContainer>
            <div>
              <Image
                src={imageState.url}
                alt="background"
                width={imageState.width}
                height={imageState.height}
                radius={imageState.radius}
              />
            </div>
          </ImageContainer>
          <ChangeStyleContainer>
            <ChangeStyle />
            <TextInput />
          </ChangeStyleContainer>
        </Container>
      ) : (
        <Container />
      )}
    </>
  );
};

export default TextEditor;

const Container = styled.div`
  width: 1000px;
  height: 500px;
  border-radius: 10px;
  background: linear-gradient(96.13deg, #ffffff -0.77%, #95e1d3 94.5%);
  box-shadow: 0px 4px 17px rgba(164, 164, 164, 0.25);
  margin-top: 25px;
  display: flex;
  align-items: center;
`;

const ImageContainer = styled.div`
  position: relative;
  margin-left: 80px;
  width: 600px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img<{
  width: number;
  height: number;
  radius: number;
}>`
  max-width: 600px;
  max-height: 400px;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  border-radius: ${({ radius }) => `${radius}px`};
  image-rendering: -webkit-optimize-contrast;
  transform: translateZ(0);
  backface-visibility: hidden;
`;

const ChangeStyleContainer = styled.div`
  margin-left: 78px;
`;