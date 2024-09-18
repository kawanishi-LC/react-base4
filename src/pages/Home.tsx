import { Header } from "../components/Header";
import { Description } from "../components/Description";
import { DogListContainer } from "../components/DogListContainer";

export const Home = () => {

  return (
    <>
      <div>
        <Header />
        <main className="contents">
          <Description />
          <DogListContainer />
        </main>
      </div>
    </>
  );
};
