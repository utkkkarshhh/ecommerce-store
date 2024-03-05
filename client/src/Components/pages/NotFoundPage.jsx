import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NotFoundPage.module.css";
import error from "../../Assets/images/error.png";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.notFoundPage}>
      <div className={styles.notFound}>
        <img className={styles.errorImage} src={error} alt="Error"></img>
        <div>
          <h1 className={styles.errorPageHeading}>Page Not Found</h1>
          <p className={styles.errorPageMessage}>
            The page you are looking for does not exist.
          </p>
          <button className={styles.goBackButton} onClick={handleGoBack}>
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
