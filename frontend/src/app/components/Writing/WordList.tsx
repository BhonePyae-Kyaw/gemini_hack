import React from "react";

type Props = {
  words: any;
};

const WordList = ({ words }: Props) => {
  console.log(words);
  return (
    <div>
      <div className="bg-purple-400 h-[350px] w-[350px] p-4 rounded-tr-3xl rounded-bl-3xl border-2 border-pink-100">
        <h1 className="text-center font-bold text-xl text-white pt-4">
          Question
        </h1>
        <div>
          <div className="flex; grid grid-rows-5 grid-cols-2 gap-3.5 justify-center items-center pl-5 pr-5 pt-7 pb-3">
            {words?.map((word: any) => (
              <div
                key={word?.id}
                className="bg-pink-100 h-9 w-23 rounded text-center p-2 font-medium text-white"
              >
                {word?.word}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordList;
