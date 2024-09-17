import { Header } from "../components/Header";
import { Description } from "../components/Description";
import { DogListContainer } from "../components/DogListContainer";

export const Home = () => {

  return (
    <>
      <div>
        <Header />
        <Description />
        <DogListContainer />
      </div>
    </>
  );
};
