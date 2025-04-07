import React from "react";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { BsPlusCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { storeReport ,fetchReports} from "../../../../../../stores/reportData/reportSlice";
const ItemRequestReportRegister = () => {
  const [workItems, setWorkItems] = useState([{ id: 1 }]);
  const navigate = useNavigate();
  const today = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState(today);

  // constant data declaration
  const [username, setUsername] = useState("John Doe");
  const [vassel, setVessel] = useState("Vassel1");
  const [qty, setQty] = useState("23");

  const addWorkItem = () => {
    const newId =
      workItems.length > 0
        ? Math.max(...workItems.map((item) => item.id)) + 1
        : 1;
    setWorkItems([...workItems, { id: newId }]);
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { submitError, setSubmitError } = useState(null);
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      setSubmitError(null);
      const payload = { ...data };
      await dispatch(storeReport(payload)).unwrap();
      dispatch(fetchReports);
      navigate("/dashboard/report-overview");
      console.log("Form Submitted:", data);
    } catch (error) {
      setSubmitError(error.message || "Failed to save item request report.");
      console.error("Error while saving item request report:", error);
    }
  };
  return (
    <>
      {/* Basic Info Section */}
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-8 py-5">
          <div className="flex items-center mb-4 border-b pb-3">
            <h2 className="text-md font-medium text-gray-800">Basic Info</h2>
            <span className="ml-2 text-xs text-gray-500">(Required)</span>
          </div>
          <div className="border-b pb-3">
            <div className=" mx-10 ">
              <div className="w-2/3 flex justify-between items-center">
                <label
                  htmlFor="date"
                  className="w-1/3 block text-sm font-medium text-gray-700 mb-1"
                >
                  Date
                </label>
                <input
                  id="date"
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  placeholder="Fix to Today"
                  className="w-2/3 hide-calendar-icon bg-gray-200  px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="w-2/3 flex justify-between items-center py-5">
                <label
                  htmlFor="author"
                  className="w-1/3 block text-sm font-medium text-gray-700 mb-1"
                >
                  Author
                </label>
                <input
                  type="text"
                  id="author"
                  value={username}
                  placeholder="Fix to the logged-in user"
                  className="w-2/3 px-3 bg-gray-200  py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="w-2/3 flex justify-between items-center ">
                <label
                  htmlFor="vassel"
                  className="w-1/3 block text-sm font-medium text-gray-700 mb-1"
                >
                  Vessel
                </label>
                <input
                  type="text"
                  id="vassel"
                  value={vassel}
                  placeholder="Fix to the connected vessel"
                  className="w-2/3 px-3 py-2 border bg-gray-200 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="w-2/3 flex justify-between items-center py-5">
                <label
                  htmlFor="quantity"
                  className="w-1/3 block text-sm font-medium text-gray-700 mb-1"
                >
                  Quantity
                </label>
                <input
                  type="text"
                  id="quantity"
                  value={qty}
                  placeholder="Auto Calculation"
                  className="w-2/3 px-3 py-2 border bg-gray-200 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Item Detail  */}
        <div className="mb-8 ">
          <div className="flex items-center justify-between border-b py-5 ">
            <div className="flex items-center ">
              <h2 className="text-md font-medium text-gray-800">Item Detail</h2>
              <span className="ml-2 text-xs text-gray-500">(Required)</span>
            </div>
            <button
              onClick={addWorkItem}
              className="flex items-center text-sm text-gray-400 hover:text-blue-800 mr-12"
            >
              <BsPlusCircleFill className="size-4 mr-1" />
              Add item
            </button>
          </div>
          {workItems.map((item) => (
            <div key={item.id} className="border-b">
              <div className="mx-10 pt-5">
                <div className="flex justify-center gap-7">
                  <div className="w-2/3 flex justify-between items-center ">
                    <label
                      htmlFor="hsCode"
                      className="w-1/3 block text-sm font-medium text-gray-700 mb-1"
                    >
                      HS Code
                    </label>
                    <div className="w-[55%]">
                      <input
                        type="text"
                        id="hsCode"
                        {...register("hsCode", {
                          required: "HS Code is required.",
                        })}
                        placeholder="Please Enter"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      {errors.hsCode && (
                        <div className="mt-1">
                          <p className="text-red-500 text-sm">
                            {errors.hsCode.message}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="w-2/3 flex justify-between items-center">
                    <label
                      htmlFor="classification"
                      className="w-1/3 block text-sm font-medium text-gray-700 mb-1"
                    >
                      Classification
                    </label>
                    <div className="w-[55%]">
                      <input
                        type="text"
                        id="classification"
                        {...register("classification", {
                          required: "Classification is required.",
                        })}
                        placeholder="Please Enter"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      {errors.classification && (
                        <div className="mt-1">
                          <p className="text-red-500 text-sm">
                            {errors.classification.message}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex justify-center gap-7">
                  <div className="w-2/3 flex justify-between items-center py-5">
                    <label
                      htmlFor="itemName"
                      className="w-1/3 block text-sm font-medium text-gray-700 mb-1"
                    >
                      Item Name
                    </label>
                    <div className="w-[55%]">
                      <input
                        type="text"
                        id="itemName"
                        {...register("itemName", {
                          required: "Item Name is required.",
                        })}
                        placeholder="Please Enter"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      {errors.itemName && (
                        <div className="mt-1">
                          <p className="text-red-500 text-sm">
                            {errors.itemName.message}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="w-2/3 flex justify-between items-center py-5">
                    <label
                      htmlFor="itemDetail"
                      className="w-1/3 block text-sm font-medium text-gray-700 mb-1"
                    >
                      Item Detail
                    </label>
                    <div className="w-[55%]">
                      <input
                        type="text"
                        id="itemDetail"
                        {...register("itemDetail", {
                          required: "Item Detail is required.",
                        })}
                        placeholder="Please Enter"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      {errors.itemDetail && (
                        <div className="mt-1">
                          <p className="text-red-500 text-sm">
                            {errors.itemDetail.message}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex justify-center gap-7">
                  <div className="w-2/3 flex justify-between items-center ">
                    <label
                      htmlFor="requiredQty"
                      className="w-1/3 block text-sm font-medium text-gray-700 mb-1"
                    >
                      Required quantity
                    </label>
                    <div className="w-[55%]">
                      <input
                        type="text"
                        id="requiredQty"
                        {...register("requiredQty", {
                          required: "Required Quantity is required.",
                        })}
                        placeholder="Please Enter"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      {errors.requiredQty && (
                        <div className="mt-1">
                          <p className="text-red-500 text-sm">
                            {errors.requiredQty.message}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="w-2/3 flex justify-between items-center ">
                    <label
                      htmlFor="requestedQty"
                      className="w-1/3 block text-sm font-medium text-gray-700 mb-1"
                    >
                      Requested quantity
                    </label>
                    <div className="w-[55%]">
                      <input
                        type="text"
                        id="requestedQty"
                        {...register("requestedQty", {
                          required: "Requested quantity is required.",
                        })}
                        placeholder="Please Enter"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      {errors.requestedQty && (
                        <div className="mt-1">
                          <p className="text-red-500 text-sm">
                            {errors.requestedQty.message}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex justify-center gap-7">
                  <div className="w-2/3 flex justify-between items-center py-5">
                    <label
                      htmlFor="supplier"
                      className="w-1/3 block text-sm font-medium text-gray-700 mb-1"
                    >
                      Supplier (link)
                    </label>
                    <div className="w-[55%]">
                      <input
                        type="text"
                        id="supplier"
                        {...register("supplier", {
                          required: "Supplier (link) is required.",
                        })}
                        placeholder="Please Enter"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      {errors.supplier && (
                        <div className="mt-1">
                          <p className="text-red-500 text-sm">
                            {errors.supplier.message}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="w-2/3 flex justify-between items-center py-5">
                    <label
                      htmlFor="mandatoryRequirements"
                      className="w-1/3 block text-sm font-medium text-gray-700 mb-1"
                    >
                      Mandatory requirements
                    </label>
                    <div className="w-[55%]">
                      <input
                        type="text"
                        id="mandatoryRequirements"
                        {...register("mandatoryRequirements", {
                          required: "Mandatory requirements is required.",
                        })}
                        placeholder="Please Enter"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      {errors.mandatoryRequirements && (
                        <div className="mt-1">
                          <p className="text-red-500 text-sm">
                            {errors.mandatoryRequirements.message}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex justify-center gap-5">
                  <div className="w-2/3 flex justify-between items-center ">
                    <label
                      htmlFor="reason"
                      className="w-1/3 block text-sm font-medium text-gray-700 mb-1"
                    >
                      Reason
                    </label>
                    <div className="w-[55%]">
                      <input
                        type="text"
                        id="reason"
                        {...register("reason", {
                          required: "Reason is required.",
                        })}
                        placeholder="Please Enter"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      {errors.reason && (
                        <div className="mt-1">
                          <p className="text-red-500 text-sm">
                            {errors.reason.message}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="w-2/3 flex justify-between items-center">
                    <label
                      htmlFor="amount"
                      className="w-1/3 block text-sm font-medium text-gray-700 mb-1"
                    >
                      Amount
                    </label>
                    <div className="w-[55%]">
                      <input
                        type="text"
                        id="amount"
                        {...register("amount", {
                          required: "Amount is required.",
                        })}
                        placeholder="Please Enter"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      {errors.amount && (
                        <div className="mt-1">
                          <p className="text-red-500 text-sm">
                            {errors.amount.message}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="w-2/3 flex justify-start items-center py-5">
                  <label
                    htmlFor="totalAmount"
                    className="w-1/3 block text-sm font-medium text-gray-700 mb-1"
                  >
                    Total Amount
                  </label>
                  <div className="w-[40%] ">
                    <input
                      type="text"
                      id="totalAmount"
                      {...register("totalAmount", {
                        required: "Total Amount is required.",
                      })}
                      placeholder="Please Enter"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.totalAmount && (
                      <div className="mt-1">
                        <p className="text-red-500 text-sm">
                          {errors.totalAmount.message}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Form Actions */}
        <div className="flex justify-end space-x-3">
          <button type="button" onClick={() => reset()} className="px-7 border py-2 text-sm font-medium text-gray-700  rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            Cancel
          </button>
          <button type="submit" className="px-7 py-2 text-sm font-medium text-blue-500 bg-blue-100 rounded-md hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default ItemRequestReportRegister;
