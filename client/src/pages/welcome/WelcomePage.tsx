import { useEffect, useRef, useState } from "react";
import PageWrapper from "../../components/page-wrapper/PageWrapper";
import { useParams } from "react-router-dom";
import axios from "../../helper/ApiHelper";
import "./welcomePage.css";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";

type USER = {
  firstName: string;
  lastName: string;
  email: string;
};

const WelcomePage = () => {
  const [userInfo, setUserInfo] = useState<USER>();
  const title = useRef("");
  const description = useRef("");
  const { id } = useParams();
  const [err, setErr] = useState("");

  const getSingleUsr = () => {
    if (id) {
      axios
        .get(`user/id/${id}`)
        .then((res) => {
          console.log(res.data);
          setUserInfo(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  useEffect(() => {
    getSingleUsr();
  }, []);

  const handleNewPost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post(`/post/id/${id}/newpost`, {
        title: title.current,
        description: description.current,
        userId: id,
      })
      .then((res) => {
        if (res) {
          console.log(res.data);
        }
      })
      .catch((err) => {
        setErr(err.message);
      });
  };
  return (
    <PageWrapper title="">
      <div className="welcome-wrapper">
        <div className="welcome-box">
          <span>Welcome</span>
          <div className="user-name">{userInfo?.firstName},</div>
        </div>

        <div className="new-post">
          <form className="add-new-post" onSubmit={handleNewPost}>
            <label>Post Title</label>
            <input
              placeholder="Post Title"
              type="text"
              onChange={(e) => (title.current = e.target.value)}
            />
            <label>Post Description</label>
            <textarea
              placeholder="Description"
              typeof="text"
              onChange={(e) => (description.current = e.target.value)}
            />
            <button className="register-submit-button" type="submit">
              Post
            </button>
            {err && <ErrorMessage errMessage={err} />}
          </form>
        </div>
      </div>
    </PageWrapper>
  );
};

export default WelcomePage;
