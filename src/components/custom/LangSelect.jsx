import { useState, useRef, useEffect } from "react";
// import Transition from "../utils/Transition";
import Transition from "../../utils/custom/Transition";
import images from "../../images/custom";
import { useGetLanguagesQuery } from "../../features/users/usersApiSlice";
import i18n from "../../i18n";
import { useDispatch, useSelector } from "react-redux";
import { selectLang, setLanguage } from "../../features/auth/authSlice";
import { useTranslation } from "react-i18next";

const languages = [
  {
    id: 1,
    name: "English",
    abbreviation: "en",
  },
  {
    id: 2,
    name: "Spanish",
    abbreviation: "es",
  },
];

function LangSelect() {
  const { t } = useTranslation();
  //const { data: languages } = useGetLanguagesQuery();
  const dispatch = useDispatch();
  const lang = useSelector(selectLang);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selected, setSelected] = useState(lang);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    //  console.log(languages[selected].abbreviation);
    // i18n.changeLanguage(languages[selected].abbreviation);
  }, [selected]);

  useEffect(() => {
    // dispatch(setLanguage(languages[selected].abbreviation));
    dispatch(setLanguage(selected));
    i18n.changeLanguage(lang);
  }, [lang, selected]);

  console.log(lang);

  return (
    <div className="relative">
      <button
        ref={trigger}
        className="btn justify-between h-auto hover:border-slate-300 text-black md:px-6 hover:text-slate-600 w-full md:w-auto text-lg"
        aria-label="Select date range"
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <span className="flex items-center">
          {/* <svg className="w-4 h-4 fill-current text-slate-500 shrink-0 mr-2" viewBox="0 0 16 16">
            <path d="M15 2h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1zm-1 12H2V6h12v8z" />
          </svg> */}
          <div className="w-[30px] h-[30px] rounded-[50%] mr-2">
            {selected === "en" ? (
              <img src={images.UsaFlag} />
            ) : (
              <img src={images.SpainFlag} />
            )}
          </div>
          <span className="hidden md:block">
            {selected === "en" ? t("language.english") : t("language.spanish")}
          </span>
        </span>
        {/* <svg
          className="shrink-0 ml-1 fill-current text-slate-400"
          width="11"
          height="7"
          viewBox="0 0 11 7"
        >
          <path d="M5.4 6.8L0 1.4 1.4 0l4 4 4-4 1.4 1.4z" />
        </svg> */}
      </button>
      <Transition
        show={dropdownOpen}
        tag="div"
        className="z-10 absolute top-full right-0 w-full bg-white rounded shadow-lg overflow-hidden"
        enter="transition ease-out duration-100 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-100"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div
          ref={dropdown}
          className="font-medium text-slate-600"
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
        >
          {languages?.map((lang, i) => {
            return (
              <button
                key={lang.id}
                tabIndex="0"
                className={`flex w-full hover:bg-slate-50 cursor-pointer py-1.5 justify-center border border-b-slate-200 ${
                  lang.abbreviation === selected && "text-primary"
                }`}
                onClick={() => {
                  setSelected(lang.abbreviation);
                  setDropdownOpen(false);
                }}
              >
                {/* <svg className={`shrink-0 mr-2 fill-current text-primary ${option.id !== selected && 'invisible'}`} width="12" height="9" viewBox="0 0 12 9">
                    <path d="M10.28.28L3.989 6.575 1.695 4.28A1 1 0 00.28 5.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28.28z" />
                  </svg> */}

                <span>{t(`language.${lang.name.toLowerCase()}`)}</span>
              </button>
            );
          })}
        </div>
      </Transition>
    </div>
  );
}

export default LangSelect;
