export const DogImage = (props: { imageUrl: string | undefined; }) => {
  return (
    <>
      <img src={props.imageUrl} alt="犬の画像" />
    </>
  );
};

export default DogImage;
