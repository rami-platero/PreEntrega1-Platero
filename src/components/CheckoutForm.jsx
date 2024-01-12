import React, { useState } from "react";
import { toast } from "sonner";
import { LuLoader2 } from "react-icons/lu";

const CheckoutForm = ({ onSubmit, isLoading }) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    emailAddress: "",
    repeatEmailAddress: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateEmailAdress = () => {
    if (form.emailAddress !== form.repeatEmailAddress) {
      throw new Error(
        "The email confirmation does not match the original email."
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      validateEmailAdress();
      await onSubmit(form);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 max-w-md w-full"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm">
          First Name
        </label>
        <input
          type="text"
          className="bg-black/25 outline-none border-[1px] border-white/20 px-4 py-2 rounded-md"
          required
          value={form.firstName}
          onChange={handleChange}
          name={"firstName"}
          autoComplete="off"
          spellCheck="false"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm">
          Last Name
        </label>
        <input
          type="text"
          className="bg-black/25 outline-none border-[1px] border-white/20 px-4 py-2 rounded-md"
          required
          value={form.lastName}
          onChange={handleChange}
          name={"lastName"}
          autoComplete="off"
          spellCheck="false"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm">
          Phone Number
        </label>
        <input
          type="number"
          className="bg-black/25 outline-none border-[1px] border-white/20 px-4 py-2 rounded-md"
          required
          value={form.phoneNumber}
          onChange={handleChange}
          name={"phoneNumber"}
          autoComplete="off"
          spellCheck="false"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm">
          Email Address
        </label>
        <input
          type="text"
          className="bg-black/25 outline-none border-[1px] border-white/20 px-4 py-2 rounded-md"
          required
          value={form.emailAddress}
          onChange={handleChange}
          name={"emailAddress"}
          autoComplete="off"
          spellCheck="false"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm">
          Repeat your Email Address
        </label>
        <input
          type="text"
          className="bg-black/25 outline-none border-[1px] border-white/20 px-4 py-2 rounded-md"
          required
          value={form.repeatEmailAddress}
          onChange={handleChange}
          name={"repeatEmailAddress"}
          autoComplete="off"
          spellCheck="false"
        />
      </div>
      <button
        type="submit"
        className="bg-indigo-700 bg-opacity-50 border-2 border-indigo-500 px-8 py-2 mt-4 rounded-2xl text-sm text-zinc-200 font-semibold hover:bg-indigo-500 transition ease-in-out disabled:opacity-25 disabled:pointer-events-none flex justify-center"
        disabled={isLoading}
      >
        {isLoading ? (
          <LuLoader2 size={"1.2rem"} className="animate-spin" />
        ) : (
          "Checkout"
        )}
      </button>
    </form>
  );
};

export default CheckoutForm;
