import { useState } from "react";
import style from "./About.module.css"

const About = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={style.container}>
      <img
        src="https://scontent.fmdz7-1.fna.fbcdn.net/v/t39.30808-6/312014495_5469280169815534_4626252994006612468_n.jpg?_nc_cat=109&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGzsKvdsTX89hW4pNOOvrQoGLlB-37sl0sYuUH7fuyXS1urtjTM2bsbVLuI8Y7HJSLrQ9L_tT8yIAs96bniHibi&_nc_ohc=7SRFyvD1wSYAX9L5gmI&_nc_ht=scontent.fmdz7-1.fna&oh=00_AfCmdU-mCuvTa5x7fB2CF0xpUDLl6DIcL_f6USRzlch2yg&oe=64A884FD"
        alt="yo"
        className={`${style.image} ${isActive ? style.active : ''}`}
        onClick={handleClick}
      />
      <p className={`${style.text} ${isActive ? style.active : ''}`}>
        Mi nombre es David De Biazi<br/>
        Tengo 28 años y soy alumno de la cohorte FT-40a
      </p>
      <a href="https://www.instagram.com/debiazidavid/" target="_blank" rel="noopener noreferrer">Mi perfil de Instagram</a>
    </div>
  );
}

export default About;

