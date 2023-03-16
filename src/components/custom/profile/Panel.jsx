import { useEffect, useRef, useState } from "react";

import Image from "../../../images/user-avatar-80.png";
import images from "../../../images/custom";
import icons from "../../../images/custom/icons";
import { useForm } from "react-hook-form";

const user = {
  id: 18,
  profile_image: "/media/profile_photo/28654-abstractos_jzRNQxO.jpg",
  first_name: "Angel Ezequiel",
  last_name: "Jorge Valdes",
  email: "43angelgonzalo@email.com",
};

function Panel() {
  const [changePwd, setChangePwd] = useState(false);
  const [sync, setSync] = useState(false);

  return (
    <section className="grow">
      {/* Panel body */}
      <div className="p-6 space-y-6">
        <h2 className="text-2xl text-slate-800 font-bold mb-5">My Account</h2>
        {/* Picture */}
      </div>
      <div className="p-6 space-y-6">
        {changePwd ? (
          <ChangePassword setChangePwd={setChangePwd} />
        ) : (
          <PersonalInformation setChangePwd={setChangePwd} />
        )}
      </div>
    </section>
  );
}

const PersonalInformation = ({ setChangePwd }) => {
  const [file, setFile] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    let defaultValues = {};
    defaultValues.first_name = user?.first_name;
    defaultValues.last_name = user?.last_name;
    defaultValues.email = user?.email;
    defaultValues.profile_image = user?.profile_image;
    reset({ ...defaultValues });
  }, [reset]);

  const submitForm = (data) => {
    console.log(data, file?.name);

    let formData = new FormData();

    formData.append("first_name", data.first_name);
    formData.append("last_name", data.last_name);
    formData.append("email", data.email);
    formData.append("profile_image", file ? file.name : data.profile_image);
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <section className="mb-10">
        <div className="flex items-center">
          <div className="mr-4">
            <img
              className="w-20 h-20 rounded-full"
              src={file ? URL.createObjectURL(file) : images.UserTest}
              width="80"
              height="80"
              alt="User upload"
            />
          </div>
          <label
            htmlFor="profile"
            className="btn-sm bg-primary hover:bg-indigo-600 text-white cursor-pointer"
          >
            Change image
            <input
              type="file"
              id="profile"
              style={{ display: "none" }}
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </label>
        </div>
      </section>
      <section className="mb-10">
        <h2 className="text-xl leading-snug text-slate-800 font-bold mb-1">
          Personal information
        </h2>
        <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
          <div className="sm:w-1/2">
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              First name
            </label>
            <input
              id="name"
              className="form-input w-full"
              type="text"
              {...register("first_name", {
                required: {
                  value: true,
                  message: "This field is required",
                },
              })}
            />
            <div className="text-red-500 text-sm">
              {errors.first_name && errors.first_name.message}
            </div>
          </div>
          <div className="sm:w-1/2">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="location"
            >
              Last name
            </label>
            <input
              id="location"
              className="form-input w-full"
              type="text"
              {...register("last_name", {
                required: {
                  value: true,
                  message: "This field is required",
                },
              })}
            />
            <div className="text-red-500 text-sm">
              {errors.last_name && errors.last_name.message}
            </div>
          </div>
        </div>
      </section>
      <section className="mb-10">
        <h2 className="text-xl leading-snug text-slate-800 font-bold mb-1">
          Email
        </h2>
        <div className="flex flex-wrap mt-5">
          <div className="mr-2 flex flex-col">
            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              className="form-input"
              type="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "This field is required",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>
        </div>
      </section>
      <section className="mb-10">
        <h2 className="text-xl leading-snug text-slate-800 font-bold mb-1">
          Password
        </h2>
        <div className="text-sm">You can change your personal password</div>
        <div className="mt-5">
          <button
            className="btn border-slate-200 shadow-sm text-primary"
            type="button"
            onClick={() => setChangePwd(true)}
          >
            Set New Password
          </button>
        </div>
      </section>

      <footer>
        <div className="flex flex-col px-6 py-5 border-t border-slate-200">
          <div className="flex self-end">
            {/* <button className="btn border-slate-200 hover:border-slate-300 text-slate-600">
              Cancel
            </button> */}
            <button
              type="submit"
              className="btn bg-primary hover:bg-indigo-600 text-white ml-3"
            >
              Save Changes
            </button>
          </div>
        </div>
      </footer>
    </form>
  );
};

