import { useEffect } from "react";
import PageWrapper from "../../components/page-wrapper/PageWrapper";
import { useParams } from "react-router-dom";
import axios from "../../helper/ApiHelper";

const WelcomePage = () => {
  const { id } = useParams();
  const getSingleUsr = () => {
    if (id) {
      axios
        .get(`user/id/${id}`)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  useEffect(() => {
    getSingleUsr();
  }, []);
  return (
    <PageWrapper title="Welcome">
      <div>WelcomePage</div>
    </PageWrapper>
  );
};

export default WelcomePage;
