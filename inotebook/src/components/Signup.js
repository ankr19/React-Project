import React from "react";

const Signup = () => {
  return (
    <div className="container">
      <form class="row g-3 needs-validation" novalidate>
        <div class="col-md-4 position-relative">
          <label for="Fname" class="form-label">
            First name
          </label>
          <input
            type="text"
            class="form-control"
            id="Fname"
            value="Mark"
            required
          />
          <div class="valid-tooltip">Looks good!</div>
        </div>
        <div class="col-md-4 position-relative">
          <label for="Lname" class="form-label">
            Last name
          </label>
          <input
            type="text"
            class="form-control"
            id="Lname"
            value="Otto"
            required
          />
          <div class="valid-tooltip">Looks good!</div>
        </div>
        <div class="col-md-4 position-relative">
          <label for="Email" class="form-label">
            Email
          </label>
          <div class="input-group has-validation">
            <span
              class="input-group-text"
              id="EmailPrepend"
            >
              <i class="bi bi-envelope"></i>
            </span>
            <input
              type="text"
              class="form-control"
              id="Email"
              aria-describedby="EmailPrepend"
              required
            />
            <div class="invalid-tooltip">Please enter valid Email.</div>
          </div>
        </div>
        <div class="col-md-4 position-relative">
          <label for="Password" class="form-label">
            password
          </label>
          <div class="input-group has-validation">
            <span
              class="input-group-text"
              id="PasswordPrepend"
            >
              <i class="bi bi-lock-fill"></i>
            </span>
            <input
              type="text"
              class="form-control"
              id="Password"
              aria-describedby="PasswordPrepend"
              required
            />
            <div class="invalid-tooltip">Please enter valid Email.</div>
          </div>
        </div>
        <div class="col-md-4 position-relative">
          <label for="validationTooltipUsername" class="form-label">
            Re-password
          </label>
          <div class="input-group has-validation">
            <span
              class="input-group-text"
              id="validationTooltipUsernamePrepend"
            >
              <i class="bi bi-lock-fill"></i>
            </span>
            <input
              type="text"
              class="form-control"
              id="validationTooltipUsername"
              aria-describedby="validationTooltipUsernamePrepend"
              required
            />
            <div class="invalid-tooltip">Please enter valid Email.</div>
          </div>
        </div>

        <div class="col-12">
          <button class="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
