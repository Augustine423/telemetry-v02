import { useForm } from "react-hook-form";
import { useRef } from "react";
import { useTranslations } from '../../../components/Language';

// eslint-disable-next-line react/prop-types
const PasswordFindForm = ({ passwordResetFormVisible, setPasswordResetFormVisible }) => {
  const { register, handleSubmit, setValue } = useForm();
  const t = useTranslations();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };


  if (!passwordResetFormVisible) return null;

  return (
    <div 
      className="w-screen h-screen bg-opacity-60 bg-slate-500 absolute z-49 flex justify-center items-center font-pretendard"
      onClick={() => setPasswordResetFormVisible(false)}
    >
      <div 
        className="xl:w-2/5 xs:w-full bg-white flex flex-col justify-center items-center rounded-md shadow-sm z-50 p-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full text-lg font-semibold text-start border-b-2 pb-4">{t.findPassword}</div>

        {/* Register Form */}
        <form 
          className="w-full flex flex-col justify-center items-center gap-6 mt-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Name */}
          <div className="w-full flex justify-start items-center">
            <label className="w-1/4 font-semibold">{t.name}</label>
            <input
              type="text"
              placeholder={t.namePlaceholder}
              className="w-2/4 p-2 border-2 border-gray-300 rounded-md"
              {...register("name")}
            />
          </div>

          {/* Email */}
          <div className="w-full flex justify-start items-center overflow-hidden relative">
            <label className="w-1/4 font-semibold">{t.email}</label>
            <input
              type="email"
              placeholder={t.emailPlaceholder}
              className="w-2/4 p-2 border-2 border-gray-300 rounded-md"
              {...register("email")}
            />
            <div className="w-1/4 flex items-center justify-start">
              <button type="button" className="w-40 text-center outline-none rounded-md bg-blue-100 border-0.5 pt-3 pb-3 pr-8 pl-8 ml-2 text-primary font-semibold text-sm">
                {t.certified}
              </button>
            </div>
            <div className="p-1 flex justify-center items-center absolute right-48 text-sm">05:00</div>
          </div>

          {/* Email Check */}
          <div className="w-full flex justify-start items-center">
            <label className="w-1/4 font-semibold"></label>
            <input
              type="email"
              placeholder={t.emailCheckPlaceholder}
              className="w-2/4 p-2 border-2 border-gray-300 rounded-md"
              {...register("emailCheck")}
            />
            <div className="w-1/4 flex items-center justify-start">
              <button type="button" className="w-40 text-center outline-none rounded-md bg-gray-100 border-0.5 pt-3 pb-3 pr-8 pl-8 ml-2 text-gray-600 font-semibold text-sm">
                {t.check}
              </button>
            </div>
          </div>


          {/* Buttons */}
          <div className="w-full flex justify-center items-center gap-2">
            <button
              type="button"
              className="outline-none rounded-md bg-transparent border-0.5 pt-2 pb-2 pl-12 pr-12 text-gray-600 font-semibold text-sm"
              onClick={() => setPasswordResetFormVisible(false)}
            >
              {t.cancel}
            </button>
            <button
              type="submit"
              className="outline-none rounded-md bg-blue-100 border-0.5 pt-2 pb-2 pl-12 pr-12 text-primary font-semibold text-sm"
            >
              {t.next}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordFindForm;