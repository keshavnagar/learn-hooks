import { useEffect } from "react";

const SimpleUseEffect = () => {
  useEffect(() => {
    console.log(
      "This is run when our SimpleUseEffect component mounted , and only one time because"
    );
  }, []);
  return <></>;
};
export default SimpleUseEffect;
