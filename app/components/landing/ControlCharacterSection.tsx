"use client";
import React, { type FC, useState } from "react";

const ControlCharacterSection: FC = () => {
  const [characterPosition, setCharacterPosition] = useState<number>(50);
  const [characterAnimation, setCharacterAnimation] =
    useState<string>("charIdle");
  const [left, setLeft] = useState<boolean>(false);
  const moveLeft = () => {
    if (characterPosition > 0) {
      setLeft(true);
      setCharacterAnimation("charMoveLeft");
      setCharacterPosition(characterPosition - 5);
    }
  };
  const moveRight = () => {
    if (characterPosition < 90) {
      setLeft(false);
      setCharacterAnimation("charMoveRight");
      setCharacterPosition(characterPosition + 5);
    }
  };
  const moveDuck = () => {
    setCharacterAnimation("charMoveDuck");
  };
  const moveJump = () => {
    setCharacterAnimation("charMoveJump");
  };
  return (
    <section className='w-full flex flex-col px-[10%] h-full min-h-[400px]'>
      <div className='bg-blue-200 relative w-full h-full min-h-[70px] overflow-hidden flex items-center'>
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
          } ${left ? "leftCharacter" : ""} absolute transition-all `}
          style={{
            left: `${characterPosition}%`,
            transformOrigin: "center",
          }}></div>
      </div>
      <div className='flex flex-wrap justify-center'>
        <img
          onClick={moveLeft}
          src='/images/arrow.png'
          alt='up arrow'
          className='scale-75 -rotate-90 -translate-y-2 transition-all active:translate-y-0 drop-shadow-[-10px_0_5px_rgba(0,0,0,0.5)] active:drop-shadow-[0px_0_5px_rgba(0,0,0,0.5)] active:scale-[70%]'
        />
        <img
          src='/images/arrow.png'
          onClick={moveJump}
          alt='up arrow'
          className='scale-75 -translate-y-2 transition-all active:translate-y-0 drop-shadow-[0_10px_5px_rgba(0,0,0,0.5)] active:drop-shadow-[0px_0_5px_rgba(0,0,0,0.5)] active:scale-[70%]'
        />
        <img
          onClick={moveRight}
          src='/images/arrow.png'
          alt='up arrow'
          className='scale-75 rotate-90 -translate-y-2 transition-all active:translate-y-0 drop-shadow-[10px_0_5px_rgba(0,0,0,0.5)] active:drop-shadow-[0px_0_5px_rgba(0,0,0,0.5)] active:scale-[70%]'
        />
        <img
          src='/images/arrow.png'
          onClick={moveDuck}
          alt='up arrow'
          className='scale-75 rotate-180 -translate-y-2 transition-all active:translate-y-0 drop-shadow-[0_-10px_5px_rgba(0,0,0,0.5)] active:drop-shadow-[0px_0_5px_rgba(0,0,0,0.5)] active:scale-[70%]'
        />
      </div>
    </section>
  );
};

export default ControlCharacterSection;
