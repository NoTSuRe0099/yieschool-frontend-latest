import YIEButton from "../YIEUI/YIEButton";
import YIECarousel from "../YIEUI/YIECarousel";
import { YIETypography } from "../YIEUI/YIETypography";

export const CarouselData = [
  {
    url: "/",
    title: "test",
    image:
      "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    url: "/",
    title: "test",
    image:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
  },
  {
    url: "/",
    title: "test",
    image:
      "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
  },
  {
    url: "/",
    title: "test",
    image:
      "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
  },
];

const Home = () => {
  return (
    <div>
      Home Page
      <YIEButton content="Button One" bgColor="red" />
      <YIEButton content="Button One" bgColor="blue" />
      {/* Typography starts here */}
      <YIETypography component="h1" variant="h1">
        H1 - Lorem ipsum dolor sit amet.
      </YIETypography>
      <YIETypography component="h2" variant="h2">
        H2 - Lorem ipsum dolor sit amet.
      </YIETypography>
      <YIETypography component="h3" variant="h3">
        H3 - Lorem ipsum dolor sit amet.
      </YIETypography>
      <YIETypography component="h4" variant="h4">
        H4 - Lorem ipsum dolor sit amet.
      </YIETypography>
      <YIETypography component="h5" variant="h5">
        H5 - Lorem ipsum dolor sit amet.
      </YIETypography>
      <YIETypography component="h6" variant="h6">
        H6 - Lorem ipsum dolor sit amet.
      </YIETypography>
      <YIETypography component="p" variant="p">
        P - Lorem ipsum dolor sit amet.
      </YIETypography>
      <YIETypography
        component="p"
        variant="p"
        styleNames="text-purple-700"
        lead
      >
        with color- Lorem ipsum dolor sit amet.
      </YIETypography>
      {/* slider starts here */}
      <YIECarousel slides={CarouselData} />
    </div>
  );
};

export default Home;
