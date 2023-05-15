import { Link } from "react-router-dom";
import loginImg from "../../../assets/images/login/login.svg";

const SignUp = () => {
  const handleSignUp = (event) => {
    event.preventDefault();
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row gap-12">
        <div className="text-center lg:text-left w-1/2">
          <img src={loginImg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Sign Up now!</h1>
            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  required
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Sign up"
                  className="btn btn-primary"
                />
              </div>
            </form>
            <p className="text-center my-4">
              Already have an account?{" "}
              <Link to="/login" className="text-orange-600  font-bold">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
