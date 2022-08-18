import React from "react";
import Review from "./Review";

const Card3 = () => {
  return (
    <div className="container">
      <Review />
      <form class="row g-3 my-2">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Email
          </label>
          <input type="email" class="form-control" id="email" />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
            Phone
          </label>
          <input type="phone" class="form-control" id="phone" />
        </div>
        <div class="form-floating">
          <textarea
            class="form-control"
            placeholder="Leave a comment here"
            id="comment"
            style={{height: "100px"}}
          ></textarea>
          <label for="floatingTextarea2">Comments</label>
        </div>
        <div class="col-12 text-center">
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Card3;
