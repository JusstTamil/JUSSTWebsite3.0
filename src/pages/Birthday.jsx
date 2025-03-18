import React, { useEffect, useState } from "react";
import { UJP } from "../assets";
import PartyPopper from "../components/PartyPopper";

const Birthday = () => {
  const [name, setName] = useState("second");
  const [age, setAge] = useState(18);
  const [image, setImage] = useState("second");

  useEffect(() => {
    const d = new Date();
    const date = d.getDate();
    const month = d.getMonth() + 1;
    const year = d.getFullYear();

    if (date == 22 && month == 3) {
      setName("UJP");
      setAge(year - 2007);
      setImage(UJP);
      document.title = 'Happy Birthday UJP ~ JUSST'
    } else if (date == 15 && month == 2) {
      setName("Jayananthan");
      setAge(year - 2007);
      document.title = 'Happy Birthday Jayananthan ~ JUSST'
    } else if (date == 7 && month == 7) {
      setName("Sankar");
      setAge(year - 2006);
      document.title = 'Happy Birthday Sankar ~ JUSST'
    } else {
        document.title = "Error ~ B'Day Not Today"
        return ErrorComponent()
    }
  }, []);

  return (
    <React.Fragment>
      <div className="w-screen h-screen bg-myBlack font-playwrite overflow-hidden flex justify-center items-center flex-col gap-3">
        <h1 className="w-4/5 text-4xl md:text-5xl text-white capitalize font-bold text-center leading-loose">
          Many More Happy returns of the day {name}
        </h1>
        <h2 className="font-roboto text-3xl font-semibold pt-10">🎂 Happy {age} 🎂</h2>
        <img src={image} alt="" className="w-96" />
        <PartyPopper />
      </div>
    </React.Fragment>
  );
};

const ErrorComponent = () => {
    return (
        <h1 className="">Please Try again later</h1>
    )
}

export default Birthday;
