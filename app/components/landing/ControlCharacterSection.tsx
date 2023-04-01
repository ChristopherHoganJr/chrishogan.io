"use client";
import React, { type FC, useState } from "react";

const ControlCharacterSection: FC = () => {
  const [characterPosition, setCharacterPosition] = useState<number>(50);
  const [characterAnimation, setCharacterAnimation] =
    useState<string>("charIdle");
  const [left, setLeft] = useState<boolean>(false);
  const moveLeft = () => {
    if (characterPosition > 20) {
      setLeft(true);
      setCharacterAnimation("charMoveLeft");
      setCharacterPosition(characterPosition - 5);
      setTimeout(() => {
        setCharacterAnimation("charIdle");
      }, 150);
    }
  };
  const moveRight = () => {
    if (characterPosition < 80) {
      setLeft(false);
      setCharacterAnimation("charMoveRight");
      setCharacterPosition(characterPosition + 5);
      setTimeout(() => {
        setCharacterAnimation("charIdle");
      }, 150);
    }
  };
  const moveDuck = () => {
    setCharacterAnimation("charMoveDuck");
    setTimeout(() => {
      setCharacterAnimation("charIdle");
    }, 500);
  };
  const moveJump = () => {
    setCharacterAnimation("charMoveJump");
    setTimeout(() => {
      setCharacterAnimation("charIdle");
    }, 500);
  };
  return (
    <section className="w-full bg-[var(--color-white)] p-4">
      <div className=" max-w-7xl mx-auto  ">
        <div className="border-2 rounded-md p-4 border-[var(--color-black)]">
          <h2 className="font-bold text-4xl text-[var(--color-black)] text-center">
            Element Control
          </h2>

          <div className=" relative w-full h-[200px] overflow-hidden  ">
            <div
              className="absolute transition-all top-[40%]"
              style={{
                left: `${characterPosition}%`,
                transformOrigin: "center",
              }}
            >
              <div
                className={`${
                  characterAnimation == "charMoveLeft"
                    ? "charMoveLeft"
                    : characterAnimation == "charMoveRight"
                    ? "charMoveRight"
                    : characterAnimation == "charMoveDuck"
                    ? "charMoveDuck"
                    : characterAnimation == "charMoveJump"
                    ? "charMoveJump"
                    : "charIdle"
                } ${left ? "leftCharacter" : ""}  `}
              ></div>
            </div>
          </div>
          <div className=" flex justify-center flex-wrap">
            <img
              onClick={moveLeft}
              src="/images/arrow.png"
              alt="up arrow"
              className="scale-75 -rotate-90 -translate-y-2 transition-all active:translate-y-0 drop-shadow-[-10px_0_5px_rgba(0,0,0,0.5)] active:drop-shadow-[0px_0_5px_rgba(0,0,0,0.5)] active:scale-[70%] md:hover:scale-[80%] md:hover:-translate-y-4 md:hover:drop-shadow-[-18px_0_5px_rgba(0,0,0,0.5)]"
            />

            <img
              src="/images/arrow.png"
              onClick={moveJump}
              alt="up arrow"
              className="scale-75 -translate-y-2 transition-all active:translate-y-0 drop-shadow-[0_10px_5px_rgba(0,0,0,0.5)] active:drop-shadow-[0px_0_5px_rgba(0,0,0,0.5)] active:scale-[70%] m;md:hover:scale-[80%] md:hover:-translate-y-4 md:hover:drop-shadow-[0_18px_5px_rgba(0,0,0,0.5)]"
            />

            <img
              onClick={moveRight}
              src="/images/arrow.png"
              alt="up arrow"
              className="scale-75 rotate-90 -translate-y-2 transition-all active:translate-y-0 drop-shadow-[10px_0_5px_rgba(0,0,0,0.5)] active:drop-shadow-[0px_0_5px_rgba(0,0,0,0.5)] active:scale-[70%] md:hover:scale-[80%] md:hover:-translate-y-4 md:hover:drop-shadow-[18px_0_5px_rgba(0,0,0,0.5)]"
            />

            <img
              src="/images/arrow.png"
              onClick={moveDuck}
              alt="up arrow"
              className="scale-75 rotate-180 -translate-y-2 transition-all active:translate-y-0 drop-shadow-[0_-10px_5px_rgba(0,0,0,0.5)] active:drop-shadow-[0px_0_5px_rgba(0,0,0,0.5)] active:scale-[70%] md:hover:scale-[80%] md:hover:-translate-y-4 md:hover:drop-shadow-[0_-18px_5px_rgba(0,0,0,0.5)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ControlCharacterSection;
