import React from "react";

function ChangePasswordComponent() {
  return (
    <>
      <div className="w-2/6 flex flex-col mt-10 ">
      <div className="rounded-lg bg-white shadow-xl border-0">
        <div className="mx-6 my-3 ">
          <form action="">
            <div className="col-12 col-md-12 mb-2">
              <div className="form-group">
                <label>Old Password</label>
                <input
                  type="text"
                  className="form-control rounded-md border-gray-300"
                  placeholder="Enter your old password"
                />
              </div>
            </div>
            <div className="col-12 col-md-12 mb-2">
              <div className="form-group">
                <label>New Password</label>
                <input
                  type="text"
                  className="form-control rounded-md border-gray-300"
                  placeholder="Enter your New password"
                />
              </div>
            </div>
            <div className="col-12 col-md-12">
              <div className="form-group">
                <label>Confirm password</label>
                <input
                  type="text"
                  className="form-control rounded-md border-gray-300"
                  placeholder="Confirm your password"
                />
              </div>
            </div>
            <div className="flex mt-3 justify-end">
              <button
                type="submit"
                className="bg-blue-600 py-1 px-2 text-white rounded-lg hover:bg-blue-800"
              >
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
    </>
  );
}

export default ChangePasswordComponent;
