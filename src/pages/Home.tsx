import YIEButton from "../YIEUI/YIEButton";
import { YIETypography } from "../YIEUI/YIETypography";

const Home = () => {
  return (
    <div>
      Home Page
      <YIEButton content="Button One" bgColor="red" />
      <YIEButton content="Button One" bgColor="blue" />
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
    </div>
  );
};

export default Home;