const ChangePassword = ({ setChangePwd }) => {
  const [eyeCurrent, setEyeCurrent] = useState(false);
  const [eyeNew, setEyeNew] = useState(false);
  const [eyeConfirm, setEyeConfirm] = useState(false);

  // const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   formState: { errors },
  // } = useForm();

  // useEffect(() => {
  //   let defaultValues = {};
  //   defaultValues.current_password = "";
  //   defaultValues.new_password = "";
  //   defaultValues.confirm_password = "";
  //   reset({ ...defaultValues });
  // }, [reset]);

  // const submitPwdForm = (data) => {
  //   console.log(data);
  // };

  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  const pwdRef = useRef();
  const errRef = useRef();

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [pwdNew, setPwdNew] = useState("");
  const [validPwdNew, setValidPwdNew] = useState(false);
  const [pwdNewFocus, setPwdNewFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    pwdRef.current?.focus();
  }, []);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    setValidPwd(result);
  }, [pwd]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwdNew);
    setValidPwdNew(result);

    const match = pwdNew === matchPwd;
    setValidMatch(match);
  }, [pwdNew, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [pwdNew, pwd, matchPwd]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = PWD_REGEX.test(pwd);
    const v2 = PWD_REGEX.test(pwdNew);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }

    console.log(pwd, pwdNew, matchPwd);

    let formData = new FormData();
    formData.append("current_password", pwd);
    formData.append("new_password", pwdNew);
    formData.append("confirm_password", matchPwd);
  };

  return (
    <form
      //onSubmit={handleSubmit(submitPwdForm)}
      onSubmit={handleSubmit}
    >
      <h2 className="text-xl leading-snug text-slate-800 font-bold mb-6">
        Set New Password
      </h2>
      <div className="flex-1 mb-6">
        <label
          className="block text-sm font-medium mb-1"
          htmlFor="current_password"
        >
          Current password <span className="text-rose-500">*</span>
        </label>
        <div className="w-[60%] h-10">
          <input
            id="current_password"
            className="form-input w-full h-10"
            type={eyeCurrent ? "text" : "password"}
            ref={pwdRef}
            autoComplete="off"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
            aria-invalid={validPwd ? "false" : "true"}
            aria-describedby="pwdnote"
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}
          />

          <section className="relative">
            <button
              type="button"
              className="absolute inset-2 -top-8 left-auto flex items-center mr-2"
            >
              {eyeCurrent ? (
                <img
                  onClick={() => setEyeCurrent(false)}
                  src={icons.closedEye}
                  alt="Ojo cerrado"
                />
              ) : (
                <img
                  onClick={() => setEyeCurrent(true)}
                  src={icons.openedEye}
                  alt="Ojo abierto"
                />
              )}
            </button>
          </section>
        </div>
        {/* {errors.current_password && (
          <span className="text-red-500 text-sm">
            {errors.current_password.message}
          </span>
        )} */}
        <p
          id="pwdnote"
          className={
            pwdFocus && !validPwd ? "instructions w-[60%]" : "offscreen"
          }
        >
          8 to 24 characters.
          <br />
          Must include uppercase and lowercase letters, a number and a special
          character.
          <br />
          Allowed special characters:{" "}
          <span aria-label="exclamation mark">!</span>{" "}
          <span aria-label="at symbol">@</span>{" "}
          <span aria-label="hashtag">#</span>{" "}
          <span aria-label="dollar sign">$</span>{" "}
          <span aria-label="percent">%</span>
        </p>
      </div>

      <div className="flex-1 mb-6">
        <label
          className="block text-sm font-medium mb-1"
          htmlFor="new_password"
        >
          New password <span className="text-rose-500">*</span>
        </label>
        <div className="w-[60%] h-10">
          <input
            id="new_password"
            className="form-input w-full h-10"
            type={eyeNew ? "text" : "password"}
            autoComplete="off"
            onChange={(e) => setPwdNew(e.target.value)}
            value={pwdNew}
            required
            aria-invalid={validPwdNew ? "false" : "true"}
            aria-describedby="pwdnewnote"
            onFocus={() => setPwdNewFocus(true)}
            onBlur={() => setPwdNewFocus(false)}
          />

          <section className="relative">
            <button
              type="button"
              className="absolute inset-2 -top-8 left-auto flex items-center mr-2"
            >
              {eyeNew ? (
                <img
                  onClick={() => setEyeNew(false)}
                  src={icons.closedEye}
                  alt="Ojo cerrado"
                />
              ) : (
                <img
                  onClick={() => setEyeNew(true)}
                  src={icons.openedEye}
                  alt="Ojo abierto"
                />
              )}
            </button>
          </section>
        </div>
        <p
          id="pwdnewnote"
          className={
            pwdNewFocus && !validPwdNew ? "instructions w-[60%]" : "offscreen"
          }
        >
          8 to 24 characters.
          <br />
          Must include uppercase and lowercase letters, a number and a special
          character.
          <br />
          Allowed special characters:{" "}
          <span aria-label="exclamation mark">!</span>{" "}
          <span aria-label="at symbol">@</span>{" "}
          <span aria-label="hashtag">#</span>{" "}
          <span aria-label="dollar sign">$</span>{" "}
          <span aria-label="percent">%</span>
        </p>
      </div>

      <div className="flex-1 mb-6">
        <label
          className="block text-sm font-medium mb-1"
          htmlFor="confirm_password"
        >
          Confirm password <span className="text-rose-500">*</span>
        </label>
        <div className="w-[60%] h-10">
          <input
            id="confirm_password"
            className="form-input w-full h-10"
            type={eyeConfirm ? "text" : "password"}
            onChange={(e) => setMatchPwd(e.target.value)}
            value={matchPwd}
            required
            aria-invalid={validMatch ? "false" : "true"}
            aria-describedby="confirmnote"
            onFocus={() => setMatchFocus(true)}
            onBlur={() => setMatchFocus(false)}
          />

          <section className="relative">
            <button
              type="button"
              className="absolute inset-2 -top-8 left-auto flex items-center mr-2"
            >
              {eyeConfirm ? (
                <img
                  onClick={() => setEyeConfirm(false)}
                  src={icons.closedEye}
                  alt="Ojo cerrado"
                />
              ) : (
                <img
                  onClick={() => setEyeConfirm(true)}
                  src={icons.openedEye}
                  alt="Ojo abierto"
                />
              )}
            </button>
          </section>
        </div>
        <p
          id="confirmnote"
          className={
            matchFocus && !validMatch ? "instructions w-[60%]" : "offscreen"
          }
        >
          Must match the new password input field.
        </p>
      </div>

      <footer className="w-full">
        <div className="flex flex-col px-6 py-5 border-t border-slate-200">
          <div className="flex self-end">
            <button
              className="btn border-slate-200 hover:border-slate-300 text-slate-600"
              onClick={() => setChangePwd(false)}
            >
              Cancel
            </button>
            <button
              className="btn bg-primary hover:bg-indigo-600 text-white ml-3"
              //type="submit"
              disabled={!validPwdNew || !validPwd || !validMatch ? true : false}
            >
              Change Password
            </button>
          </div>
        </div>
      </footer>
    </form>
  );
};

export default Panel;
