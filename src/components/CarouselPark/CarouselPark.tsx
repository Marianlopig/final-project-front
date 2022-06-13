import Carousel from "react-gallery-carousel";
import { IPark } from "../../redux/types/parkInterfaces";

interface ICarousel {
  image: string;
  caption: string;
}

const CarouselPark = ({
  id,
  name,
  description,
  photos,
  photosBackup,
  location,
  details,
  owner,
  address,
}: IPark) => {
  const data = (photosBackup: string[]): ICarousel[] | undefined => {
    if (photosBackup) {
      const pictures = photosBackup.map((photo) => ({
        image: `${process.env.REACT_APP_API_URL}/${photo}`,
        caption: "",
      }));
      return pictures;
    }
  };

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            padding: "0 20px",
          }}
        >
          <Carousel
            data={data(park)}
            time={2000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CarouselPark;
